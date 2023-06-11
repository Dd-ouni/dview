## Dialog 

#### 基础使用
  
- 痛点：
  1. 状态控制分离，需要找到按钮，在找到控制方法，通过控制状态去找 dialog
  2. 代码逻辑散乱
  3. 改版成本大，O(n)
::: details 显示痛点代码
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

:::

- 解决
  1. 统一状态控制，解决代码逻辑散乱。利用 组件引用/具名作用域插槽，利用内部提供的状态和方法来控制
  2. 封装优化改版成本，O(n) -> O(k)
::: details 显示痛点代码
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

:::

- 扩展：
  1. 可拖拽粘性 dialog，解决 dialog 和 页面 联动
  2. 可装卸 dialog，利用 具名作用域插槽 提供回调式动态控制 dialog 布局的部件
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