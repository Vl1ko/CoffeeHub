<script setup>
import axios from 'axios';


defineProps({
    id: Number,
    name: String,
    remain: String
})


async function YourMethod() {
    console.log(this.result)
}


</script>

<template>
    <div class="m-auto w-5/6 h-max mb-10">
        <form v-on:submit.prevent="YourMethod" class = "bg-white shadow-md rounded px-4 pt-4 pb-4 mb-4" id="form">
            <label class="block text-gray-700 text-base mb-2" for="username">
                <b>{{ name }}</b> {{ remain }}
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :id=id type="text"
            placeholder="Новое значение"
            v-on:keydown.enter="async($event) => {
                await axios.patch('https://c926c1b080b9a593.mokky.dev/nalMilk/'+id, {
                    remain: $event.target.value
                })
                this.$router.go(0)
            }"
            />
        </form>
    </div>
</template>

