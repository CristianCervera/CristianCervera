<template>
     <form action="" class="pt-6">
                <div class="flex items-center">
                <button class="form-input border-none text-gray-600 w-64 flex pl-4">Selecciona tipo de ticket</button>
                <button  class="form-input border-none text-gray-600 w-64 flex pl-4">Proyecto</button>
                </div>
                <div class="flex flex-col">
                    <textarea name="" id="" cols="30" rows="5" class="form-input border-none h-12 placeholder-gray-600 pl-4 pt-3" placeholder="Asunto"></textarea>
                    <textarea name="" id="" cols="30" rows="5" class="form-input border-none h-48 placeholder-gray-600 pl-4 pt-3" placeholder="Indique los pasos anteriores antes de producirse el problema para que podamos reproducir el error."></textarea>
                    
                    
                </div>
                <div class="flex justify-between px-2 pt-2">
                    <button  class="w-40 h-10 border-solid border-2 border-button text-white rounded-lg text-sm p-2 flex items-center justify-center">Cancelar</button>
                    <button class="w-40  h-10 bg-button text-white rounded-lg text-sm p-2 flex items-center justify-center">Siguiente</button>
                </div>
            
            </form>
</template>
<script>

    export default {
        name: "TicketsCreateFirstStep"
        
    }
    
</script>