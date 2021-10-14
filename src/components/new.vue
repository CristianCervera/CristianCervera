<template>

    <div class="h-full w-full bg-module flex flex-col px-6">

        <div class="h-24 w-full flex flex-row justify-start items-center border-b border-aux">
            <span class="text-3xl text-white font-semibold uppercase">Añadir {{option.title}}</span>

            <div class="h-20 w-20 flex flex-col justify-center items-center ml-auto rounded-lg cursor-pointer hover:bg-aux hover:bg-opacity-25" @click="closeModal()">
                <i class="mdi mdi-close text-3xl text-aux"></i>
            </div>

        </div>

    </div>

</template>

<script>
export default {
    props:['option'],
    methods:{
        closeModal(){
            this.$emit('closeModal')
        }
    }
}
</script>

<style>

</style>