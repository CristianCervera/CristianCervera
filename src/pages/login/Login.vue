<template>
    <div class="w-full h-full flex items-center justify-center bg-gray-200">
        <div>
            <div>
                <!-- <img class="mx-auto w-24" alt="Vue logo" src="@/assets/logo.png"> -->
                <p class="mt-2 text-2xl text-gray-700 text-center leading-tight">Inicie Sesión.</p>
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
                    class="mt-2 w-full max-w-xs px-4 py-4 bg-white rounded-lg">

                    <label class="block">
                        <p class="text-sm text-gray-600">Email</p>
                        <input type="text" v-model="form.email" class="mt-1 form-input py-1">
                    </label>

                    <label class="mt-2 block">
                        <p class="text-sm text-gray-600">Password</p>
                        <input type="password" v-model="form.password" class="mt-1 form-input py-1">
                    </label>

                    <div class="mt-4">
                        <button
                            @click="request"
                            class="w-full px-4 py-1 bg-indigo-500 font-medium text-indigo-100 rounded-lg"
                            :class="{ 'opacity-50': loading }"
                            :disabled="loading">
                            Login
                        </button>
                    </div>
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

