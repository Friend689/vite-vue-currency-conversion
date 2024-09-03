<script setup>


</script>

<template>
  <div>
    <form>
      <div>
        <select v-model="fromCurrency">
          <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
        </select>
        <input type="number" v-model="fromValue" @input="convert" />
      </div>
      <div>
        <select v-model="toCurrency">
          <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
        </select>
        <input type="number" v-model="toValue" @input="convert" />
      </div>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<style></style>