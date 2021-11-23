<template>
    
    <div class="h-full w-full bg-body flex flex-row justify-center items-center p-4 overflow-hidden">

        <div class="h-full w-2/12 mr-4 flex flex-col">

            <div class="h-56 rounded-lg w-full bg-module flex flex-col justify-center items-center relative px-4">

                <div class="h-24 w-24" :style="'background-image: url(/img/profile.png); background-repeat: no-repeat; background-size: cover; background-position: center;'"></div>
                <span class="text-xl text-white font-semibold text-center leading-none">Parroquia <br> Santiago Apóstol</span>

            </div>

            <div class="h-auto rounded-lg bg-module mt-2 overflow-hidden">
                <div v-for="(el,index) in optionsMenu" :key="index" class="w-full border-b border-body p-4 flex flex-row justify-start items-center cursor-pointer" :class="{'bg-box': optionSelected == el}" @click="selectOption(el)">
                    <span class="text-white font-semibold uppercase">{{el.title}}</span>
                    <i v-if="optionSelected == el" class="mdi mdi-arrow-right text-xl text-aux ml-auto"></i>
                </div>
            </div>

            <div class="h-auto w-full p-4 mt-auto flex flex-row justify-center items-center rounded-lg bg-module bg-opacity-25 cursor-pointer" @click="logout()">
                <span class="text-sm text-danger">Cerrar Sesión</span>
            </div>

        </div>

        <div class="h-full w-10/12 rounded-lg overflow-hidden">
            <module-data :option="optionSelected"/>
        </div>

    </div>

</template>

<script>
    import { state, actions } from '@/store';
    import moduleData from '@/components/moduleData.vue';

    export default {
        name: 'Home',
        components:{
            moduleData
        },
        data(){
            return{
                optionsMenu:[
                    {
                        title: 'Bautizos',
                        value: 'baptisms'
                    },
                    {
                        title: 'Comuniones',
                        value: 'communions'
                    },
                    {
                        title: 'Confirmaciones',
                        value: 'confirmations'
                    },
                    {
                        title: 'Bodas',
                        value: 'weddings'
                    },
                    {
                        title: 'Funerales',
                        value: 'funerals'
                    },
                    // {
                    //     title: 'Oratorio',
                    //     value: 'oratory'
                    // }
                ],
                hover: false,
                optionSelected: false
            }
        },
        methods:{
            selectOption(option){
                this.optionSelected = option;
            },
            logout(){

            }
        },
        computed: {
            user() {
                return state.user;
            },
        },
        mounted(){
            
        }
    }
</script>
