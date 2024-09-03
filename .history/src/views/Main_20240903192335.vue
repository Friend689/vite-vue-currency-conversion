<script setup>
// import { ref, onMounted } from "vue";

// const arrCurrency = ref([]);

// const getCurrency = () => {
//   fetch("https://status.neuralgeneration.com/api/currency")
//     .then(response => response.json())
//     .then(data => arrCurrency.value = data);
// }

// onMounted(() => {
//   getCurrency();
// })

const props = defineProps([
  "currencies",
  "rates"
]);

</script>

<template>
  <div class="page-main">
    <h1>Курсы валют</h1>
    <ul>
      <li v-for="(rate, currency) in rates" :key="currency">{{ currency }}: {{ rate }}</li>
    </ul>
  </div>
</template>

<style>
.page-main {
  padding: 10px;
  align-content: center;
}
ul li {
  margin: 5px;
}
</style>