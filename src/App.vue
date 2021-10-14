<template>
    <div id="app" class="w-screen h-screen text-gray-900">
        <Layout class="h-full w-full">
            <router-view />
        </Layout>
    </div>
</template>

<script>
    import { Layout } from '@/layouts';

    export default {
        components:{
            Layout
        },
        name: 'App'
    };
</script>