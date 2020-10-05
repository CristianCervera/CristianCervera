<template>
    <div id="app" class="w-screen h-screen text-gray-900">
        <router-view />
    </div>
</template>

<script>
    import { Layout } from '@/layouts';

    export default {
        name: 'App'
    };
</script>