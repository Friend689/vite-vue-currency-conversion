<script setup>
import { ref } from "vue";

const props = defineProps([
  "currencies",
  "rates"
]);

const fromCurrency = ref('RUB');
const toCurrency = ref('USD');
const fromValue = ref(0);
const toValue = ref(0);
const error = ref('');

const convert = () => {
  if (isNaN(fromValue.value) || isNaN(toValue.value)) {
    error.value = "Пожалуйста, введите числовое значение";
    return;
  }
  const fromRate = props.rates[fromCurrency.value];
  const toRate = props.rates[toCurrency.value];
  console.log(fromRate, toRate);
  if (fromValue) {
    toValue.value = (fromValue.value / fromRate) * toRate;
  } else {
    fromValue.value = (toValue.value / toRate) * fromRate;
  }
  toValue.value = Number(toValue.value.toFixed(2));
  fromValue.value = Number(fromValue.value.toFixed(2));
  error.value = "";
}
</script>

<template>
  <div class="page-convert">
    <form>
      <div>
        <select v-model="fromCurrency">
          <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
        </select>
        <input type="number" v-model.number="fromValue" @input="convert" />
      </div>
      <div>
        <select v-model="toCurrency">
          <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
        </select>
        <input type="number" v-model.number="toValue" @input="convert" />
      </div>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<style scoped>
.page-convert {
  padding-top: 40px;
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form div {
  margin: 7px;
}
</style>