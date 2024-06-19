import {computed, ref} from "vue";

//if you declare a ref outside of the function body in a module-level
// scope (but within the same file), it behaves like a global ref within that file.
// const items = ref<string[]>([]);

export const useItemList = () => {
    // Define reactive state for list of items
    const items = ref<string[]>([]);

    // Computed property to count items
    const itemCount = computed(() => items.value.length);

    // Method to add an item to the list
    const addItem = (item: string) => {
        items.value.push(item);
    };

    // Method to remove an item from the list by index
    const removeItem = (index: number) => {
        items.value.splice(index, 1);
    };

    // Return reactive state and methods
    return {
        items,
        itemCount,
        addItem,
        removeItem
    };
};

//------|| ! usage is in sibling file !