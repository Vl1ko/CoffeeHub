<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <header class="flex justify-between px-5 py-5 border-b-2 border-gray-400">
    <RouterLink to="/">
      <div class="flex items-center gap-3">
        <img src="/public/logo.png" alt="logo" class="w-20 h-20">
      </div>
    </RouterLink>

    <ul class="columns-1 gap-10 m-auto mr-1">
      <RouterLink to="/loyal">
      <li class="flex items-center gap-3 cursor-pointer hover:text-gray-600 mb-2">
        <b class="font-semibold">Лояльность</b>
      </li>
    </RouterLink>
    <RouterLink to="/profile">
      <li class="flex items-center gap-3 cursor-pointer hover:text-gray-600">
        <b class="font-semibold">Профиль</b>
      </li>
      

      </RouterLink>
    </ul>
  </header>
</template>