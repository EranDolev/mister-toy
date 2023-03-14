<template>
    <section class="app-filter">
        <form class="center" @submit.prevent="handleSubmit">
            <label htmlFor="name">Search by name: </label>
            <input type="text" name="name" v-model="filter.name" />
            <!-- <select name="by" v-model="filter.by">
                <option value="ALL">All</option>
                <option value="DONE">Done</option>
                <option value="ACTIVE">Active</option>
            </select> -->
            <button @click="handleSubmit">Search</button>
        </form>
        <!-- <pre>{{ filter }}</pre> -->
    </section>
</template>

<script>
export default {
    name: 'AppFilter',
    emits: ['filter'],
    props: [],
    components: {},
    created() { },
    data() {
        return {
            filter: {}
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('filter', { ...this.filter })
        }
    },
    computed: {},
}
</script>