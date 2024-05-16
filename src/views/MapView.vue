<script setup>
import Header from '@/component/common/Header.vue';
import InputBox from '@/component/common/InputBox.vue';
import Btn from '@/component/common/Btn.vue';
import SelectBox from '@/component/common/SelectBox.vue';
import AroundItem from '@/component/map/AroundItem.vue';
import Weather from '@/component/common/Weather.vue';
import List from '@/component/board/List.vue';
import Write from '@/component/board/Write.vue';
import Read from '@/component/board/Read.vue';
import { useRoute, useRouter } from 'vue-router';
import { RouterView } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();

const options = ref([
  { value: '', text: '검색조건' },
  { value: 'addr', text: '주소' },
  { value: 'keyword', text: '검색어' },
]);

const searchParam = ref(''); //검색조건

const changeKey = (val) => {
  // 검색조건 함수
  searchParam.value = val;
};

const type = route.params.type;
const activeMenu = ref(type); // 메뉴 클릭시 효과 변수

function setActiveMenu(menu) {
  // 메뉴함수
  // router.push({ name: menu, params: { type: menu } });
  activeMenu.value = menu;
}
</script>

<template>
  <div class="content">
    <Header />
    <section class="mainContent">
      <div class="mapBox">
        <div class="seaechBox">
          <SelectBox :options="options" @onKeySelect="changeKey" />
          <InputBox class="inputBox" />
        </div>
        <div class="map"></div>
        <div class="Info">
          <div>
            <h1 class="InfoTitle">나만의 별 등록</h1>
            <p class="InfoText">
              사용자가 임의로 별 명소를 등록 및 공유할 수 있습니다.
            </p>
          </div>
          <div class="btnArea">
            <Btn :sty="'redBtn'" :text="'등록'" />
            <Btn :sty="'blackBtn'" :text="'이전'" />
          </div>
        </div>
      </div>
      <div class="menuBox">
        <ul class="myMenu">
          <li
            :class="{ active: activeMenu === 'mapHome' }"
            @click="setActiveMenu('mapHome')"
          >
            홈
          </li>
          <li
            :class="{ active: activeMenu === 'placeInfo' }"
            @click="setActiveMenu('placeInfo')"
          >
            명소 정보
          </li>
          <li
            :class="{ active: activeMenu === 'placeAround' }"
            @click="setActiveMenu('placeAround')"
          >
            주변 정보
          </li>
          <li
            :class="{ active: activeMenu === 'placeReview' }"
            @click="setActiveMenu('placeReview')"
          >
            명소 리뷰
          </li>
        </ul>
        <section class="mapContent">
          <ul class="aroundMenu">
            <li
              :class="{ active: activeMenu === 'tour' }"
              @click="setActiveMenu('tour')"
            >
              관광
            </li>
            <li
              :class="{ active: activeMenu === 'culture' }"
              @click="setActiveMenu('culture')"
            >
              문화
            </li>
            <li
              :class="{ active: activeMenu === 'festival' }"
              @click="setActiveMenu('festival')"
            >
              축제
            </li>
            <li
              :class="{ active: activeMenu === 'travel' }"
              @click="setActiveMenu('travel')"
            >
              여행
            </li>
            <li
              :class="{ active: activeMenu === 'Leisure' }"
              @click="setActiveMenu('Leisure')"
            >
              레포츠
            </li>
            <li
              :class="{ active: activeMenu === 'sleep' }"
              @click="setActiveMenu('sleep')"
            >
              숙박
            </li>
            <li
              :class="{ active: activeMenu === 'shop' }"
              @click="setActiveMenu('shop')"
            >
              쇼핑
            </li>
            <li
              :class="{ active: activeMenu === 'food' }"
              @click="setActiveMenu('food')"
            >
              음식
            </li>
            <li
              :class="{ active: activeMenu === 'camp' }"
              @click="setActiveMenu('camp')"
            >
              캠핑
            </li>
          </ul>
          <div class="container-fluid">
            <div class="row">
              <AroundItem class="col-sm-4" />
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<style scoped>
@media (max-width: 790px) {
  .content {
    background-size: 300% !important;
  }
}
.content {
  min-height: 100vh;
  background-image: url('@/assets/img/mapImg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
  overflow: auto;
}
.mainContent {
  width: 100%;
  height: 100%;
  border: 3px solid red;
  margin: 0;
  padding: 0;
  display: flex;
}
.mapBox {
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  position: relative;
  padding: 20px;
}
.seaechBox {
  width: fit-content;
  border: 1px solid red;
  display: flex;
}

.inputBox {
  margin: 0 0 0 10px;
}

.map {
  width: 100%;
  height: 500px;
  border: 1px solid orange;
  margin: 20px 0;
}

.Info {
  border: 1px solid yellow;
  display: flex;
  justify-content: space-between;
}
.InfoTitle {
  color: white;
  font-weight: bold;
}
.InfoText {
  color: white;
}
.btnArea {
  width: fit-content;
}

/* 오른쪽 */
.menuBox {
  width: 100%;
  height: 600px;
  border: 3px solid green;
  margin: 30px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.4);
}

.myMenu {
  width: 95%;
  margin: 0 auto;
  list-style: none;
  color: white;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  border: 1px solid red;
}
.myMenu > li {
  margin-right: 30px;
  cursor: pointer;
  color: #757575;
}
.active {
  color: white !important;
  border-bottom: 4px solid #d30000;
}

.mapContent {
  width: 90%;
  height: 500px;
  border: 1px solid yellow;
  margin: 20px auto 0;
}

/* 아래는 주변메뉴 */
.aroundMenu {
  width: 95%;
  margin: 0 auto;
  list-style: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  border: 1px solid red;
}
.aroundMenu > li {
  margin-right: 30px;
  cursor: pointer;
  color: #757575;
}
.active {
  color: white !important;
  border-bottom: 4px solid #d30000;
}
</style>
