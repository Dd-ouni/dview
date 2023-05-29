## Table 

#### 基础使用
  
- 痛点：表格作为输出数据的主要载体，element-plus 封装的颗粒度较为细致、灵活，但是对于业务开发来说并不是特别方便， 需要连接表格、分页组件。columns嵌套在元素内，并没有特别的MVC分离(仁者见仁)。
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
- 开发体验：只需要关注data和columns。
::: details 显示开发体验代码
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
- 扩展：可以拓展：自定义列头、无分页、本地分页、根据业务需求
- 效果：
<d-table :column="column" :data="tableData"></d-table>

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

