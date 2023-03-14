<template>
    <h1>
        toy index
    </h1>
    {{ msg }}
    <AppFilter @filter="setFilter" />
    <ToyList v-if="toys" :toys="toys"/>
</template>

<script>
import ToyList from '../components/ToyList.vue'
import AppFilter from '../components/AppFilter.vue'

export default {
    name: 'ToyIndex',
    created() {
        this.$store.dispatch({ type: 'loadToys' })
    },
    methods: {
        setFilter(filter) {
            this.$store.commit({ type: 'setFilter', filter })

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