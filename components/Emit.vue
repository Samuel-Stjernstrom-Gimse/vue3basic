<template>
    <button @click="handleClick">Age is: {{ age }}</button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    age: number;
}>();

const emit = defineEmits(['update:age']);

const handleClick = () => {
    emit('update:age', props.age + 1);
};

</script>

<style scoped>

</style>
