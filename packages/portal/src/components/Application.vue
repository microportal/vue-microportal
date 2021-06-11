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
        },
        // beforeMount() {
        //     const eles = document.querySelector("#single-spa-application\\:\\@microportal\\/settings")
        //     console.log(eles)
        //     // const elements = document.getElementsById('single-spa-application:@microportal/' + this.$route.params.appId);
        // },
        // beforeRouteEnter(to, from, next) {
            // console.log(`beforeCreate: ${to.params.appId}`);
            // const element = document.getElementById('single-spa-application:@microportal/' + to.params.appId);
            // console.log(element)
            // if (element) {
            //     element.remove();
            // }
        // },
    };
</script>
