<script setup>
const { addProductCacheTag } = useCache()
addProductCacheTag('12345')
</script>

<template>
  <div>
    Nuxt module playground!
    <HelloWorld />
  </div>
</template>
