<template>
    <div>
        <h2>Props Example</h2>
        <p>Message: {{ message }}</p>
        <p>Priority: {{ priority }}</p>
    </div>
</template>

<script setup lang="ts">
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