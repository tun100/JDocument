<template>
    <div>
        contenShow{{currentContent}}
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            currentContent: "content/currentContent",
        })
    }
}
</script>