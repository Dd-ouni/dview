<template>
  <el-button v-bind="$attrs">
    <slot></slot>
  </el-button>
</template>
<script setup>
import './style/index.scss'
import { ElButton } from 'element-plus'
defineOptions({ name: 'd-button' });
</script>
