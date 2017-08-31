<template>
    <div>
        hello{{currentProject.desc}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            currentProject: "content/currentProject",
        })
    }
}
</script>