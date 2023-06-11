## Table 

#### 基础使用
  
- 痛点：
  1. table 和 pagination 分离，这样子很灵活，但是对业务开发并不便捷、友好。
  2. column 作为标签形式，并不符合 MVC 模式，View 和 Model 分离。
::: details 显示痛点代码
```html
<template>
  <!-- table -->
  <el-table :data="tableData">
    <!-- table columns -->
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
  </el-table>

  <!-- pagination -->
  <el-pagination
    :pager-count="tableData.length"
    layout="prev, pager, next"
  >
  </el-pagination>
</template>

<script>
  export default {
    data() {
      return {
        // table data
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎'
          }
        ]
      }
    },
  }
</script>

```

:::
- 解决：
  1. 组合 table 与 pagination，让业务开发更专注业务开发
  2. 参数化 column，符合 MVC 模式


::: details 显示解决代码
```html
<template>
  <d-table :column="columns" :data="tableData"></d-table>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, h } from 'vue'
const { appContext } = getCurrentInstance()
const DButton = appContext.components['d-button']

const columns = [{
    prop: 'date',
    label: '日期'
  },{
    label: '操作',
    slots: {
      default: ({ row }) => h(DButton, {}, `删除 ${row.name}`)
    }
}]

const tableData = reactive([
  {
    date: '2016-05-02',
    name: '王小虎'
  }
])
</script>



```
:::
- 扩展：
  1. 自定义列头
  2. 分页模式
- 效果：
<div id="diy">
  <d-table :column="column" :data="tableData"></d-table>
</div>

<script setup>
import { ref, reactive, h, getCurrentInstance } from 'vue'
const { appContext } = getCurrentInstance()
const DButton = appContext.components['d-button']
const ddialog = ref();
const column = [
  {
    prop: 'date',
    label: '日期'
  },
  {
    prop: 'name',
    label: '姓名'
  },
  {
    prop: 'address',
    label: '地址'
  },
  {
    label: '操作',
    slots: {
      default: ({ row }) => h(DButton, {}, `删除 ${row.name}`)
    }

  }
]
const tableData = reactive([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
  },
])
</script>

<style>
#diy .el-table__header,
#diy .el-table__body{
  margin: 0;
  table-layout: fixed;
  border-collapse: initial;
}
#diy th, #diy td, #diy tr{
  border: none;
}
#diy tr{
  background-color: white;
}
#diy .el-table td.el-table__cell, #diy .el-table th.el-table__cell.is-leaf{
    border-bottom: 1px solid #ebeef5;
}
#diy .el-pager{
  padding-left:0;
  margin: 0;
}
</style>

