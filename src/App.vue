<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div class="common-layout ">
    <el-container class="">
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <RouterView/>
      </el-main>
      <el-footer class="bg-[#303030] h-[300px]">
        <Footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  height: 100vh; /* Set the height of the layout to 100% of the viewport height */
}
</style>
