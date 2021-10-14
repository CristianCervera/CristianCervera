<template>
  
    <div class="h-full w-full flex flex-col">

        <div class="h-24 w-full border-b border-aux flex flex-row justify-start items-center">

            <div class="h-full flex flex-1 min-w-0 flex-row justify-start items-center truncate">
                <span class="text-3xl text-white">Nombre</span>
            </div>

            <div class="h-20 w-12 flex flex-col justify-center items-center ml-auto rounded-lg cursor-pointer hover:bg-aux hover:bg-opacity-25" @click="edit()">
                <i class="mdi mdi-pencil text-3xl text-blue-500"></i>
            </div>

            <div class="h-20 w-12 flex flex-col justify-center items-center ml-2 rounded-lg cursor-pointer hover:bg-aux hover:bg-opacity-25" @click="deleteOne()">
                <i class="mdi mdi-delete text-3xl text-danger"></i>
            </div>

            <div class="h-20 w-12 flex flex-col justify-center items-center ml-2 rounded-lg cursor-pointer hover:bg-aux hover:bg-opacity-25" @click="close()">
                <i class="mdi mdi-close text-3xl text-aux"></i>
            </div>

        </div> 

    </div>

</template>

<script>
export default {
    props:['data'],
    data(){
        return{

        }
    },
    methods:{
        edit(){

        },
        deleteOne(){

        },
        close(){
            this.$emit( 'closeModal', false )
        }
    }
}
</script>

<style>

</style>