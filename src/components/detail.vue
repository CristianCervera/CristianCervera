<template>
  
    <div class="h-full w-full flex flex-col">

        <div class="h-12 w-full border-b border-aux flex flex-row justify-start items-center py-1">

            <div class="h-full flex flex-1 min-w-0 flex-row justify-start items-center truncate">
                <span class="text-xl text-white">Nombre</span>
            </div>

            <div class="h-full w-12 flex flex-col justify-center items-center ml-auto rounded-lg cursor-pointer hover:bg-blue-500 hover:bg-opacity-25" @click="edit()">
                <i class="mdi mdi-pencil text-xl text-blue-500"></i>
            </div>

            <div class="h-full w-12 flex flex-col justify-center items-center ml-2 rounded-lg cursor-pointer hover:bg-danger hover:bg-opacity-25" @click="deleteOne()">
                <i class="mdi mdi-delete text-xl text-danger"></i>
            </div>

            <div class="h-full w-12 flex flex-col justify-center items-center ml-2 rounded-lg cursor-pointer hover:bg-aux hover:bg-opacity-25" @click="close()">
                <i class="mdi mdi-close text-xl text-aux"></i>
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