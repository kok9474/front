<template>
  <div class="app-container">
    <header class="header">
      <img src="/logo.png" class="logo"/>
      <div class="search-auth">
        <input type="text" placeholder="검색어를 입력하세요" />
        <button class="btn">회원가입</button>
        <button class="btn login">로그인</button>
      </div>
    </header>
    <div class="body">
      <aside class="sidebar">
        <button v-for="item in items" :key="item" class="menu-btn">{{ item }}</button>
      </aside>
      
      <div class="main-content">
        <PhotoApply />
        <TextApply />
        <OfficeLink />
      </div>
    </div>
  </div>
</template>

<script setup>
import OfficeLink from '@/components/officeLink.vue';
import PhotoApply from '@/components/photoApply.vue';
import TextApply from '@/components/textApply.vue';

const items = ['교통/주차', '교육/학교', '생활 민원', '고용/실업']
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>