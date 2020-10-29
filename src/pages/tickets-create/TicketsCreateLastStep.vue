<template>
    <form action="" class="w-full flex flex-col pt-6 ">
                   <div class="flex flex-col w-full">
                       <input type="text" class="form-input border-none " placeholder="Nombre">
                       <input type="text" class="form-input border-none" placeholder="Apellidos">
                      
                   </div>
                   <div class="w-full p-2">
                       <div class=" flex justify-around items-center ">
                            <button  class="w-40 h-10 border-solid border-2 border-button text-white rounded-lg text-sm p-2 flex items-center justify-center mr-24">Cancelar</button>
                            <button class="w-40  h-10 bg-button text-white rounded-lg text-sm p-2 flex items-center justify-center">Siguiente</button>
                       </div>
                       
                       
                   </div>
                </form>
</template>
<script>

    export default {
        name: "TicketsCreateLastStep"
        
    }
    
</script>