<template class="bg-gradient-to-b from-bgl to-bgd ">
    <div class="w-full h-full bg-gradient-to-b from-bgl to-bgd p-2">
        <header class="h-64 ">
                <img src="../../assets/LogoZeus.png" alt="">
        </header>
        <div class=" flex w-full flex-1 min-h-0 justify-center">
            <div class="flex items-center flex-col w-1/5">
                <h1 class="text-white text-2xl font-regular text-center mb-4 ">Registro de <br>usuario nuevo.</h1>
                <form action="" class="w-full flex flex-col ">
                   <div class="flex flex-col w-full">
                       <input type="text" class="form-input border-none " placeholder="Nombre">
                       <input type="text" class="form-input border-none" placeholder="Apellidos">
                       <input type="text" class="form-input border-none" placeholder="Puesto de trabajo" >
                       <input type="text" class="form-input border-none" placeholder="Email">
                       <input type="text" class="form-input border-none" placeholder="Contraseña">
                       <input type="text" class="form-input border-none" placeholder="Confirmar contraseña">
                   </div>
                   <div class="w-full flex justify-center justify-between p-2">
                       <div class=" flex justify-between items-center">
                            <input type="checkbox" class="mr-2 form-checkbox ">
                            <span class="text-white p-2 text-sm">Recuerdame</span>
                       </div>
                       
                       <button class="w-40  h-10 bg-button text-white rounded-lg text-sm p-2 flex items-center justify-center" >Iniciar sesión</button>
                   </div>
                </form>
            </div>

        </div>
        
    </div>
</template>
<style scoped>
/* .a::placeholder{
    color: green
} */
</style>