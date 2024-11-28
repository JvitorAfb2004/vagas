<template>
    <v-app-bar app elevation="0" height="48" class="nav">
      <!-- Logo ou Nome -->
      <v-app-bar-title>
       <h4 color="primary">Vagas</h4>
      </v-app-bar-title>
  
      <!-- Navegação principal -->
      <v-spacer></v-spacer>
      <v-btn class="menu" color="primary" text to="/buscar-vagas">Buscar Vagas</v-btn>
      <v-btn class="menu"  color="primary"  text to="/vagas-rh">Vagas RH</v-btn>
      <v-btn class="menu"  color="primary"  text to="/para-empresas">Para Empresas</v-btn>
      <v-btn class="menu"  color="primary"  text to="/blog">Blog</v-btn>
      <v-btn class="menu"  color="primary"  text to="/cursos">Cursos</v-btn>

      <v-btn icon class="mr10">
        <v-icon color="icon">mdi-bell</v-icon>
      </v-btn>
     
      <v-menu
      v-model="menu"
      :close-on-content-click="false"
      location="end"
    >
      <template v-slot:activator="{ props }">
       
        <v-avatar
        v-bind="props"
      size="40"
      color="primary"
    >
    <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>
    </v-avatar>
      </template>

      <v-card min-width="300">
        <v-list>
          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            subtitle="jvitorafb@gmail.com"
            title="João Vítor"
          >
         
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item link>
          <v-list-item-title>
            <v-icon>mdi-account-outline</v-icon>
           Sua conta</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-title>
            <v-icon>mdi-heart-outline</v-icon>
           Minhas Vagas</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>
            <v-icon>mdi-cog-outline</v-icon>
           Configurações</v-list-item-title>
        </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red"
            variant="text"
            @click="menu = false"
          >
            Deslogar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    data() {
          return {
            fav: true,
      menu: false,
      message: false,
      hints: true,
    }
   }
  };
  </script>
  
  <style scoped>
  .v-app-bar {
    background-color: #2196f3; /* Azul padrão Vuetify */
    color: white;
  }
  </style>
  