## Container 

#### 基础使用
  
- 痛点：在开发管理系统时，每个页面都会使用到 [Container 布局容器](https://doc-archive.element-plus.org/#/zh-CN/component/container#container-bu-ju-rong-qi) 提供的常规布局。必须根据设计稿组合各种布局，不同组合不同嵌套，让代码变得很不直观。
- 开发体验：只需要使用对应的插槽就会得到对应的常规布局。
::: details 显示结构变化代码
```html
<d-container>
  <template #wheader>wheader</template>
  <template #aside>aside</template>
  main
  <template #footer>footer</template>
</d-container>

<!-- 等于 -->

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

- 扩展：除此之外还可以根据业务拓展：可伸缩 aside、navbar、alert
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