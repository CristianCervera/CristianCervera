<template>
    <div class="w-full h-full bg-gradient-to-b from-bgl to-bgd flex flex-row">
<!--------------------------------------------------------- Menú --------------------------------------------------------------------->
        <div class="w-1/12 h-full bg-menu p-8 flex flex-col justify-between items-center">
            <div class="flex flex-col items-center">
                <div class="w-16 h-16 bg-button rounded-full">
                    <img src="" alt="">
                </div> 
                <p class="text-center text-white mt-4">Nombre <br> Apellidos</p>

            </div>

            <div>
                <button class="w-12 h-12 border-solid border-2 border-button text-white rounded-full text-sm p-2 flex items-center justify-center"><span><i class="mdi mdi-power text-gray-600 text-xl"></i></span></button>
            </div>
        </div>
        <div class=" h-full w-full "> 

            <header class="w-full h-24 pt-8 pr-8 flex justify-end">
                <img class="" src="../../assets/Grupo142.png" alt="">
            </header>

            <div class="pr-56 pl-32 pt-6">
<!---------------- Crear ticket + buscador  ----------------------->
                <div class="flex justify-between items-center flex flex-row ">
                    <div>
                       <button class="w-40  h-10 bg-button text-white rounded-lg text-sm p-2 flex items-center justify-center"> Crear Ticket</button>
                    </div>
                    <div class="flex flex-row">
                        
                         <button class="w-12 h-12 border-solid bg-menu-50 text-white rounded-full text-sm p-2 flex items-center justify-center mr-4"><i class="mdi mdi-filter-variant text-xl text-gray-600"></i></button>
                        <input type="text" class="bg-menu-50 rounded-lg h-12 w-64 text-sm        placeholder-gray-600 pl-4 " placeholder="Buscar..." > 
                    </div>
                </div>
                <div class="w-full h-line bg-input mt-8"></div>
<!------------------------------- Listado de tickets ------------------------------>
                <div>
                    <div class="flex items-center">
                        <p>Recibido</p>
                        <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center ml-4"> <span>3</span></div>
                    </div>

                </div>


            </div>


            
        </div>
    </div>
</template>