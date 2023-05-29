<template>
  <el-button v-bind="$attrs" @click="handleClick" :disabled="disabled" :loading="disabled">
    <slot></slot>
  </el-button>
</template>
<script setup>
import './style/index.scss'
import { ElButton } from 'element-plus'
import { useAttrs, ref } from 'vue'
const props = defineProps({ 'throttle-time': { type: Number, default: 1000 } });
let disabled = ref(false)
let timer = null;
const done = () => {
  disabled.value = false
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}
const attrs = useAttrs()
const handleClick = (ev) => {
  if (typeof attrs.onDclick === 'function') {
    disabled.value = true;
    timer = setTimeout(done, props.throttleTime)
    attrs.onDclick({
      ev,
      done
    })
  }
}

defineOptions({ name: 'd-button' });
</script>
