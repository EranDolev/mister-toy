<template>
             <li class="toy-preview">
             <pre>{{toy}}</pre>
             <!-- <button @click="$emit('remove', toy._id)">Remove</button> | -->
            <RouterLink :to="'/toy/'+toy._id" >Details</RouterLink> |
            <RouterLink :to="'/toy/edit/'+toy._id" >Edit</RouterLink>
         </li>

    </template>

<script>
export default {
    name: 'ToyPreview',
    props: ['toy'],
    emits: ['remove'],
}
</script>