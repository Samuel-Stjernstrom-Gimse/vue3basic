

// Typescript way
<script setup lang="ts">

import defineProps from "./DefineProps.vue";

interface Props { // can be in separate file ex if the type is a big object
    foo: string
    bar?: number
}

const props: Props = defineProps()


</script>