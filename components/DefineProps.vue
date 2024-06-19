// No Typescript
<script setup >
import { defineProps } from 'vue';

// Define props using defineProps
const props = defineProps({
    message: String,    // String type prop
    priority: {
        type: Number,     // Number type prop
        default: 1        // Default value for priority prop
    },
    name: String
});

</script>

// Typescript way
<script setup lang="ts">

import defineProps from "./DefineProps.vue";

interface Props { // can be in separate file ex if the type is a big object
    foo: string
    bar?: number
}

const props: Props = defineProps()


</script>