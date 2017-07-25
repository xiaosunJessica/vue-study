<script>
  export default {
    props: ["order"],
    computed: {
      status() {
        const order = this.order
        if (order) {
          switch(order.status) {
            case 'unpaid': 
              return {
                label: '代付款',
                type: 'gray'
              }
            case 'paid':
              return {
                label: '代发货',
                type: 'danger'
              }
            case 'shipping':
              return {
                label: "已发货",
                type: "primary"
              }
            case 'completed':
              if (this.order.settledAt) {
                return {
                  label: '已结算',
                  type: 'success'
                }
              } else {
                return {
                  label: '已完成',
                  type: 'success',
                  tooltip: '该订单预计于${moment(order.completedAt).add(7, "days").format("YYYY-MM-DD")}结算'
                }
              }
            case 'closed':
              return {
                label: '已关闭'
              }
            default:
              return {}
          }
        }
      }
    }
  }
</script>

<template>
  <el-tooltip effect="dark" :content="status.tootip" placement="top-start" :disabled="status.tooltip==undefined">
    <el-tag :type="status.type" :close-transition="true">
      {{status.label}}
    </el-tag>
  </el-tooltip>
</template>
