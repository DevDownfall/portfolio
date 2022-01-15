<template>
    <div>
        <Nuxt />
    </div>
</template>

<script>
import axios from 'axios';
import { APIPath } from '../plugins/variables.js'

export default {
    async mounted() {
        
    },

    data(){
        return {
            user: {
            loggedIn: false,
            userID: 0,
            role: 1,
            username: "guest",
        },
        }
    },

    components: {
        Navbar: () => import(`~/components/Navbar.vue`)
        // QuoteTile: () => import('~/components/QuoteTile.vue'),
    },
};
</script>
