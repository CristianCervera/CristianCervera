<template>
     <div class=" h-full w-full flex justify-center flex-col items-center "> 
           
            <div class="w-9/12 h-7/12 bg-input-50 rounded-lg shadow-lg relative  ">
                <div class=" w-full h-2 -mt-1 flex justify-center">
                    <div class="h-full w-1/3 bg-green rounded-full"></div>
                </div>
                <div class="w-8 h-8 rounded-full bg-input absolute top-0 right-0 -mt-2 -mr-2 flex justify-center items-center shadow-lg">
                    <i class="mdi mdi-close text-white"></i>
                </div>
                <div class="w-full h-full flex flex-col p-4">

                    <div class="h-8 w-full flex justify-center">
                        <h1 class="text-white text-lg">Ticket 2081</h1>
                    </div>
                    <div class="w-full h-full flex">
                        <div class="w-1/3 h-full p-2 pl-6 ">
                            <div class="w-full h-full">
                                <div class="flex items-center justify-between ">
                                    <div class="flex relative items-center ">
                                        <div class="w-6 h-6 bg-green absolute ml-3 rounded-full opacity-25 flex justify-center items-center"> <p class="text-xs text-white">MP</p></div>
                                        <div class="w-6 h-6 bg-purple rounded-full absolute flex items-center justify-center"> <p class="text-xs text-white">MP</p></div>
                                    
                                    </div>
                                    <div class="">
                                        <button class="text-button text-sm">Cambiar estado</button>
                                    </div>
                                </div>
                                <div class="w-full pt-2 flex justify-between">
                                    <div>
                                         <p class="text-xs text-gray-600">Fecha creación</p>
                                         <p class="text-xs text-gray-500">27/10/2020</p>
                                    </div>
                                    <div class="flex flex-col items-end">
                                         <p class="text-xs text-gray-600">Vencimiento</p>
                                         <p class="text-xs text-gray-500">28/10/2020</p>
                                    </div>
                                   

                                </div>
                                <div>
                                    <div class="pt-6 pb-4 text-gray-500"> <p>Nombre del Proyecto</p></div>
                                    <div class="text-white "> <p>Asunto del ticket</p></div>
                                    <div class="text-sm text-gray-600 pt-2"> <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dis lobortis, dapibus molestie nec conubia montes turpis metus Pretium sapien interdum. Lorem ipsum dolor sit amet consectetur adipiscing elit dis lobortis,Hola HOla Lorem ipsum dolor sit amet conse molestie Pretium sapien interdum Pretium sapien interdum  iaculis pharetra diam  </p></div>
                                </div>
                                <div class="pt-4 flex">
                                    <div class="w-16 h-16 bg-input mr-3 rounded-lg"></div>
                                    <div class="w-16 h-16 bg-input mr-3 rounded-lg"></div>
                                    <div class="w-16 h-16 bg-input mr-3 rounded-lg"></div>
                                    <div class="w-16 h-16 bg-input mr-3 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center pt-3 pb-6 pl-8">
                            <div class="w-line h-full bg-gray-700">

                            </div>
                        </div>
                        <!------------- chat ----------------->
                        <div class="flex flex-1 min-w-0 py-3 flex-col pl-6 pr-4 pb-6 ">
                            <div class="flex">
                                <div class="w-10 h-10 bg-orange rounded-full flex items-center justify-center">
                                    <p class="text-white text-xl">DB</p>
                                    <img src="" alt="">
                                </div>
                                <div class="pl-4">
                                    <p class="text-sm text-white pb-1">Nombre Apellidos </p>
                                    <p class="text-xs text-gray-600">Sofware Developer</p>
                                </div>
                            </div>
                            <div class="w-full h-8/12">

                            </div>
                            <div class="flex flex-1 min-h-0">
                                <div class="flex h-full w-11/12 pr-6">
                                    <textarea name="" id="" cols="30" rows="10" class="w-full bg-bgl rounded-lg placeholder-gray-600 "></textarea>
                                   
                                </div>
                                <div class="h-full w-12 flex items-center">
                                    <button class="w-full h-12 bg-button rounded-full flex items-center justify-center"> <i class="mdi mdi-send text-white text-xl"></i></button>
                                </div>
         
                            </div>
                           
                        </div>
                    </div>
                </div>
                

            </div>
        </div>

</template>
<script>
export default {
    name:"TicketCard"
}
</script>