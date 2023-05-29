
<script lang="jsx">
// import './style/index.scss'
import { ElTable, ElPagination, ElTableColumn } from 'element-plus'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { ElTable, ElPagination, ElTableColumn },
  name: 'd-table',
  props: {
    column: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { attrs }) {
    return () => (<>
      <ElTable {...attrs}>
        {props.column.map(item => <ElTableColumn {...item}>
          {{
            default: item.slots?.default
              ? ({ row }) => item.slots.default({ row })
              : null
          }}
        </ElTableColumn>)}
      </ElTable>
      <ElPagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        {...attrs}
        total={attrs.data?.length} ></ElPagination>
    </>)
  }
})

</script>
