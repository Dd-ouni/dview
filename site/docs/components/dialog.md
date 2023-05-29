## Dialog 

#### 基础使用
  
- 痛点：dialog 在开发中相当于小页面，它的地位是不容忽视的。按照基础的使用方法，将通过一个状态和各种状态来控制它。如下：
```html
<template>
  <!-- 开关按钮 -->
  <el-button type="text" @click="dialogVisible = true">display</el-button>

  <!-- dialog -->
  <el-dialog v-model="dialogVisible">
    <el-button @click="dialogVisible = false">hidden</el-button>

    <template #footer>
      <el-button @click="dialogVisible = false">hidden2</el-button>
    </template>
  </el-dialog>

</template>

<script>
export default {
  data() {
    return {
      // 控制状态
      dialogVisible: false,
    }
  }
}
</script>
```
- 开发体验：在不考虑外部控制情况，只需要一个dialog即可。相比较前者代码变得较为直观。
```html
<d-dialog ref="dialogRef">
  <template #switch="{ display }">
    <!-- 开关区域,提供了display -->
    <d-button @click="display">display</d-button>
  </template>

  <template #default="{ hidden }">
    <!-- dialog 的内容区域,也提供了hidden -->
    <d-button @click="hidden">hidden</d-button>
  </template>

  <template #footer="{ hidden }">
    <!-- dialog 的footer区域,用来提供按钮控制,提供了hidden -->
    <d-button @click="hidden">hidden2</d-button>
  </template>
</d-dialog>
```
- 效果：


<d-dialog ref="dialogRef">
  <template #switch="{ display }">
    <d-button type="primary" @click="display">display</d-button>
  </template>

  <template #default="{ hidden }">
    <d-button type="warning" @click="hidden">hidden</d-button>
  </template>

  <template #footer="{ hidden }">
    <d-button type="success" @click="hidden">hidden2</d-button>
  </template>
</d-dialog>

::: details 显示代码

```html
<d-dialog ref="dialogRef">
  <template #switch="{ display }">
    <d-button @click="display">display</d-button>
  </template>

  <template #default="{ hidden }">
    <d-button @click="hidden">hidden</d-button>
  </template>

  <template #footer="{ hidden }">
    <d-button @click="hidden">hidden2</d-button>
  </template>
</d-dialog>
<!-- 外部控制 -->
<d-button @click="dialogRef.display">outside_display</d-button>

<script setup>
  import { ref } from 'vue'
  const dialogRef = ref();
</script>
```

:::