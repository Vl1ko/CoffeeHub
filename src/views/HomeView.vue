<script setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/footer.vue';
  import { RouterLink } from 'vue-router';

  const us_name = localStorage.getItem('name')
</script>
<template>
  <div class="h-screen max-w-100% overflowx-hidden">
    <div class="bg-[#D9D9D9] m-auto shadow-xl">
      <Header />
    </div> 
    <h3 class=" font-semibold text-left m-10">Добро пожаловать, {{ us_name }}!</h3>
    <div class="m-auto w-5/6 h-max">
      <div>
        <h2 class="text-4xl font-semibold text-center m-10">Кофейни в сети</h2>
        <ul>
          <li class="cursor-pointer">
            <RouterLink to="/prachechniy">
              <div class="bg-[url('/public/coffee-pr.png')] bg-cover brightness-100 rounded-3xl bg-center place-content-center bg-no-repeat align-center h-[200px] m-10"></div>
            </RouterLink>
          </li>

          <li class="cursor-pointer">
            <RouterLink to="/nalichnaya">
              <div class="bg-[url('/public/coffee-nal.png')] bg-cover brightness-100 rounded-3xl bg-center place-content-center bg-no-repeat align-center h-[200px] m-10">
              </div>
            </RouterLink>
          </li>

          <li class="cursor-pointer">
            <RouterLink to="/sadovaya">
              <div class="bg-[url('/public/coffee-sad.png')] bg-cover brightness-100 rounded-3xl bg-center place-content-center bg-no-repeat align-center h-[200px] m-10">
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="p-10">
      <Footer />
    </div>
  </div>

</template>

