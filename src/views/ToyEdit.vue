<template>
    <section v-if="toy" class="add-edit-toy">
        <h1>add edit</h1>
        <!--  "title": "delectus aut autem",
  "isDone": false,
  "createdAt": 1678525951439 -->

        <form @submit="handleSubmit">
            <label for="name">Name</label>
            <input type="text" name="name" v-model="toy.name" />
            <label for="price">Price</label>
            <input type="number" name="price" v-model="toy.price" />
        </form>
        <pre>{{ toy }}</pre>
        <button @click="handleSubmit">Confirm</button>
    </section>
</template>

<script>
import { toyService } from "../services/toy.service.js"

export default {
    name: 'ToyEdit',
    props: [],
    created() {
        const { toyId } = this.$route.params
        this.toy = toyId
            ? toyService.getById(toyId)
                .then(toy => {
                    this.toy = toy
                })
            : toyService.getEmptyToy()
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
        handleSubmit() {
            this.$store.commit({ type: 'addToy', toy: this.toy })
            this.$router.push('/toy')
        }
    },
}
</script>

