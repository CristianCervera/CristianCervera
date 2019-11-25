<template>
    <div id="app" class="w-screen h-screen text-gray-900">
        <Layout class="w-full min-h-full">
            <router-view/>
        </Layout>
    </div>
</template>

<script>
    import { Layout } from '@/layouts';

    export default {
        name: 'App',
        components: {
            Layout
        }
    };
</script>