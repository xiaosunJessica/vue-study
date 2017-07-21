<script>
  import { getOrders } from '../../action/order';
  export default {
    data() {
      return {
        query: {
          tabStatus: 'all',
          page: 1,
          orderId: undefined,
          cellNumber: undefined,
          createdAtFrom: undefined,
          createdAtTo: undefined
        },
        orders: null
      }
    },

    async mounted() {
      await this.fetchData();
      console.warn('mounted----orderlist')
    },

    methods: {
      changeRoute() {
        this.$router.push({
          name: 'OrderList',
          query: this.query
        })
      },

      onTabClick(tab) {
        this.changeRoute()
      },

      onSubmit() {
        this.query.page = 1;
        this.changeRoute()
      },

      async fetchData() {
        console.warn(this.$route.query)
        let { status = 'all', page = 1, orderId, cellNumber, createdAtFrom, createdAtTo } = this.$route.query;
        this.query = { status, page, orderId, cellNumber, createdAtFrom, createdAtTo };
        this.orders = await getOrders(this.query)
        console.warn(this.orders, '===========')
      }
    }
  }
</script>

<template>
  <div class="order-list">
    <h3>全部订单</h3>
    <el-tabs v-model="query.tabStatus" @tab-click="onTabClick">
      <el-tab-pane label="全部" name="all"></el-tab-pane>
      <el-tab-pane label="代付款" name="unpaid"></el-tab-pane>
      <el-tab-pane label="待发货" name="paid"></el-tab-pane>
      <el-tab-pane label="已发货" name="shipping"></el-tab-pane>
      <el-tab-pane label="已发货" name="completed"></el-tab-pane>
      <el-tab-pane label="已发货" name="closed"></el-tab-pane>
    </el-tabs>
    <el-form :inline="true">
      <el-form-item label="订单号">
        <el-input v-model="query.orderId" placeholder="请输入订单号"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="query.cellNumber"></el-input>
      </el-form-item>
      <el-form-item label="开始时间">
        <el-date-picker v-model="query.createdAtFrom" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间">
        <el-date-picker v-model="query.createdAtTo" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <div v-if="orders">
      <el-table>
        <el-table-column width="90px" label="状态"></el-table-column>
        <el-table-column width="200px" label="订单号"></el-table-column>
        <el-table-column width="100px" label="客户"></el-table-column>
        <el-table-column width="130px" label="手机号"></el-table-column>
        <el-table-column label="商品"></el-table-column>
        <el-table-column width="100px" label="订单金额"></el-table-column>
        <el-table-column width="180px" label="订单时间"></el-table-column>
        <el-table-column width="100px" label="操作"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>