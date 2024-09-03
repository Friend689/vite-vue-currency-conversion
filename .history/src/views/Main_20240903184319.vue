<script setup>
import { ref, onMounted } from "vue";

const arrCurrency = ref([]);

const getCurrency = () => {
  fetch("https://status.neuralgeneration.com/api/currency")
    .then(response => response.json())
    .then(data => arrCurrency.value = data);
}

onMounted(() => {
  getCurrency();
})
</script>

<template>
  <div>
    
  </div>
</template>

<style></style>