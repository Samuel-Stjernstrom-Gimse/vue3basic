<template>
    <div>
        <p>Original Price: {{ price }}</p>
        <p>Discount: {{ discount }}</p>
        <p>Discounted Price: {{ discountedPrice }}</p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Reactive state
const price = ref(100);
const discountPercentage = ref(20);

// Computed properties
const discount = computed(() => price.value * (discountPercentage.value / 100));
const discountedPrice = computed(() => price.value - discount.value);
</script>