<template>

    <div class="h-full w-full bg-body flex flex-col justify-center items-center">

        <div class="w-1/3 py-6 rounded-lg flex flex-col justify-center items-center shadow-lg bg-module">

            <span class="text-white font-semibold text-5xl">Admin Santiago Apóstol</span>
        
            <input class="mt-12 h-16 w-5/6 px-4 text-xl rounded-lg bg-body text-white" type="text" v-model="form.psemail">
            <input class="mt-4 h-16 w-5/6 px-4 text-xl rounded-lg bg-body text-white" type="password" v-model="form.pspassword">

            <div class="h-16 w-1/2 mt-12 bg-aux rounded-lg shadow-lg flex flex-col justify-center items-center cursor-pointer" @click="login()">
                <span class="text-3xl text-body font-semibold">Entrar</span>
            </div>
        
        </div>

        <div v-if="error" class="h-20 w-1/3 -mb-20 flex flex-row justify-center items-center bg-danger bg-opacity-25 rounded-b-lg">
            <span class="text-danger text-2xl font-semibold">{{error}}</span>
        </div>

    </div>

</template>

<script>
    import { actions } from '@/store';

    export default {
        name: 'Login',  
        components: {
        },
        data() {
            return {
                form: {
                    psemail: '',
                    pspassword: ''
                },
                error: false
            };
        },
        methods: {
            login(){
                actions.setToken('asd');
                this.$router.push( { name:'Home' } )
            }
        }
    }
</script>

