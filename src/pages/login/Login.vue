<template>
    <div class="w-full h-full bg-gradient-to-b from-bgl to-bgd flex items-center justify-center">
        <div>
            <div>
                <!-- <img class="mx-auto w-24" alt="Vue logo" src="@/assets/logo.png"> -->
                <p class="text-white text-2xl font-regular text-center mb-6 ">Inicie Sesión.</p>
            </div>

            <Request
                model="Auth"
                action="login"
                :form="form"
                @success="onSuccess"
                @error="onError"
                v-slot="{ request, loading }">

                <div
                    @keypress.enter="request"
                    class="w-full rounded-lg">

                    <div class="w-full">
                        
                        <input type="text" v-model="form.email" class=" form-input w-full border-none mb-4" placeholder="E-mail">
                    </div>

                    <div class="">
                        <!-- <p class="text-sm text-gray-600">Password</p> -->
                        <input type="password" v-model="form.password" class="form-input w-full border-none mb-4" placeholder="Password">
                    </div>
                    
                    <div class="w-full flex justify-center justify-between ">
                       <div class=" flex justify-between items-center">
                            <input type="checkbox" class="mr- form-checkbox ">
                            <span class="text-white p-2 text-sm mr-6">Recuerdame</span>
                       </div>
                       
                       <button 
                       @click="request"
                       :class="{ 'opacity-50': loading }"
                            :disabled="loading"
                            
                       class="w-40  h-10 bg-button text-white rounded-lg text-sm flex items-center justify-center" >Iniciar sesión</button>
                   </div>
                    

                    <!-- <div class="mt-4">
                        <button
                            @click="request"
                            class="w-40  h-10 bg-button text-white rounded-lg text-sm flex items-center justify-center"
                            :class="{ 'opacity-50': loading }"
                            :disabled="loading">
                            Login
                        </button>
                    </div> -->
                </div>
            </Request>
        </div>
    </div>
</template>

<script>
    import { Request } from '@/api/components';
    import { actions } from '@/store';

    export default {
        name: 'Login',
        components: {
            Request
        },
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            };
        },
        methods: {
            onSuccess(response) {
                actions.setToken(response.data);
                this.$router.push({ name: 'Home' });
                console.log('success', response);
            },
            onError(error) {
                console.log('failed', error);
            }
        }
    }
</script>

