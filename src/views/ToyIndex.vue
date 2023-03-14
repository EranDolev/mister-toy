<template>
    <body>
        <h1 class="main">
            The Toys
        </h1>
        {{ msg }}
        <RouterLink class="btn btn-add" to="/toy/edit/">Add</RouterLink>
        <AppFilter @filter="setFilter" />
        <ToyList 
        v-if="toys" 
        :toys="toys"
        @remove="removeToy"
         />
    </body>
</template>

<script>
import ToyList from '../components/ToyList.vue'
import AppFilter from '../components/AppFilter.vue'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export default {
    name: 'ToyIndex',
    created() {
        this.$store.dispatch({ type: 'loadToys' })
    },
    methods: {
        setFilter(filter) {
            this.$store.dispatch({ type: 'loadToys', filter })

        },
        removeToy(toyId) {
            this.$store
                .dispatch({ type: 'removeToy', toyId })
                .then(() => {
                    showSuccessMsg('toy removed')
                })
                .catch(err => {
                    showErrorMsg('Cannot remove toy')
                })
        },
    },
    computed: {
        msg() {
            return this.$store.getters.getMsg
        },
        toys() {
            return this.$store.getters.toys
        }
    },
    components: {
        ToyList,
        AppFilter
    },
}
</script>

<style></style>