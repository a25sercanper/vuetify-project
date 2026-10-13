<template>
            <v-card v-if="peliSeleccionada">
                <v-card-title class ="d-flex justify-space-between align-center" pb-0>
                    <span class="text-h5 font-weight-bold">{{ peliSeleccionada.Title }} ({{ peliSeleccionada.Year }})</span>
                    
                    <v-btn icon="mdi-close" color="error" variant="text" @click="$emit('tancar')"></v-btn>
                </v-card-title>

                <v-card-text class="pt-0">
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-img :src="peliSeleccionada.Poster" height="350px"></v-img>
                        </v-col>

                        <v-col cols="12" md ="8">
                            <p class="font-italic mb-4"> Director: {{ peliSeleccionada.Director }}</p>
                            <p>{{ peliSeleccionada.Plot }}</p>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>

</template>

<script setup>
    defineProps(['peliSeleccionada']);
</script>

