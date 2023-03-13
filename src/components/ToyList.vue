
<template>
    <ul class="toy-list">
        <ToyPreview v-for="toy in toys" 
        :key="toy.id" :toy="toy"
        @remove="$emit('remove',$event)"
        />
    </ul>
</template>

<script>
import ToyPreview from './ToyPreview.vue'
export default {
        name: 'ToyList',
        props: ['toys'],
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