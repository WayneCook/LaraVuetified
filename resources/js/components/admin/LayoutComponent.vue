<template>
    <div>
        <v-navigation-drawer
        v-model="drawer"
        app
        >
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="title">
                    Admin
                </v-list-item-title>
                <v-list-item-subtitle>
                    Menu
                </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list>
                <v-list-item-group>

                    <v-list-item to='/admin/dashboard'>
                        <v-list-item-icon>
                            <v-icon>mdi-view-dashboard-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Dashboard</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item to='/admin/users'>
                        <v-list-item-icon>
                            <v-icon>mdi-account-group-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Users</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                        <v-list-group
                            prepend-icon="mdi-file-document-box-multiple-outline"
                            no-action
                        >
                            <template v-slot:activator>
                            <v-list-item-title>Pages</v-list-item-title>
                            </template>

                            <v-list-item to='/admin/pages/home'>
                                <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title>Home</v-list-item-title>
                                </v-list-item-content>

                            </v-list-item>

                        </v-list-group>
                    </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
        app
        color="#2f4554"
        dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="d-none d-sm-flex ">Application</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-icon class="d-none d-sm-flex mr-2">mdi-account-circle</v-icon>

            <span class="mr-4 d-none d-sm-flex">
                <!-- {{ user.name }} -->
            </span>

            <v-btn @click="logout()" class="ma-2" text dark>
                <v-icon dark left>mdi-logout</v-icon>logout
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>

    export default {
        props: ['user'],
        data(){
            return {
                drawer: false,
                snackbar: false
            }
        },
        methods: {
            logout() {
                axios.post('/logout').then(response => {

                  if (response.status === 302 || 401) {

                    window.location.href = "/";

                  }
                  else {
                    // throw error and go to catch block
                  }
                }).catch(error => {

              });
            }
        }
    }

</script>

<style>

</style>
