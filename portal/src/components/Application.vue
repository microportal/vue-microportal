<template>
    <div>
        <div :id="'single-spa-application:@microportal/' + this.$route.params.appId"></div>
    </div>
</template>

<script>
    export default {
        name: 'Application',
        mounted() {
            console.log(`Mounted 'div' for application: ${this.$route.params.appId}`);
        }
    };
</script>
