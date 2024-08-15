<script setup>
import { ref, useAttrs } from 'vue';
import { useAuthStore } from '@/stores/info';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const authstore = useAuthStore();

const name = ref('');
const email = ref('');
const password = ref('');

const signup = async() => {
    await authstore.signup(email.value, password.value)
}
</script>

<template>
    <div class="flex justify-center m-10 p-10 ">
        <div class="w-full h-full max-w-xs"> 
            <form class="flex flex-col gap-4 items-center text-center">
                <div class="p-inputgroup flex-1">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-user"></i>
                    </span>
                    <InputText type="text" class="" v-model="name" placeholder="Имя пользователя" />
                </div>
                <div class="p-inputgroup flex-1">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-user"></i>
                    </span>
                    <InputText type="email" v-model="email" placeholder="Электронная почта" />
                </div>
                <div class="p-inputgroup flex-1">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-user"></i>
                    </span>
                    <InputText type="password" v-model="password" placeholder="Пароль" />
                </div>
                <div class="flex flex-column gap-3">
                    <Button label="Зарегестрироваться" @click="signup" />
                    <span>Уже есть аккаунт? <router-link to="/login">Вход</router-link></span>
                </div>
            </form>
        </div>
    </div>
</template>
