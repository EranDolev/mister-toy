<template>
 <header  class="flex">
    <h1>
        Toy Store
    </h1> 
    <AppNav />
 </header>
</template>

<script>
import AppNav from './AppNav.vue';
export default {
 name: 'AppHeader',
 components: {
  AppNav
 }
}
</script>

<style></style>