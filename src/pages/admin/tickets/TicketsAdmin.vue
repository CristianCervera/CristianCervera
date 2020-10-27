<template>
    <div class="w-full h-full bg-gradient-to-b from-bgl to-bgd flex flex-row">
<!--------------------------------------------------------- Menú --------------------------------------------------------------------->
        <div class="h-full bg-menu w-48 pt-10 pb-6 flex flex-col justify-between items-center">
            <div class="flex flex-col items-center justify-between flex-1 min-h-0 pb-6 w-full">
                 <img class="w-10 h-12" src="../../../assets/Grupo142.png" alt="">
                 <div class=" text-gray-600 text-sm h-full w-full flex items-center flex-col pt-10">
                    <div class="py-4 flex justify-center w-full mt-4">
                        <p>Tickets</p>
                    </div>
                    <div class="py-4 flex justify-center w-full mt-4">
                        <p>Empresas</p>
                    </div>
                    <div class="py-4 flex justify-center  w-full mt-4">
                        <p>Proyectos</p>
                    </div>
                    <div class="py-4 flex justify-center  w-full mt-4">
                        <p>Usuarios</p>
                    </div>
                    
                 </div>
                 <div class="flex flex-col items-center pt-8 h-24">    
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
          <div class=" h-full w-full flex justify-between flex-col "> 

            <div class="px-16 pt-16 flex flex-col flex-1 min-h-0">
<!---------------- Crear ticket + buscador  ----------------------->
                <div class="flex justify-between items-center flex flex-row ">
                    <div>
                       <button class="text-button rounded-lg text-sm p-2 flex items-center justify-center focus:outline-none"> Seleccionar tickets</button>
                    </div>
                    <div class="flex flex-row">
                         <button class="w-12 h-12 border-solid bg-menu-50 text-white rounded-full text-sm p-2 flex items-center justify-center mr-4 focus:outline-none"><i class="mdi mdi-filter-variant text-xl text-gray-600"></i></button>
                         <div class="h-12 w-64 flex items-center rounded-lg overflow-hidden ">
                             <div class="bg-menu-50 h-full flex items-center px-4 ">
                             <i class="mdi mdi-magnify text-gray-500 text-lg"></i>
                             </div>
                             <input type="text" class="bg-menu-50  h-12 w-64 text-sm placeholder-gray-600 pl-4 text-white focus:outline-none"  >
                         </div>
                        <!-- <input type="text" class="bg-menu-50 rounded-lg h-12 w-64 text-sm placeholder-gray-600 pl-4 text-white " placeholder="Buscar..." >  -->
                    </div>
                </div>
                <div class="w-full h-line bg-input mt-8"></div>
<!------------------------------- Resumen de tickets ------------------------------>
                <div class="flex justify-around px-48 pt-8">
                    <div class="flex items-center">
                        <p class="text-gray-600 text-sm">Recibido</p>
                        <div class="w-6 h-6 rounded-full bg-white flex items-center justify-center ml-4 bg-orange-60"> <span class="text-white text-sm ">3</span></div>
                    </div>
                    <div class="flex items-center">
                        <p class="text-gray-600 text-sm">En proceso</p>
                        <div class="w-6 h-6 rounded-full bg-white flex items-center justify-center ml-4 bg-turquoise-50"> <span class="text-white text-sm ">3</span></div>
                    </div>
                    <div class="flex items-center">
                        <p class="text-gray-600 text-sm">En revisión</p>
                        <div class="w-6 h-6 rounded-full bg-white flex items-center justify-center ml-4 bg-purple-60"> <span class="text-white text-sm ">3</span></div>
                    </div>
                    <div class="flex items-center">
                        <p class="text-gray-600 text-sm">Finalizado</p>
                        <div class="w-6 h-6 rounded-full bg-white flex items-center justify-center ml-4 bg-green-50"> <span class="text-white text-sm ">3</span></div>
                    </div>
                </div>
                <div class="w-full h-full pt-6">
                    <table class="w-full">
                        <thead class="text-gray-500">
                            <th class="">Prioridad</th>
                            <th class="">Estado</th>
                            <th class="">Asunto</th>
                            <th class="">Categoría</th>
                            <th class="">Programador  Asignado</th>
                            <th class="">Fecha creación</th>
                            <th class="">Última actualización</th>
                            <th class="">Empresa</th>
                            <th class="">Proyecto</th>
                            <th class="">Vencimiento</th>
                            <th class="w-20"></th>
                            <th class="w-20"></th>
                        </thead>

                        <tbody>
                            <tr 
                                v-for="(row, index) in 8"
                                :key="index"
                                class="h-10"
                            >
                                <td class=""> Urgente</td>
                                <td class="w-24"> <div class="w-full h-full bg-orange-30 rounded-full py-1"><p>Por Asignar</p></div></td>
                                <td class="">Se ha bloqueado algo</td>
                                <td class="">Incidencia</td>
                                <td class="flex justify-center"> <div class="mt-1 w-6 h-6 rounded-full bg-purple flex items-center justify-center"><p>MP</p></div></td>
                                <td class="">02/11/2020</td>
                                <td class="">03/11/2020</td>
                                <td class="">Sr Burns</td>
                                <td class="">Panel Facebook</td>
                                <td class="">03/11/2020</td>
                                <td class="w-20"></td>
                                <td class="w-20">
                                    
                                        <div class="h-1 w-1 mr-1 rounded-full bg-white"></div>
                                        <div class="h-1 w-1 mr-1 rounded-full bg-white"></div>
                                        <div class="h-1 w-1 mr-1 rounded-full bg-white"></div>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <footer class="h-24  w-full px-16">
                <div class="w-full h-full flex justify-end ">
                    <button class="h-16 w-16 bg-input rounded-full flex justify-center items-center shadow-lg focus:outline-none"> 
                        <i class="mdi mdi-package-down text-gray-500 text-3xl"></i>
                    </button>


                </div>
            </footer>
        </div>
    </div>
    
</template>

<style scoped>

    th {
        @apply px-3 py-3 font-thin text-center text-xs;
    }

    td {
        @apply px-3 py-3 font-thin text-white text-xs text-center;
    }

    td:first-child {
        @apply rounded-l-lg;
    }

    td:last-child {
        @apply rounded-r-lg;
    }

    tr:nth-child(odd) {
        @apply bg-input-30;
    }
</style>