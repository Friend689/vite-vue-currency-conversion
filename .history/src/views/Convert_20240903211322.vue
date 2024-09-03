<script setup>
import { ref, watch } from "vue";

const props = defineProps([
  "selected",
  "currencies",
  "rates"
]);

watch(() => props.rates, (first, second) => {
  collectCurrencies();
  convert();
});

const arrCurrencies = ref({});
const fromCurrency = ref('rub');
const toCurrency = ref('usd');
const fromValue = ref(0);
const toValue = ref(0);
const error = ref('');


const collectCurrencies = () => {
  const uniqueCurrencies = new Set();
  for (const key in props.rates) {
    const [from, to] = key.split('-');
    uniqueCurrencies.add(from);
    uniqueCurrencies.add(to);
  }
  const res = Array.from(uniqueCurrencies);
  return res;
}

const forTest = () => {
  let arrRa = {}
  for (const pair in props.rates) {
    const [from, to] = pair.split('-')
    if (!arrRa[from]) {
      arrRa[from] = {}
    }
    arrRa[from][to] = props.rates[pair]
  }
  // Добавляем RUB в список валют
  if (!arrRa['RUB']) {
    arrRa['RUB'] = { RUB: 1 }
  }
  return arrRa;
}

const convert = (inputType) => {
  if (isNaN(fromValue.value) && isNaN(toValue.value)) {
    error.value = "Пожалуйста, введите числовое значение"
    return
  }
  const fromRate = props.rates[fromCurrency.value + "-" + toCurrency.value];
  const toRate = props.rates[toCurrency.value + "-" + fromCurrency.value];
  if (fromValue.value !== toValue.value) {
    if (inputType === 'from') {
      if (fromCurrency.value === "rub") {
        toValue.value = fromValue.value * toRate
      } else if (toCurrency.value === "rub") {
        toValue.value = fromValue.value / fromRate
      } else {
        toValue.value = fromValue.value * fromRate / toRate
      }
    } else if (inputType === 'to') {
      if (fromCurrency.value === "rub") {
        fromValue.value = toValue.value / toRate
      } else if (toCurrency.value === "rub") {
        fromValue.value = toValue.value * fromRate
      } else {
        fromValue.value = toValue.value * toRate / fromRate
      }
    }
  }

  if (fromValue.value) {
    fromValue.value = Number(fromValue.value.toFixed(2))
  }
  if (toValue.value) {
    toValue.value = Number(toValue.value.toFixed(2))
  }
  error.value = ""
}
</script>

<template>
  <div class="page-convert">
    <pre>
      {{ rates }}
    </pre>
    <form>
      <div>
        <select v-model="fromCurrency">
          <option v-for="currency in collectCurrencies()" :key="currency" :value="currency">{{ currency.toUpperCase() }}
          </option>
        </select>
        <input type="number" v-model.number="fromValue" @input="convert('from')" />
      </div>
      <div>
        <select v-model="toCurrency">
          <option v-for="currency in collectCurrencies()" :key="currency" :value="currency">{{ currency.toUpperCase() }}
          </option>
        </select>
        <input type="number" v-model.number="toValue" @input="convert('to')" />
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