<template>
    <section class="app-filter">
        <form class="center" @submit.prevent="handleSubmit">
            <label htmlFor="name">Search by name: </label>
            <input type="text" name="name" v-model="filter.name" />
            <label htmlFor="inStock">In Stock </label>
            <input type="checkbox" name="inStock" v-model="filter.inStock" label="Show only toys in stock" />
            <el-select v-model="filter.labels" multiple placeholder="All" style="width: 20px">
                <el-option v-for="label in labels" :key="label" :label="label" :value="label" />
            </el-select>
            <el-select v-model="filter.sortBy" style="width: 20px">
                <el-option value="name">name</el-option>
                <el-option value="price">price</el-option>
                <el-option value="createdAt">created</el-option>
            </el-select>
            <!-- <select name="by" v-model="filter.labels">
                <option label="All" value="ALL">All</option>
                <option label="Doll" value="Doll">Doll</option>
                <option label="Battery Powered" value="Battery Powered">Battery Powered</option>
                <option label="Baby" value="Baby">Baby</option>
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
            filter: {
                labels: [],
                sortBy: "name",
            },
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('filter', { ...this.filter })
        }
    },
    computed: {
        labels() {
            return this.$store.getters.labels;
        }
    },
}
</script>