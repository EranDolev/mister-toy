<template>
    <section v-if="user" class="user-details">
        <h2>Hello {{ user.fullname }}</h2>
    </section>
</template>

<script>
import { userService } from '../services/user.service'
export default {
    async created() {
        try {
            const user = userService.getLoggedinUser()
            if (user) {
                this.$store.commit({ type: 'login', user })
            }

            const filterBy = { byUserId: user._id }
            await this.$store.dispatch({ type: 'loadReviews', filterBy })
        } catch (err) {
            console.error(err)
        }
    },
    computed: {
        user() {
            return this.$store.getters.loggedInUser
        },
        reviews() {
            return this.$store.getters.reviews
        },
    },
}
</script>