<template>
    <h1>details</h1>
        <section v-if="toy" class="toy-details">
        <button @click="$router.go(-1)">x</button>
        <pre>{{toy}}</pre>
       </section>
</template>



<script>
import { toyService } from './../services/toy.service.js'

export default {
    created() {
        const { toyId } = this.$route.params
        toyService.getById(toyId)
            .then(toy => {
                this.toy = toy
            })


    },
    data() {
        return {
            toy: null
        }
    },
    methods: {

    },
    computed: {

    },

}
</script>