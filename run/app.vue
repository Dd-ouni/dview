<template>
  <div>启动测试</div>

  <d-button type="success" round @dclick="handleClick">测试</d-button>

  <d-container>
    <template #wheader>wheader</template>
    <template #aside>aside</template>
    <template #header>header</template>
    main
    <template #wfooter>wfooter</template>
  </d-container>

  <d-dialog ref="ddialog">
    <template #switch="{ display }">
      <d-button type="success" round @click="display">display</d-button>
    </template>
    <template #default="{ hidden }">
      <d-button type="warning" round @click="hidden">hidden</d-button>
    </template>
    <template #footer="{ hidden }">
      <d-button type="primary" round @click="hidden">hidden2</d-button>
    </template>
  </d-dialog>

  <d-button type="success" round @click="() => ddialog.display()">display2</d-button>

  <d-table :column="column" :data="tableData"></d-table>
</template>

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
const handleClick = ({ ev, done }) => {
  console.log('handleClick', ev, done);
  // setTimeout(done, 1000)
}
</script>