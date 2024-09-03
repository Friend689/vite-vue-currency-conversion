<script setup></script>

<template>
  <header>
    <router-link to="/">Главная</router-link>
    <router-link to="/convert">Конвертация</router-link>
    <select name="currency" id="currency">
      <option value="usd">USD</option>
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
  margin: 0 5px;
}
</style>