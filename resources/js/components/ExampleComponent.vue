<template>
    <v-row justify="center">
        <v-col class="d-flex justify-center align-center">
            <div>
                <p class="mb-0">{{`Hello, ${$store.getters['user/getName']} here.`}}</p>
                <p class="mb-0">
                    {{`Contact me at`}}
                    <v-btn 
                        text 
                        small 
                        plain
                        color="primary" 
                        class="text-none"
                    >
                        {{$store.getters['user/getEmail']}}
                    </v-btn>
                </p>
            </div>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        mounted() {
            this.$store.dispatch('user/setName', 'jon doe')
            this.$store.dispatch('user/setEmail', 'jondoe@mail.com')
        },
    }
</script>

<style>

</style>