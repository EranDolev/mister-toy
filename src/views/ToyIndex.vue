<template>
 <h1>
  toy index
 </h1>
 {{ msg }}

    <ToyList v-if="toys" :toys="toys"></ToyList>

</template>

<script>
import ToyList from '../components/ToyList.vue'
export default {
 name: 'ToyIndex',
 created() {
        this.$store.dispatch({ type: 'loadToys' })
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
    },
}
</script>

<style></style>