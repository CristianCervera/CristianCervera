<template>
    <div class="w-full h-full bg-gradient-to-b from-bgl to-bgd flex flex-col items-center">
        <header class="w-full h-24 pt-8 pr-8 flex justify-start pl-6 ">
            <img class=" w-10 h-12" src="../../../assets/Grupo142.png" alt="">
        </header>
        <div class="flex flex-col items-center ">
            <div class="flex flex-col items-center pt-24">
                <h1 class="text-white text-2xl font-regular text-center mb-4 ">Crear nuevo ticket</h1>
                <div class="flex items-center">
                    <div class="w-3 h-3 mx-3 rounded-full bg-button"></div>
                    <div class="w-3 h-3 mx-3 rounded-full bg-menu-50"></div>
                </div>

            </div>
           <TicketsCreateFirstStep/>
           <!-- <TicketsCreateLastStep/> -->
            </div>
        </div>
</template>
<script>
import TicketsCreateFirstStep from '../tickets-create/TicketsCreateFirstStep'
import TicketsCreateLastStep from '../tickets-create/TicketsCreateLastStep'
export default {
    name:'TicketsCreate',
    components:{
        TicketsCreateFirstStep,
        TicketsCreateLastStep
    }
}
</script>