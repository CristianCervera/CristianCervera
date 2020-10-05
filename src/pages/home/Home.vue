<template>
    <div class="w-full h-full px-6 py-4">
        <h1 class="text-2xl font-medium">Home</h1>

        <h3 class="font-medium">Usuario</h3>
        {{ user }}
    </div>
</template>

<script>
    import { state } from '@/store';

    export default {
        name: 'Home',
        computed: {
            user() {
                return state.user;
            },
        }
    }
</script>
