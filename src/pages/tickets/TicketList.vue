<template>
     <div class=" h-full w-full flex justify-between flex-col "> 

            <div class="px-16 pt-16 flex flex-col flex-1 min-h-0">
<!---------------- Crear ticket + buscador  ----------------------->
                <div class="flex justify-between items-center flex flex-row ">
                    <div>
                       <button class="w-40  h-10 bg-button text-white rounded-lg text-sm p-2 flex items-center justify-center"> Crear Ticket</button>
                    </div>
                    <div class="flex flex-row">
                        
                         <button class="w-12 h-12 border-solid bg-menu-50 text-white rounded-full text-sm p-2 flex items-center justify-center mr-4"><i class="mdi mdi-filter-variant text-xl text-gray-600"></i></button>
                        <input type="text" class="bg-menu-50 rounded-lg h-12 w-64 text-sm placeholder-gray-600 pl-4 " placeholder="Buscar..." > 
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
<!-------------------------------- Listado de tickets ------------------------------>
                <div class="flex flex-1 min-h-0 flex-col">
                    <div class="w-full ">
                        <!-- leyenda  -->
                        <div class="flex justify-between text-gray-600 mt-12 text-xs text-center">
                            <div class="w-1/12"><p>Prioridad</p></div>
                            <div class="w-1/12"><p>Estado</p></div>
                            <div class="w-1/12"><p>Asunto</p></div>
                            <div class="w-1/12"><p>Categoría</p></div>
                            <div class="w-1/12"><p class="text-center">Programador <br>Asignado</p></div>
                            <div class="w-1/12"><p>Fecha Creacion</p></div>
                            <div class="w-1/12"><p class="text-center">Última actulización</p></div>
                            <div class="w-1/12"><p>Proyecto</p></div>
                            <div class="w-1/12"><p>Vencimiento</p></div>
                            <div class="w-1/12"></div>
                            
                        </div>
                        <div class="text-center mt-4 w-full">
                            <!-- tickets  -->
                            <div class="flex justify-between h-16 text-xs bg-input-50 items-center rounded-lg text-white mb-2">
                                <div class="w-1/12 text-danger "><p>Urgente</p></div>
                                <div class="w-1/12 p-2">
                                    <div class="h-6 w-full bg-orange-60 flex items-center justify-center rounded-full">
                                        <p>Recibido</p>
                                    </div> 
                                </div>
                                <div class="w-1/12  truncate"><p>Se ha bloqueado algo djvcpi scbjweb sdjcb</p></div>
                                <div class="w-1/12 "><p>Incidencia</p></div>
                                <div class="w-1/12 flex items-center justify-center ">
                               
                                    <div class="h-6 w-6 bg-purple-60 rounded-full flex items-center justify-center">
                                        <p>MP</p>
                                    </div>
                                </div>
                                <div class="w-1/12 "><p>30/10/2020</p></div>
                                <div class="w-1/12 "><p>31/10/2020</p></div>
                                <div class="w-1/12 "><p>Panel 1</p></div>
                                <div class="w-1/12 "><p>1/11/2020</p></div>
                                <div class="w-1/12 flex justify-end ">
                                    <div class="flex pr-6 opacity-0 hover:opacity-100">
                                        <div class="h-1 w-1 mr-1 rounded-full bg-white"></div>
                                        <div class="h-1 w-1 mr-1 rounded-full bg-white"></div>
                                        <div class="h-1 w-1 mr-1 rounded-full bg-white"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-between h-16 text-xs items-center rounded-lg text-white mb-2">
                                <div class="w-1/12 text-danger "><p>Urgente</p></div>
                                <div class="w-1/12 p-2">
                                    <div class="h-6 w-full bg-orange-60 flex items-center justify-center rounded-full">
                                        <p>Recibido</p>
                                    </div> 
                                </div>
                                <div class="w-1/12  truncate"><p>Se ha bloqueado algo djvcpi scbjweb sdjcb</p></div>
                                <div class="w-1/12 "><p>Incidencia</p></div>
                                <div class="w-1/12 flex items-center justify-center ">
                               
                                    <div class="h-6 w-6 bg-purple-60 rounded-full flex items-center justify-center">
                                        <p>MP</p>
                                    </div>
                                </div>
                                <div class="w-1/12 "><p>30/10/2020</p></div>
                                <div class="w-1/12 "><p>31/10/2020</p></div>
                                <div class="w-1/12 "><p>Panel 1</p></div>
                                <div class="w-1/12 "><p>1/11/2020</p></div>
                                <div class="w-1/12 flex justify-end ">
                                    <div class="flex pr-6 invisible hover:visible">
                                        <div class="h-1 w-1 mr-1 rounded-full bg-white"></div>
                                        <div class="h-1 w-1 mr-1 rounded-full bg-white"></div>
                                        <div class="h-1 w-1 mr-1 rounded-full bg-white"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-between h-16 text-xs bg-input-50 items-center rounded-lg text-white mb-2">
                                <div class="w-1/12 text-danger "><p>Urgente</p></div>
                                <div class="w-1/12 p-2">
                                    <div class="h-6 w-full bg-orange-60 flex items-center justify-center rounded-full">
                                        <p>Recibido</p>
                                    </div> 
                                </div>
                                <div class="w-1/12  truncate"><p>Se ha bloqueado algo djvcpi scbjweb sdjcb</p></div>
                                <div class="w-1/12 "><p>Incidencia</p></div>
                                <div class="w-1/12 flex items-center justify-center ">
                                    <div class="h-6 w-6 bg-purple-60 rounded-full flex items-center justify-center">
                                        <p>MP</p>
                                    </div>
                                </div>
                                <div class="w-1/12 "><p>30/10/2020</p></div>
                                <div class="w-1/12 "><p>31/10/2020</p></div>
                                <div class="w-1/12 "><p>Panel 1</p></div>
                                <div class="w-1/12 "><p>1/11/2020</p></div>
                                <div class="w-1/12 flex justify-end ">
                                    <div class="flex pr-6 opacity-0 hover:opacity-100">
                                        <div class="h-1 w-1 mr-1 rounded-full bg-white"></div>
                                        <div class="h-1 w-1 mr-1 rounded-full bg-white"></div>
                                        <div class="h-1 w-1 mr-1 rounded-full bg-white"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
            <footer class="h-24  w-full px-16">
                <div class="w-full h-full flex justify-end ">
                    <div class="h-16 w-16 bg-input rounded-full flex justify-center items-center shadow-lg"> 
                        <i class="mdi mdi-package-down text-gray-500 text-3xl"></i>
                    </div>


                </div>
            </footer>
        </div>
</template>

<script>

    export default {
        name: "TicketList"
        
    }
    
</script>