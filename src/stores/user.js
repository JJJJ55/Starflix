import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';
import { jwtDecode } from 'jwt-decode';

import { userLogin, findById, tokenRegeneration, userlogout } from '@/api/user';
import { httpStatusCode } from '@/util/http-status';

export const useUserStore = defineStore('userStore', () => {
  const router = useRouter();

  const isLogin = ref(false);
  const isLoginError = ref(false);
  const userInfo = ref(null);
  const isValidToken = ref(false);

  const login = async (loginUser) => {
    await userLogin(
      loginUser,
      (resp) => {
        if (resp.status === httpStatusCode.CREATE) {
          console.log('로그인 성공');
          let ac = resp.data['access-token'];
          console.log('토큰 ' + ac);
          isLogin.value = true; // 로그인 성공
          isLoginError.value = false; // 로그인 실패
          isValidToken.value = true; // 토큰 발급 유무
          sessionStorage.setItem('accessToken', `Bearer ${ac}`);
        }
      },
      (error) => {
        console.log('로그인 실패');
        isLogin.value = false;
        isLoginError.value = true;
        isValidToken.value = false;
        console.log(error);
      }
    );
  };

  const getUserInfo = async (token) => {
    let decodeToken = jwtDecode(token);
    console.log('파싱토큰 : ' + decodeToken.userId);
    await findById(
      decodeToken.userId,
      (resp) => {
        if (resp.status === httpStatusCode.OK) {
          userInfo.value = resp.data.userInfo;
          console.log(userInfo.value);
        } else {
          console.log('유저 정보 없음');
        }
      },
      async (error) => {
        console.log(
          '토큰만료',
          error.response.status,
          error.response.statusText
        );
        isValidToken.value = false;
        await tokenRegenerate();
      }
    );
  };

  const tokenRegenerate = async () => {
    await tokenRegeneration(
      JSON.stringify(userInfo.value),
      (resp) => {
        if (resp.status === httpStatusCode.CREATE) {
          let ac = resp.data;
          sessionStorage.setItem('accessToken', accessToken);
          isValidToken.value = true;
        }
      },
      async (error) => {
        if (error.response.status === httpStatusCode.UNAUTHORIZED) {
          //이거 아마 500일듯
          await logout(
            userInfo.value.userid,
            (response) => {
              if (response.status === httpStatusCode.OK) {
                console.log('리프레시 토큰 제거 성공');
              } else {
                console.log('리프레시 토큰 제거 실패');
              }
              alert('RefreshToken 기간 만료!!! 다시 로그인해 주세요.');
              isLogin.value = false;
              userInfo.value = null;
              isValidToken.value = false;
              router.push({ name: '/main' });
            },
            (error) => {
              console.error(error);
              isLogin.value = false;
              userInfo.value = null;
            }
          );
        }
      }
    );
  };
  const logout = async () => {
    console.log('로그아웃 아이디 : ' + userInfo.value.userId);
    await userlogout(
      userInfo.value.userId,
      (response) => {
        if (response.status === httpStatusCode.OK) {
          isLogin.value = false;
          userInfo.value = null;
          isValidToken.value = false;

          sessionStorage.removeItem('accessToken');
          sessionStorage.removeItem('refreshToken');
        } else {
          console.error('유저 정보 없음!!!!');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return {
    isLogin,
    isLoginError,
    userInfo,
    isValidToken,
    login,
    getUserInfo,
    tokenRegenerate,
    logout,
  };
});
