<template>
    <div class="w-full h-full bg-gradient-to-b from-bgl to-bgd flex flex-row">
<!--------------------------------------------------------- Menú --------------------------------------------------------------------->
        <div class="w-1/12 h-full bg-menu p-6 pt-10 flex flex-col justify-between items-center">
            <div class="flex flex-col items-center justify-between flex-1 min-h-0 pb-6">
                 <img class="w-10 h-12" src="../../../assets/Grupo142.png" alt="">
                 <div class="flex flex-col items-center pt-8">    
                    <div class="w-10 h-10 bg-purple rounded-full flex items-center justify-center">
                        <p class="text-white ">MP</p>
                        <img src="" alt="">
                    </div> 
                    <div class="h-line bg-input w-full mt-6"></div>
                </div>
            </div>

            <div class="h-1/12">
                <button class="w-10 h-10 border-solid border-2 border-button text-white rounded-full text-sm p-2 flex items-center justify-center focus:outline-none"><span><i class="mdi mdi-power text-gray-600 text-xl"></i></span></button>
            </div>
        </div>

       

        <!-- <TicketCard/> -->
        <TicketList/>

       
    </div>


</template>
<script>
import TicketList from '../tickets/TicketList'
import TicketCard from '../tickets/TicketCard'

export default {
    name:'Tickets',
    components:{
        TicketList,
        TicketCard
    }
}
</script>