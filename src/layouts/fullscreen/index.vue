<template>
    
    <div class="w-screen h-screen flex flex-col overflow-hidden">

        <div v-if="path != 'Login'" class="h-12 flex-none w-full bg-module flex flex-row justify-start items-center pl-12 pr-6">

            <span class="text-lg text-white font-semibold">Admin Santiago Apóstol</span>

            <div class="h-12 w-12 rounded-full ml-auto hover:bg-danger hover:bg-opacity-25 flex flex-col justify-center items-center cursor-pointer" @click="logout()">
                <i class="mdi mdi-power text-danger text-3xl"></i>
            </div>

        </div>

        <slot class="flex flex-1 min-h-0"></slot>
    
    </div>

</template>

<script>
import { actions, state } from '@/store';

    export default {
        name: "FullscreenLayout",
        data(){
            return{

            }
        },
        methods:{
            logout(){
                actions.setToken(null);
                this.$router.push( {name:'Login'} )
            }
        },
        computed:{
            user(){
                return state.user;
            },
            path(){
                return this.$route.name
            }
        }
    }
</script>