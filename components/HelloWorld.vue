<template>
    <Card v-model:age="age" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from './Emit.vue';

const age = ref(2);

</script>
