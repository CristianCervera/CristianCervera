<template>

    <div class="h-full w-full bg-module flex flex-col p-4 relative">

        <loader :loading="loading" />

        <div class="h-16 w-full flex flex-row justify-start items-center border-b border-aux">
            <span class="text-xl text-white font-semibold uppercase">Añadir {{option.title}}</span>

            <div class="h-10 w-10 flex flex-col justify-center items-center ml-auto rounded-lg cursor-pointer hover:bg-aux hover:bg-opacity-25" @click="closeModal()">
                <i class="mdi mdi-close text-xl text-aux"></i>
            </div>

        </div>

        <div v-if="option.title == 'Bautizos'" class="flex flex-1 min-h-0 flex flex-col">

            <div class="flex flex-1 min-h-0">

                <div v-if="page == 1" class="h-full w-full flex flex-col">

                    <div class="h-16 flex flex-row justify-center items-center">
                        <span class="text-white text-xl font-semibold">Datos del Bautizado</span>
                    </div>

                    <div class="flex flex-1 min-h-0 flex py-4">

                        <div class="h-full w-full flex flex-col pl-10 pr-5">

                            <div class="h-10 w-full flex flex-row">
                                <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                    <span class="text-white text-lg mr-4">Nombre</span>
                                </div>
                                <div class="h-full flex flex-1 min-w-0">
                                    <input v-model="form.name" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                </div>
                            </div>

                            <div class="h-10 w-full flex flex-row mt-4">
                                <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                    <span class="text-white text-lg mr-4">Primer apellido</span>
                                </div>
                                <div class="h-full flex flex-1 min-w-0">
                                    <input v-model="form.firstName" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                </div>
                            </div>

                            <div class="h-10 w-full flex flex-row mt-4">
                                <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                    <span class="text-white text-lg mr-4">Segundo apellido</span>
                                </div>
                                <div class="h-full flex flex-1 min-w-0">
                                    <input v-model="form.lastName" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                </div>
                            </div>

                            <div class="h-10 w-full flex flex-row mt-4">
                                <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                    <span class="text-white text-lg mr-4">Sexo</span>
                                </div>
                                <div class="h-full flex flex-1 min-w-0">
                                    <select name="dimensionfilter" v-model="form.sex" class="h-full w-full rounded-lg bg-body text-white px-2">
                                        <option v-for="(el,index) in geners" :key="index" :value="el.value">{{el.name}}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="h-10 w-full flex flex-row mt-4">
                                <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                    <span class="text-white text-lg mr-4">Fecha de nacimiento</span>
                                </div>
                                <div class="h-full flex flex-1 min-w-0">
                                    <div class="h-full w-full rounded-lg bg-body flex flex-row justify-start items-center px-2">

                                       <v-date-picker class="inline-block h-full" v-model="form.birthdate" is-dark color="teal">

                                            <template v-slot="{ inputValue, togglePopover }">

                                                <div class="h-full flex flex-row justify-start items-center">

                                                    <button class="h-full px-4 flex flex-col justify-center items-center" @click="togglePopover()">
                                                        <i class="mdi mdi-calendar text-lg text-aux"></i>
                                                    </button>

                                                    <input :value="inputValue" class="h-full w-full rounded-lg bg-body text-white" readonly/>

                                                </div>

                                            </template>
                                        
                                        </v-date-picker>

                                    </div>
                                </div>
                            </div>

                            <div class="h-10 w-full flex flex-row mt-4">
                                <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                    <span class="text-white text-lg mr-4">Hora de nacimiento</span>
                                </div>
                                <div class="h-full flex flex-1 min-w-0">
                                    <input v-model="form.birthHour" type="time" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                </div>
                            </div>

                            <div class="h-10 w-full flex flex-row mt-4">
                                <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                    <span class="text-white text-lg mr-4">Provincia</span>
                                </div>
                                <div class="h-full flex flex-1 min-w-0">
                                    <input v-model="form.province" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                </div>
                            </div>

                        </div>

                        <div class="h-full w-full flex flex-col pr-10 pl-5">

                            <div class="h-10 w-full flex flex-row">
                                <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                    <span class="text-white text-lg mr-4">Fecha de bautismo</span>
                                </div>
                                <div class="h-full flex flex-1 min-w-0">
                                    <div class="h-full w-full rounded-lg bg-body flex flex-row justify-start items-center px-2">

                                       <v-date-picker class="inline-block h-full" v-model="form.baptismDate" is-dark color="teal">

                                            <template v-slot="{ inputValue, togglePopover }">

                                                <div class="h-full flex flex-row justify-start items-center">

                                                    <button class="h-full px-4 flex flex-col justify-center items-center" @click="togglePopover()">
                                                        <i class="mdi mdi-calendar text-lg text-aux"></i>
                                                    </button>

                                                    <input :value="inputValue" class="h-full w-full rounded-lg bg-body text-white" readonly/>

                                                </div>

                                            </template>
                                        
                                        </v-date-picker>

                                    </div>
                                </div>
                            </div>

                            <div class="h-10 w-full flex flex-row mt-4">
                                <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                    <span class="text-white text-lg mr-4">Parroquia de bautismo</span>
                                </div>
                                <div class="h-full flex flex-1 min-w-0">
                                    <input v-model="form.parochialChurch" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                </div>
                            </div>

                            <div class="h-10 w-full flex flex-row mt-4">
                                <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                    <span class="text-white text-lg mr-4">Barrio</span>
                                </div>
                                <div class="h-full flex flex-1 min-w-0">
                                    <input v-model="form.neighborhood" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                </div>
                            </div>

                            <div class="h-auto mt-4 flex flex-row justify-center items-center">

                                <span class="text-white text-lg">Dirección de Nacimiento</span>

                            </div>

                            <div class="h-10 w-full flex flex-row mt-4">
                                <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                    <span class="text-white text-lg mr-4">Calle</span>
                                </div>
                                <div class="h-full flex flex-1 min-w-0">
                                    <input v-model="form.birthAddress.street" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                </div>
                            </div>

                            <div class="h-10 w-full flex flex-row mt-4">
                                <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                    <span class="text-white text-lg mr-4">Número</span>
                                </div>
                                <div class="h-full flex flex-1 min-w-0">
                                    <input v-model="form.birthAddress.number" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                </div>
                            </div>

                            <div class="h-10 w-full flex flex-row mt-4">
                                <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                    <span class="text-white text-lg mr-4">Puerta</span>
                                </div>
                                <div class="h-full flex flex-1 min-w-0">
                                    <input v-model="form.birthAddress.door" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                </div>
                            </div>

                        </div>

                    </div>                    

                </div>

                <div v-if="page == 2" class="h-full w-full flex flex-col">

                    <div class="h-16 flex flex-row justify-center items-center">
                        <span class="text-white text-xl font-semibold">Datos de los Padres</span>
                    </div>

                    <div class="h-auto flex">

                        <div class="h-full w-full flex flex-col pl-10 pr-5">

                            <div class="h-16 w-full flex flex-row justify-center items-center">
                                <span class="text-white text-lg font-semibold">Datos del Padre</span>
                            </div>

                            <div class="flex flex flex-1 min-h-0 flex-col">

                                <div class="h-10 w-full flex flex-row mt-4">
                                    <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                        <span class="text-white text-lg mr-4">Nombre</span>
                                    </div>
                                    <div class="h-full flex flex-1 min-w-0">
                                        <input v-model="form.parents.father.name" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                    </div>
                                </div>

                                <div class="h-10 w-full flex flex-row mt-4">
                                    <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                        <span class="text-white text-lg mr-4">Primer apellido</span>
                                    </div>
                                    <div class="h-full flex flex-1 min-w-0">
                                        <input v-model="form.parents.father.firstName" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                    </div>
                                </div>

                                <div class="h-10 w-full flex flex-row mt-4">
                                    <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                        <span class="text-white text-lg mr-4">Segundo apellido</span>
                                    </div>
                                    <div class="h-full flex flex-1 min-w-0">
                                        <input v-model="form.parents.father.lastName" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                    </div>
                                </div>

                                <div class="h-10 w-full flex flex-row mt-4">
                                    <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                        <span class="text-white text-lg mr-4">Ciudad de origen</span>
                                    </div>
                                    <div class="h-full flex flex-1 min-w-0">
                                        <input v-model="form.parents.father.townOfOrigin" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="h-full w-full flex flex-col pr-10 pl-5">

                            <div class="h-16 w-full flex flex-row justify-center items-center">
                                <span class="text-white text-lg font-semibold">Datos de la Madre</span>
                            </div>

                            <div class="flex flex flex-1 min-h-0 flex-col">

                                <div class="h-10 w-full flex flex-row mt-4">
                                    <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                        <span class="text-white text-lg mr-4">Nombre</span>
                                    </div>
                                    <div class="h-full flex flex-1 min-w-0">
                                        <input v-model="form.parents.mother.name" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                    </div>
                                </div>

                                <div class="h-10 w-full flex flex-row mt-4">
                                    <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                        <span class="text-white text-lg mr-4">Primer apellido</span>
                                    </div>
                                    <div class="h-full flex flex-1 min-w-0">
                                        <input v-model="form.parents.mother.firstName" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                    </div>
                                </div>

                                <div class="h-10 w-full flex flex-row mt-4">
                                    <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                        <span class="text-white text-lg mr-4">Segundo apellido</span>
                                    </div>
                                    <div class="h-full flex flex-1 min-w-0">
                                        <input v-model="form.parents.mother.lastName" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                    </div>
                                </div>

                                <div class="h-10 w-full flex flex-row mt-4">
                                    <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                        <span class="text-white text-lg mr-4">Ciudad de origen</span>
                                    </div>
                                    <div class="h-full flex flex-1 min-w-0">
                                        <input v-model="form.parents.mother.townOfOrigin" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="flex flex-1 min-h-0 flex-col mt-20">

                        <div class="h-full w-1/2 mx-auto">

                            <div class="h-16 flex flex-row justify-center items-center">
                                <span class="text-white text-lg font-semibold">Datos de la boda</span>
                            </div>

                            <div class="flex flex-1 min-h-0 flex-col mt-4">

                                <div class="h-10 w-full flex flex-row">
                                    <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                        <span class="text-white text-lg mr-4">Ciudad</span>
                                    </div>
                                    <div class="h-full flex flex-1 min-w-0">
                                        <input v-model="form.parents.weddingTown" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                    </div>
                                </div>

                                <div class="h-10 w-full flex flex-row mt-4">
                                    <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                        <span class="text-white text-lg mr-4">Parroquia</span>
                                    </div>
                                    <div class="h-full flex flex-1 min-w-0">
                                        <input v-model="form.parents.parish" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div v-if="page == 3" class="h-full w-full flex flex-col">

                    <div class="h-12 flex flex-row justify-center items-center">
                        <span class="text-white text-xl font-semibold">Datos de los Abuelos</span>
                    </div>

                    <div class="flex flex-1 min-h-0 flex-col w-1/2 mx-auto">

                        <div class="h-full w-full flex flex-col pr-8">

                            <div class="h-12 w-full flex flex-row justify-center items-center mt-4">
                                <span class="text-white text-lg font-semibold">Datos del Abuelo</span>
                            </div>

                            <div class="flex flex flex-1 min-h-0 flex-col">

                                <div class="h-10 w-full flex flex-row mt-4">
                                    <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                        <span class="text-white text-lg mr-4">Nombre</span>
                                    </div>
                                    <div class="h-full flex flex-1 min-w-0">
                                        <input v-model="form.grandparents.grandfather.name" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                    </div>
                                </div>

                                <div class="h-10 w-full flex flex-row mt-4">
                                    <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                        <span class="text-white text-lg mr-4">Primer apellido</span>
                                    </div>
                                    <div class="h-full flex flex-1 min-w-0">
                                        <input v-model="form.grandparents.grandfather.firstName" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                    </div>
                                </div>

                                <div class="h-10 w-full flex flex-row mt-4">
                                    <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                        <span class="text-white text-lg mr-4">Segundo apellido</span>
                                    </div>
                                    <div class="h-full flex flex-1 min-w-0">
                                        <input v-model="form.grandparents.grandfather.lastName" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="h-full w-full flex flex-col pl-8">

                            <div class="h-12 w-full flex flex-row justify-center items-center">
                                <span class="text-white text-lg font-semibold">Datos de la Abuela</span>
                            </div>

                            <div class="flex flex flex-1 min-h-0 flex-col">

                                <div class="h-10 w-full flex flex-row mt-4">
                                    <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                        <span class="text-white text-lg mr-4">Nombre</span>
                                    </div>
                                    <div class="h-full flex flex-1 min-w-0">
                                        <input v-model="form.grandparents.grandmother.name" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                    </div>
                                </div>

                                <div class="h-10 w-full flex flex-row mt-4">
                                    <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                        <span class="text-white text-lg mr-4">Primer apellido</span>
                                    </div>
                                    <div class="h-full flex flex-1 min-w-0">
                                        <input v-model="form.grandparents.grandmother.firstName" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                    </div>
                                </div>

                                <div class="h-10 w-full flex flex-row mt-4">
                                    <div class="h-full w-1/3 flex flex-row justify-start items-center">
                                        <span class="text-white text-lg mr-4">Segundo apellido</span>
                                    </div>
                                    <div class="h-full flex flex-1 min-w-0">
                                        <input v-model="form.grandparents.grandmother.lastName" type="text" class="h-full ml-auto rounded-lg px-2 bg-body text-white w-full">
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div class="h-auto py-2  flex flex-row justify-center items-center">

                <div v-if="page > 1" class="h-auto w-20 py-1 flex flex-col justify-center items-center rounded-lg bg-aux cursor-pointer mr-4" @click="page--">
                    <i class="mdi mdi-arrow-left text-body text-lg font-semibold"></i>
                </div>

                <div v-if="page < 3" class="h-auto w-20 py-1 flex flex-col justify-center items-center rounded-lg bg-aux cursor-pointer" @click="page ++">
                    <i class="mdi mdi-arrow-right text-body text-lg font-semibold"></i>
                </div>

                <div v-if="page == 3" class="h-auto w-20 py-1 flex flex-col justify-center items-center rounded-lg bg-aux cursor-pointer" @click="save()">
                    <span class="text-body font-semibold text-lg">Guardar</span>
                </div>

            </div>

        </div>

    </div>

