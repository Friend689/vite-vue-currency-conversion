<script setup>
const props = defineProps([
  "rates"
]);

</script>

<template>
  <div class="page-main">
    <h1>Курсы валют</h1>
    <pre>
      {{ rates }}
    </pre>
    <ul>
      <li v-for="(rate, currency) in rates" :key="currency">{{ currency }}: {{ rate }}</li>
    </ul>
  </div>
</template>

<style scoped>
.page-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100%;
  align-content: center;
}

h1 {
  font-size: 1.5em;
}
ul {
  font-size: 1.3em;
}
ul li {
  margin: 5px;
}
</style>