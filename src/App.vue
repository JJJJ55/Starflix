<script setup>
import SplashView from './views/LoginBefore/SplashView.vue';
import MainView from './views/LoginBefore/MainView.vue';
import LoginView from './views/LoginBefore/LoginView.vue';
import RegistView from './views/LoginBefore/RegistView.vue';
import HomeView from './views/LoginAfter/HomeView.vue';
import BoardView from './views/Board/BoardView.vue';
import BoardCRUD from './views/Board/BoardCRUD.vue';
import MyPickView from './views/Pick/MyPickView.vue';
import MyPageView from './views/MyPageView.vue';
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
    <!-- <RouterView :key="$route.fullPath" /> -->
    <RouterView />
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
