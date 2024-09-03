<script setup>
const props = defineProps([
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
h1 {
  font-size: 1.5em;
}
.page-main {
  padding: 10px;
  width: 100%;
  height: 100%;
  align-content: center;
}
ul {
  font-size: 1.3em;
}
ul li {
  margin: 5px;
}
</style>