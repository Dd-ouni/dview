## Button 

#### 基础使用
  
- 痛点：当我使用按钮的时候，需要实现节流，还需要使用状态来控制按钮使得它有一个更好用户体验。
- 用户体验：等待效果体验
- 减少逻辑分散：实际业务开发中，要实现 disabled 和 loading，至少需要一个状态来控制，这意味着逻辑分散，如果有N个按钮的话
- 开发体验：提供了 主/被动 解锁节流， done 和 throttleTime

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