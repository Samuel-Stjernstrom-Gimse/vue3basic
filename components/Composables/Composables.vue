<template>
    <div>
        <h2>Item List</h2>
        <p>Number of items: {{ itemCount }}</p>

        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{ item }}
                <button @click="removeItem(index)">Remove</button>
            </li>
        </ul>

        <form @submit.prevent="handleAddItem">
            <input type="text" v-model="newItem" placeholder="Enter new item">
            <button type="submit">Add Item</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useItemList } from './useItem'; // Import the composable
import { ref } from 'vue';

// Use the composable function to manage item list state
const { items, itemCount, addItem, removeItem } = useItemList();

// Local reactive state for new item input
const newItem = ref('');

// Function to add a new item to the list
const handleAddItem = () => {
    if (newItem.value.trim() !== '') {
        addItem(newItem.value.trim());
        newItem.value = '';
    }
};
</script>
