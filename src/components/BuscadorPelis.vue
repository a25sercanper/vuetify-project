<template>
    <v-container>
        <v-row class="mt-5" justify="center">
            <v-col cols="12" md="6">
                <v-text-field v-model="searchString" placeholder="Cercador" @keyup.enter="buscar"></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
                <v-btn @click="buscar" color="orange-darken-3" height="56">Cercar</v-btn>
            </v-col>
        </v-row>

        <v-dialog v-model="mostrarDialog" max-width="800">

            <FitxaPelicula 
                v-if="peliSeleccionada"
                :peliSeleccionada="peliSeleccionada" 
                @tancar="mostrarDialog = false" 
            />

</v-dialog>


        <v-row>
            <v-col v-for="peli in pelis" :key="peli.imdbID" cols="12" md="4">
                <v-card class="h-100">
                    <v-card-title>{{ peli.Title }}</v-card-title>
                    <v-img :src="peli.Poster" height="300px"></v-img>
                    <v-card-actions><v-btn @click="verDetalles(peli.imdbID)" color="orange-darken-3" variant="tonal" block>Més Info</v-btn></v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';
    import { searchMovies, getMovieDetails } from '../services/communicationManajer';
import FitxaPelicula from './FitxaPelicula.vue';

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

        mostrarDialog.value = true;

        console.log(resultat);
    }

    const mostrarDialog = ref(false);

</script>
