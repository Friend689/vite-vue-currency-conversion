<script setup>
import { ref } from "vue";

const arrCurrency = ref([]);

const getCurrency = () => {
  fetch('https://testapi.jasonwatmore.com/products/1')
    .then(response => response.json())
    .then(data => arrCurrency.value = data);
}
</script>

<template>
  <div>
    
  </div>
</template>

<style></style>