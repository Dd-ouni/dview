
<script lang='jsx'>
// import './style/index.scss'
import { defineComponent } from 'vue'
import { ElContainer, ElHeader, ElAside, ElMain, ElFooter } from 'element-plus'

const container_render = (slots) => {
  if (slots.aside) {
    if (slots.header || slots.footer) {
      return <ElContainer>
        <el-aside>{slots.aside()}</el-aside>
        <ElContainer>
          {slots.header ? <ElHeader>{slots.header()}</ElHeader> : null}
          <el-main>{slots.default()}</el-main>
          {slots.footer ? <ElFooter>{slots.footer()}</ElFooter> : null}
        </ElContainer>
      </ElContainer>
    } else {
      return <ElContainer><el-aside>{slots.aside()}</el-aside><el-main>{slots.default()}</el-main></ElContainer>
    }
  } else {
    return <ElContainer>
      {slots.header ? <ElHeader>{slots.header()}</ElHeader> : null}
      <el-main>{slots.default()}</el-main>
      {slots.footer ? <ElFooter>{slots.footer()}</ElFooter> : null}
    </ElContainer>
  }
}

export default defineComponent({
  components: { ElContainer, ElHeader, ElAside, ElMain, ElFooter },
  name: 'd-container',
  setup(props, { slots }) {
    if (slots.wheader || slots.wfooter) {
      return () => (<ElContainer>
        {slots.wheader ? <ElHeader>{slots.wheader()}</ElHeader> : null}
        {container_render(slots)}
        {slots.wfooter ? <ElFooter>{slots.wfooter()}</ElFooter> : null}
      </ElContainer>)
    }
    return () => (container_render(slots))
  }
})
</script>
