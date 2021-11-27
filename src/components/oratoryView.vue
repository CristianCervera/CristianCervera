<template>
  
    <div class="h-full w-full px-4 flex flex-col">

        <div class="h-16 w-full flex flex-row justify-start items-center">
            <span class="text-xl text-white font-semibold uppercase">Oratorio</span>

            <!-- <div class="h-12 px-4 flex flex-col justify-center items-center ml-auto bg-aux rounded-lg cursor-pointer" @click="newModal = !newModal">
                <span class="text-body font-semibold text-xl">Añadir nuevo</span>
            </div> -->

        </div>

        <div class="h-12 w-full bg-body bg-opacity-25 p-1">

            <swiper class="swiper h-full w-full" :options="swiperComparative">

                <swiper-slide v-for="(el,index) in optionsSlide" :key="index" class="h-full bg-aux bg-opacity-25 rounded-lg py-2 px-2 overflow-hidden cursor-pointer" @click="select(el)">
                    <div class="h-full w-full flex flex-row justify-center items-center " @click="select(el)">
                        <span class="text-aux text-lg font-semibold">{{el.name}}</span>
                    </div>
                </swiper-slide>

            </swiper>

        </div>

        <div class="flex flex-1 min-h-0">
            {{optionSelected}}
        </div>



    </div>

</template>

<script>
export default {
    data(){
        return{
            swiperComparative:{
                slidesPerView: 6.5,
                spaceBetween: 10
            },
            optionsSlide:[
                {
                    name:'1ºESO',
                    value: 'primeroeso'
                },
                {
                    name:'2ºESO',
                    value: 'segundoeso'
                },
                {
                    name:'3ºESO',
                    value: 'terceroeso'
                },
                {
                    name:'4ºESO',
                    value: 'cuartoeso'
                },
                {
                    name:'1ºBACHILLER',
                    value: 'primerobachiller'
                },
                {
                    name:'2ºBACHILLER',
                    value: 'segundobachiller'
                },
                {
                    name:'UNIVERSITARIOS',
                    value: 'universitarios'
                }
            ],
            optionSelected:false
        }
    },
    methods:{
        select(option){
            this.optionSelected = option;
        }
    }
}
</script>

<style>

</style>