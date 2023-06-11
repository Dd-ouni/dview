## Button 

#### 基础使用
  
- 痛点：
  1. 没有自带限制点击频率
  2. 实现具备交互体验的节流时，需要多一个状态进行控制，当页面有N个按钮的情况时候，代码量、可维护性变得非常差
- 解决：
  1. 通过 disabled + loading 实现交互体验节流，减少代码量和提高可维护性
  2. 提供 超时/回调 方式解锁节流
- 效果：

<d-button type="success" round @dclick="handleClick" :throttleTime="1000">click me</d-button>

<script setup>
const handleClick = ({ ev, done }) => {
    console.log('handleClick', ev);
}
</script>

::: details 显示代码

```html
<d-button 
    type="success" 
    round 
    @dclick="handleClick" 
    :throttleTime="1000">
    click me
</d-button>

<script setup>
const handleClick = ({ ev, done }) => {
    console.log('handleClick', ev);
}
</script>
```

:::