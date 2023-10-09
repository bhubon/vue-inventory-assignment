<script setup>
import { ref, onBeforeMount, reactive } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

import MasterLayout from './MasterLayout.vue';

const route = useRoute()
const id = route.params.id

const loading = ref(true);
const product = ref({});


onBeforeMount(async () => {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
        .then(res => {
            loading.value = false;
            return res.json();
        })
    product.value = res;
});

</script>

<template>
    <MasterLayout>
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Product Details</h1>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card shadow mb-4">
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        Product Name
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ product.title }}
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        Description
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ product.description }}
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row">
                                        Price
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ product.price }}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Current Stock
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ product.stock }}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Photo
                                    </th>
                                    <td class="px-6 py-4">
                                        <img :src="product.thumbnail" alt="">
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <div v-show="loading.value">
                            <img src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
                                style="width: 100px; height: 80px;" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MasterLayout>
</template>

<style scoped></style>