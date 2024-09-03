<script setup>
import { ref, onMounted } from "vue";

const currencies = ref(['USD', 'EUR', 'RUB']);

const emit = defineEmits(["change-currency"])

changeCurrency = () => {
      emit("change-currency", selectedCurrency.value)
    }

</script>

<template>
  <header>
    <router-link to="/">Главная</router-link>
    <router-link to="/convert">Конвертация</router-link>
    <select v-model="selectedCurrency" @change="changeCurrency">
        <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
      </select>
  </header>
</template>

<style scoped>
header {
  height: 50px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
header a {
  margin: 0 10px;
}
</style>