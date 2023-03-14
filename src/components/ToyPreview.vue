<template>
    <li class="toy-preview">
        <!-- <pre>{{toy}}</pre> -->
        <button @click="$emit('remove', toy._id)">X</button>
        <h2>{{ toy.name }}</h2>
        <h4>Price: {{ toy.price }} NIS</h4>
        <RouterLink :to="'/toy/' + toy._id">Details</RouterLink> |
        <RouterLink :to="'/toy/edit/' + toy._id">Edit</RouterLink>
    </li>
</template>

<script>
export default {
    name: 'ToyPreview',
    props: {
        toy: Object,
    },
    emits: ['remove'],
}
</script>