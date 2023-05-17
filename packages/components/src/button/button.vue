<template>
  <u-button>
    <slot></slot>
  </u-button>
</template>
<script setup>
import './style/index.scss';
import uButton from "uView-ui/components/u-button/u-button.vue";
defineOptions({ name: 'd-button' });
</script>
