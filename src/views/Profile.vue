<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/footer.vue';
import WorkerList from '@/components/WorkerList.vue';

import { onMounted, reactive, ref, watch } from 'vue';
import axios from 'axios';
import router from '@/router';


const items = ref([])
const avatar_users = ref([])

const worker_name = localStorage.getItem('name')
const worker_phone = localStorage.getItem('login')
const worker_role = localStorage.getItem('role')

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

const user_avatar = localStorage.getItem('avatar')

const roles = {
    1: "Босс",
    2: "Админ",
    3: "Куратор",
    4: "Бариста 1 уровень",
    5: "Бариста 2 уровень"
}

const role = Number(getKeyByValue(roles, localStorage.getItem('role')))


console.log(axios.get('https://c7a1808e4bdefba8.mokky.dev/users/'+localStorage.getItem('id')))

async function uploadFile() {
  const formData = new FormData();
  
  formData.append('file', file_input.files[0]);
  
  const res = await fetch('https://c7a1808e4bdefba8.mokky.dev/uploads', {
    method: 'POST',
    body: formData
  });
  
  if (res.ok) {
    const data = await res.json();
    console.log('Success:', data.url);
    await axios.patch('https://c7a1808e4bdefba8.mokky.dev/users/'+localStorage.getItem('id'), {
      avatar: data.url
    })
    localStorage.setItem('avatar', data.url)
    router.go()
  }
}

function generatePassword(){
	let length = 8,
	charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let res = '';
	for (var i = 0, n = charset.length; i < length; ++i) {
		res += charset.charAt(Math.floor(Math.random() * n));
	}
	return res;
}

onMounted(async () => {
    try {
        const {data} = await axios.get('https://c7a1808e4bdefba8.mokky.dev/users')
        items.value = data
    } catch (error) {
        console.log(error)
    }
})

const onSubmit = async () => {
    try {
        await axios.post('https://c7a1808e4bdefba8.mokky.dev/users', {
                            name: us_name.value,
                            phone: us_phone.value,
                            role: us_role.value,
                            avatar: "https://mokky.dev/uploaded/dfnhxiq6j/image/upload/v1713814664/file_w1aytn.png",
                            pas: generatePassword()
                        })  

                        router.go()
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <div class="max-w-100% overflowx-hidden">
        <div class="bg-gray-300 m-auto shadow-xl">
            <Header />
        </div>
        <h2 class="text-4xl font-semibold text-center m-10">Профиль</h2>

        <div class="text-center mr-12 ml-12 bg-white drop-shadow-2xl rounded-3xl pt-6 pb-6 mb-4">
            <img class="h-32 w-32 rounded-full w-1/4 m-auto" :src="user_avatar">
        
            <h2 class="text-xl font-regular text-center mt-2">{{ worker_name }}</h2>
            <p class="mt-1">Загрузить аватарку: <input class = "text-sm" id="file_input" type="file"></p>
            <button @click="uploadFile" class="bg-[#ffb337] rounded-3xl text-black text-center text-sm p-1 mt-2">Загрузить</button>
            <p class="mt-5">Телефон: {{ worker_phone }}</p>
            <p class="mt-1">Права доступа: {{ worker_role }}</p>
        </div>
        <div class="mt-20" v-if="role < 4">
            <form class="review-form max-w-100% text-center mb-10 mt-2" @submit.prevent="onSubmit">
                <h2 class="text-xl font-semibold mb-2" >Добавить сотрудника</h2>
                <p class="mb-2">
                    <label for="us_name">Имя:</label>
                    <input id="us_name" class="ml-2" v-model="name" placeholder="Имя пользователя"/>  
                </p>

                <p class="mb-2">
                    <label for="us_phone">Номер телефона:</label>
                    <input id="us_phone" class="ml-2" v-model="phone" placeholder="Номер пользователя"/>
                </p>

                <p class="mb-2">
                    <label for="us_role">Права доступа:</label>
                    <select id="us_role">
                        <option value="Босс">Босс</option>
                        <option value="Админ">Админ</option>
                        <option value="Куратор">Куратор</option>
                        <option value="Бариста 1 уровень">Бариста 1 уровень</option>
                        <option value="Бариста 2 уровень">Бариста 2 уровень</option>
                    </select>
                </p>

                <p>
                    <button type="submit" class="bg-[#ffb337] rounded-2xl text-black text-center font-bold p-2 mt-2">Добавить сотрудника</button>
                </p>
            </form>
            
            <WorkerList :items="items"/>
        </div>
        <div class="p-10">
                <Footer />
        </div>
    </div>
</template>
