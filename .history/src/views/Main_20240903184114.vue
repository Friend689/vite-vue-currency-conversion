<script setup>

const 

const getCurrency = () => {
  fetch('https://testapi.jasonwatmore.com/products/1')
    .then(response => response.json())
    .then(data => product.value = data);
}
</script>

<template>
  <div>
    
  </div>
</template>

<style></style>