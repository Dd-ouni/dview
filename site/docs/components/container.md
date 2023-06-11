## Container 

#### 基础使用
  
- 痛点：
  1. 不同的布局的嵌套方式不一致
  2. 改版成本大，O(n)
::: details 显示痛点代码
```html
<el-container>
  <el-header>wheader</el-header>
  <el-container>
    <el-aside>aside</el-aside>
    <el-container>
      <el-main>main</el-main>
      <el-footer>footer</el-footer>
    </el-container>
  </el-container>
</el-container>
```

:::

- 解决：
  1. 无嵌套布局，利用插槽实现
  2. 封装优化改版成本，O(n) -> O(k)

::: details 显示解决代码
```html
<d-container>
  <template #wheader>wheader</template>
  <template #aside>aside</template>
  main
  <template #footer>footer</template>
</d-container>
```

:::

- 扩展：
  1. 可伸缩 aside，解决侧边栏可视大小小问题
  2. 提示用 alert，提供悬浮信息提示
  3. 动态布局计算，利用 具名作用域插槽 提供窗口大小变化后，具体容器的大小
  4. 装卸容器，利用 具名作用域插槽 提供回调式动态控制具体容器的显示隐藏
- 效果：

<d-container>
  <template #wheader>wheader</template>
  <template #aside>aside</template>
  <template #header>header</template>
  main
  <template #footer>footer</template>
  <template #wfooter>wfooter</template>
</d-container>

<style>
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #000000;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #000000;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #000000;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

::: details 显示代码

```html
<d-container>
  <template #wheader>wheader</template>
  <template #aside>aside</template>
  <template #header>header</template>
  main
  <template #footer>footer</template>
  <template #wfooter>wfooter</template>
</d-container>
```

:::