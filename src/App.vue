<script setup>
import SplashView from './views/LoginBefore/SplashView.vue';
import MainView from './views/LoginBefore/MainView.vue';
import LoginView from './views/LoginBefore/LoginView.vue';
import RegistView from './views/LoginBefore/RegistView.vue';
import HomeView from './views/LoginAfter/HomeView.vue';
import BoardView from './views/Board/BoardView.vue';
import MyPickView from './views/Pick/MyPickView.vue';
import MyPageView from './views/MyPageView.vue';
import MapView from './views/MapView.vue';
import TostUi from './component/board/TostUi.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div id="content" class="container-fluid">
    <!-- <SplashView /> -->
    <!-- <MainView /> -->
    <!-- <LoginView /> -->
    <!-- <HomeView /> -->
    <!-- <BoardView /> -->
    <!-- <BoardCRUD /> -->
    <!-- <MyPickView /> -->
    <!-- <MyPageView /> -->
    <!-- 아래꺼임 -->
    <!-- <RouterView :key="$route.fullPath" /> -->
    <!-- <RouterView :key="$route.path" /> -->
    <!-- <RouterView /> -->
    <!-- <TostUi /> -->
    <MapView />
  </div>
</template>

<style scoped>
#content {
  padding: 0;
  min-height: 100vh;
  background-color: black;
  font-family: '프리텐더';
}
</style>
