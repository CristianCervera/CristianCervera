<template>
    
    <div class="h-full w-full bg-body flex flex-row justify-center items-center p-10 overflow-hidden">

        <div class="h-full w-2/12 mr-4">

            <div class="h-93 rounded-lg w-full bg-module flex flex-col justify-center items-center relative px-4">

                <div class="h-32 w-32 rounded-full shadow border-2 border-aux" :style="'background-image: url(/img/profile.jpg); background-repeat: no-repeat; background-size: cover; background-position: center;'"></div>
                <span class="text-3xl text-white font-semibold text-center leading-none mt-6">Vicente Carrascosa</span>

            </div>

            <div class="h-auto rounded-lg bg-module mt-4 overflow-hidden">
                <div v-for="(el,index) in optionsMenu" :key="index" class="w-full border-b border-body p-6 flex flex-row justify-start items-center" :class="{'bg-box': optionSelected == el}" @click="selectOption(el)">
                    <span class="text-white text-2xl font-semibold uppercase">{{el.title}}</span>
                    <i v-if="optionSelected == el" class="mdi mdi-arrow-right text-xl text-aux ml-auto"></i>
                </div>
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
