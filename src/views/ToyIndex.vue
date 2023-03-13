<template>
 <h1>
  toy index
 </h1>
 {{ msg }}

    <toy-list v-if="toys" :toys="toys"></toy-list>

</template>

<script>
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
}
</script>

<style></style>