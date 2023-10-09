<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import 'vue3-easy-data-table/dist/style.css';
import Vue3EasyDataTable from 'vue3-easy-data-table';

import MasterLayout from './MasterLayout.vue';


const headers = [
    { text: "Title", value: "title", sortable: true },
    { text: "Price", value: "price", sortable: true },
    { text: "Rating", value: "rating", sortable: true },
    { text: "Quantity", value: "stock", sortable: true },
    { text: "Action", value: "operations" },
];

const products = ref([]);
const rowsPerPage = ref(10);
const loading = ref(true)

onBeforeMount(() => {
    fetch('https://dummyjson.com/products?limit=50')
        .then(res => res.json())
        .then((response) => {
            if (response) {
                products.value = response.products
                loading.value = false;
            }
        })
});



</script>

<template>
    <MasterLayout>
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Products</h1>
        </div>
        <Vue3EasyDataTable :rows-per-page=rowsPerPage show-index alternating border-cell buttons-pagination
            :loading="loading" :headers="headers" :items="products">
            <template #loading>
                <img src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
                    style="width: 100px; height: 80px;" />
            </template>
            <template #item-operations="items">
                <RouterLink :to="`/product/${items.id}`" title="Details">
                    <button class="btn btn-primary my-2">View Details</button>
                </RouterLink>
            </template>
        </Vue3EasyDataTable>
    </MasterLayout>
</template>

<style scoped></style>