</template>

<script>
import loader from './loader.vue';

export default {
    props:['option'],
    components:{
        loader
    },
    data(){
        return{
            form:{
                "parochialChurch": "string",
                "neighborhood": "string",
                "province": "string",
                "baptismDate": "2021-11-27T11:46:27.701Z",
                "sex": "string",
                "name": "string",
                "firstName": "string",
                "lastName": "string",
                "birthdate": "2021-11-27T11:46:27.701Z",
                "birthHour": "string",
                "birthAddress": {
                    "street": "string",
                    "number": "string",
                    "door": "string"
                },
                "parents": {
                    "father": {
                    "name": "string",
                    "firstName": "string",
                    "lastName": "string",
                    "townOfOrigin": "string"
                    },
                    "mother": {
                    "name": "string",
                    "firstName": "string",
                    "lastName": "string",
                    "townOfOrigin": "string"
                    },
                    "weddingTown": "string",
                    "parish": "string"
                },
                "grandparents": {
                    "grandfather": {
                    "name": "string",
                    "firstName": "string",
                    "lastName": "string"
                    },
                    "grandmother": {
                    "name": "string",
                    "firstName": "string",
                    "lastName": "string"
                    }
                }
            },
            page:1,
            geners:[
                {name:'Masculino', value: 'masc'},
                {name:'Femenino', value: 'fem'}
            ],
            loading: false
        }
    },
    methods:{
        closeModal(){
            this.page = 1;
            this.$emit('closeModal')
        },
        save(){
            
            this.loading = true;

            this.axios.post('/'+this.option.value).then( response => {
                this.loadin = false;
                this.closeModal();
            })

        }
    }
}
</script>

<style>

</style>