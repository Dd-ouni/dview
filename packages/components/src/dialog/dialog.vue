<template>
  <slot name="switch" :display="display"></slot>
  <el-dialog v-bind="$attrs" v-model="dialogVisible">
    <slot :hidden="hidden"></slot>
    <template #footer>
      <slot name="footer" :hidden="hidden">
        <span class="dialog-footer">
          <el-button @click="hidden">取 消</el-button>
          <el-button type="primary" @click="hidden">确 定</el-button>
        </span>
      </slot>
    </template>
  </el-dialog>
</template>
<script setup>
// import './style/index.scss'
import { ElDialog, ElButton } from 'element-plus'
import { ref, defineExpose } from 'vue'

const dialogVisible = ref(false)
const display = () => {
  dialogVisible.value = true
}
const hidden = () => {
  dialogVisible.value = false
}
defineOptions({ name: 'd-dialog' });
defineExpose({
  display,
  hidden
})
</script>
