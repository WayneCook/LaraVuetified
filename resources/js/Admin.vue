<template>
    <v-app>
        <v-content>
            <v-container
            fluid
            >
                <v-layout>
                    <layout-component></layout-component>
                    <router-view></router-view>
                </v-layout>
            </v-container>
        </v-content>

        <v-footer
        color="#2f4554"
        app
        >
            <span class="white--text">Application</span>
        </v-footer>
    </v-app>
</template>

<script>

import LayoutComponent from './components/admin/LayoutComponent';

export default {
    components: {
        LayoutComponent
    }
  }
</script>

<style scoped>

</style>
