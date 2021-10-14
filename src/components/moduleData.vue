<template>
  
    <div class="h-full w-full bg-box flex-none overflow-hidden">

        <div v-if="!option" class="h-full w-full flex flex-col justify-center items-center">
            <span class="text-white text-xl">Selecciona una opción</span>
        </div>

       <div v-else class="h-full w-full flex flex-col px-6 relative flex-none overflow-hidden">

            <loader :loading="loading" />

             <div class="h-24 w-full flex flex-row justify-start items-center border-b border-aux">
                <span class="text-3xl text-white font-semibold uppercase">{{option.title}}</span>

                <div class="h-12 px-4 flex flex-col justify-center items-center ml-auto bg-aux rounded-lg cursor-pointer" @click="newModal = !newModal">
                    <span class="text-body font-semibold text-xl">Añadir nuevo</span>
                </div>

            </div>

            <div class="h-16 w-full bg-body bg-opacity-50 flex flex-row justify-start items-center">

                <div class="h-full w-16 flex flex-col justify-center items-center">
                    <i class="mdi mdi-magnify text-white text-2xl"></i>
                </div>

                <div class="h-full flex flex-1 min-w-0">
                    <input type="text" v-model="searchInput" placeholder="Buscar..." class="h-full w-full bg-transparent text-xl text-white px-6">
                </div>

            </div>

            <div class="flex-1 min-h-0 overflow-hidden flex flex-row py-6 w-full">

                <div class="h-full overflow-auto flex flex-wrap" :class="{'w-full': !oneSelected, 'w-93': oneSelected}">
                    <sacrament v-for="(el, index) in responseData" :key="index" :data="el" @selectOne="selectOne" :selected="oneSelected"/>
                </div>

                <div v-if="oneSelected" class="h-full flex flex-1 min-w-0 flex flex-col px-6">

                    <div class="h-32 w-full border-b border-aux flex flex-row justify-start items-center">

                        <div class="h-full flex flex-1 min-w-0 flex-row justify-start items-center truncate">
                            <span class="text-3xl text-white">Nombre</span>
                        </div>

                        <div class="h-20 w-20 flex flex-col justify-center items-center ml-auto rounded-lg cursor-pointer hover:bg-aux hover:bg-opacity-25" @click="oneSelected = false">
                            <i class="mdi mdi-pencil text-3xl text-blue-500"></i>
                        </div>

                        <div class="h-20 w-20 flex flex-col justify-center items-center ml-2 rounded-lg cursor-pointer hover:bg-aux hover:bg-opacity-25" @click="oneSelected = false">
                            <i class="mdi mdi-delete text-3xl text-danger"></i>
                        </div>

                        <div class="h-20 w-20 flex flex-col justify-center items-center ml-2 rounded-lg cursor-pointer hover:bg-aux hover:bg-opacity-25" @click="oneSelected = false">
                            <i class="mdi mdi-close text-3xl text-aux"></i>
                        </div>

                    </div>                    

                </div>          


            </div>

            <div class="absolute bottom-0 left-0 h-full w-full" :class="{'mb-0': newModal, '-mb-400': !newModal}" style="transition: all .3s ;">
                <new-data :option="option" @closeModal="closeModal"/>
            </div>

        </div>

    </div>

</template>

<script>
import loader from '@/components/loader.vue';
import newData from '@/components/new.vue';
import sacrament from '@/components/sacrament.vue';

export default {
    props:['option'],
    components:{
        loader,
        newData,
        sacrament
    },
    data(){
        return{
            responseData: false,
            loading: false,
            newModal: false,
            oneSelected: false,
            searchInput: ''
        }
    },
    methods:{
        load(){

            this.loading = true;
            this.axios.get('/'+this.option.value).then( response => {
                this.responseData = response.data;
                this.loading = false;
            })
        },
        closeModal(){
            this.newModal = !this.newModal
        },
        selectOne(one){
            this.oneSelected = true
        }
    },
    computed:{

    },
    watch:{
        option(){
            this.load();
        }
    },
    mounted(){
        this.load();
    }
}
</script>

<style>

textarea:focus, input:focus{
    outline: none;
}

</style>