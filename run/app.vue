<template>
  <div>启动测试</div>
  <d-button type="success" round @click="successHandle">我才是大佬 1212</d-button>
  <d-icon></d-icon>
</template>

<script setup>

const successHandle = () => {
  console.log("successHandle")
}
</script>