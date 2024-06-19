<template>
    <div>
        <p>Message: {{ message }}</p>
        <button @click="updateMessage">Update Message</button>
    </div>
</template>

<script setup>
import {
    ref,
    onBeforeCreate,
    onCreated,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
} from 'vue';

// Define reactive state using ref
const message = ref('Initial message');

// Lifecycle hooks
onBeforeCreate(() => {
    console.log('Component is about to be created');
});

onCreated(() => {
    console.log('Component created');
});

onBeforeMount(() => {
    console.log('Component is about to be mounted');
});

onMounted(() => {
    console.log('Component mounted');
});

onBeforeUpdate(() => {
    console.log('Component is about to update');
});

onUpdated(() => {
    console.log('Component updated');
});

onBeforeUnmount(() => {
    console.log('Component is about to be unmounted');
});

onUnmounted(() => {
    console.log('Component unmounted');
});

// Define methods
const updateMessage = () => {
    message.value = 'Updated message';
};
</script>