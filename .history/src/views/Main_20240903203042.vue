<script setup>
import { ref, onMounted } from "vue";

const props = defineProps([
  "rates"
]);

const arrRates = ref({});

const collectRates = () => {
  arrRates.value = {};
  for (const pair in props.rates) {
        const [from, to] = pair.split('-');
        if (from === selectedCurrency.value) {
          rates.value[to] = data[pair].toFixed(2);
        } else if (to === selectedCurrency.value) {
          rates.value[from] = (1 / data[pair]).toFixed(2);
        }
      }
      // Добавляем RUB в список валют
      if (!rates.value['rub']) {
        rates.value['rub'] = 1
      }

}

</script>

<template>
  <div class="page-main">
    <h1>Курсы валют</h1>
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