<template>
    <v-container>
        <v-row class="mt-5">
            <v-col cols="12" md="8">
                <v-text-field v-model="searchString" placeholder="Cercador"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
                <v-btn @click="buscar" color="primary">Buscar</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-card v-if="peliSeleccionada">
                <v-card-title>{{ peliSeleccionada.Director }} - {{ peliSeleccionada.Year }}</v-card-title> 
                <v-card-text>{{ peliSeleccionada.Plot }}</v-card-text>
            </v-card>
        </v-row>
        <v-row>
            <v-col v-for="peli in pelis" :key="peli.imdbID" cols="12" md="4">
                <v-card>
                    <v-card-title>{{ peli.Title }}</v-card-title>
                    <v-img :src="peli.Poster" height="300px"></v-img>
                    <v-card-actions><v-btn @click="verDetalles(peli.imdbID)" color="primary">Més Info</v-btn></v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';
    import { searchMovies, getMovieDetails } from '../services/communicationManajer';

    const searchString = ref('');
    const pelis = ref([]);

    const buscar = async () => {
        console.log("L'usuari ha cercat: ", searchString.value)

        const resultat = await searchMovies(searchString.value);

        pelis.value = resultat.Search;
        console.log(resultat);        
    }

    const peliSeleccionada = ref(null);

    const verDetalles = async (id) =>{
        console.log("L'usuari vol veure els detalls de l'id: ", id)
        
        const resultat = await getMovieDetails(id);

        peliSeleccionada.value=resultat;

        console.log(resultat);


    }


</script>
