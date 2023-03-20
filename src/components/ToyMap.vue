<template>
    <button @click="center=this.pos1">Tel Aviv</button>
    <button @click="center=this.pos2">Rishon Lezion</button>
    <button @click="center=this.pos3">Jerusalem</button>
    <GoogleMap api-key="AIzaSyDc6zeYo8vx3MKZKVEeBtILIyfqmDqXQnQ" style="width: 100%; height: 500px" :center="center" :zoom="14">
      <Marker @click="center = this.pos1" :options="{ position: pos1 }" />
      <Marker @click="center = this.pos2" :options="{ position: pos2 }" />
      <Marker @click="center = this.pos3" :options="{ position: pos3 }" />
    </GoogleMap>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { GoogleMap, Marker } from "vue3-google-map";
  
  export default defineComponent({
    components: { GoogleMap, Marker },
    data() {
      return {
        center: { lat: 32.0853, lng: 34.7818 },
        pos1: { lat: 32.0853, lng: 34.7818 },
        pos2: { lat: 31.963661, lng: -325.189130 },
        pos3: { lat: 31.7683, lng: 35.2137 },
      }
    },
    methods: {
    }
  });
  </script>