<script setup>
import { ref, useAttrs } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import axios from 'axios';

const login = ref([])

const onSubmit = async () => {
    try {
        const {data} = await axios.get('https://c7a1808e4bdefba8.mokky.dev/users?phone='+us_phone.value)
        if (data[0].phone == us_phone.value) {
            if (data[0].pas == us_password.value) {
                localStorage.setItem('id', data[0].id)
                localStorage.setItem('token', data[0].pas)
                localStorage.setItem('login', data[0].phone)
                localStorage.setItem('role', data[0].role)
                localStorage.setItem('name', data[0].name)
                localStorage.setItem('avatar', data[0].avatar)
                window.location.replace('/')
                
        }}

    } catch (error) {
        console.log(error)
    }
}

</script>

<template>
    <div class="mt-10">
        <div class="absolute left-0 right-0 m-auto max-w-xs bg-white shadow-md rounded- px-2 pt-6 pb-8 mb-4" >
            <h1 class="text-center font-bold text-xl mb-4">Войти в систему</h1>
            <form class="flex flex-col gap-4 items-center text-center" @submit.prevent="onSubmit">
                <div class="p-inputgroup flex-1">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-user"></i>
                    </span>
                    <InputText id="us_phone" type="phone" v-model="phone" placeholder="Телефон" />
                </div>
                <div class="p-inputgroup flex-1">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-user"></i>
                    </span>
                    <InputText id="us_password" type="password" v-model="password" placeholder="Пароль" />
                </div>
                <div class="flex flex-column gap-3">
                    <Button type="submit" label="Войти" />
                    <span>Забыли пароль или не зарегестрированы в системе?<a href="https://t.me/vinkler2016"><br><i>Обратитесь к администратору</i></a></span>
                </div>
            </form>
        </div>
    </div>
</template>
