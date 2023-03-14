
<template>
    <ul class="toy-list flex">
        <ToyPreview 
        v-for="toy in toys" 
        :key="toy.id" 
        :toy="toy"
        @remove="$emit('remove',$event)"
        />
    </ul>
</template>

<script>
import ToyPreview from './ToyPreview.vue'
export default {
        name: 'ToyList',
        props: {
            toys: Array,
            required: true
        },
        components: {
                ToyPreview
        },
        created() { },
        data() {
                return {}
        },
        methods: {},
        computed: {},
        components: {
        ToyPreview,
    }
}
</script>