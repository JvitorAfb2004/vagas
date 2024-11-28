<template>
    <v-container class="pesquisa" fluid>
      <v-row>
        <!-- Campo de busca por vaga -->
        <v-col cols="12" md="5">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            label="Qual vaga você procura?"
            variant="outlined"
            placeholder="Nome da vaga ou cargo"
            id="vaga-busca"
            clearable
          ></v-text-field>
          <v-row class="chips mt-2">
            <v-chip close>Desenvolvedor</v-chip>
            <v-chip close>Analista</v-chip>
          </v-row>
        </v-col>
  
        <!-- Campo de localização -->
        <v-col cols="12" md="5">
          <v-text-field
            prepend-inner-icon="mdi-map-marker-outline"
            label="Onde você procura?"
            variant="outlined"
            placeholder="Selecione um ou mais locais"
            id="local-busca"
            clearable
            autocomplete
          ></v-text-field>
        </v-col>
  

        <v-col cols="12" md="2" class="d-flex align-center">
          <v-btn class="btnbuscar" color="primary" >
            <v-icon style="padding-right: 8px;">mdi-magnify</v-icon>
            Buscar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <style scoped>
 
  </style>
  