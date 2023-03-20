<template>
    <li class="toy-preview">
        <!-- <pre>{{toy}}</pre> -->
        <button title="Delete Toy" @click="$emit('remove', toy._id)">X</button>
        <h2>{{ toy.name }}</h2>
        <h4>Price: {{ toy.price }} NIS</h4>
        <RouterLink class="btn" :to="'/toy/' + toy._id">Details</RouterLink> 
        <RouterLink class="btn" :to="'/toy/edit/' + toy._id">Edit</RouterLink>
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