<template>
  
    <div class="h-56 flex flex-col justify-center items-center py-12 px-6 cursor-pointer" :class="{'w-full': selected, 'w-1/6': !selected, 'bg-aux bg-opacity-25': selected == data}" @click="selectOne()">
        
        <div class="h-full w-full rounded-lg bg-module flex flex-col justify-start items-center shadow-lg">

            <div class="h-20 w-20 rounded-full shadow-lg bg-gradient-to-r from-auxdark to-aux -mt-10 flex flex-col justify-center items-center">
                <span class="text-2xl font-semibold">{{getLetters(data.name, data.firstName)}}</span>
            </div>

            <div class="flex flex-1 min-h-0 flex flex-col justify-center items-center px-2 -mt-1">
                <span class="text-white font-semibold text-lg text-center leading-none capitalize">{{data.name}} {{data.firstName}} {{data.lastName}}</span>
                <span class="text-white font-semibold mt-1 text-sm">{{data.baptismDate | moment('DD MMM YYYY')}}</span>
            </div>

        </div>
    
    </div>

</template>

<script>
export default {
    props:['data', 'selected'],
    data(){
        return{
            
        }
    },
    methods:{
        getLetters(name, firstName){
            return name.charAt(0) + firstName.charAt(0)
        },
        selectOne(){
            this.$emit('selectOne', this.data)   
        }
    },
    computed:{

    }
}
</script>

<style>

</style>