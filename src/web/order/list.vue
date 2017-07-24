<script>
  // import { getOrders } from './action.js';
  import { mapState, mapMutations } from 'vuex';
  // import { actionTypes as orderActions } from './store.js'
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
        orders: {}
      }
    },

    async mounted() {
      await this.fetchData();
      console.warn('mounted----orderlist')
    },

    methods: {
      ...mapMutations({
        getOrders: 'GET_ORDER'
      }),

      changeRoute() {
        this.$router.push({
          name: 'OrderList',
          query: this.query
        })
      },

      onTabClick(tab) {
        this.changeRoute()
      },

      async onSubmit() {
        this.query.page = 1;
        this.changeRoute()
        console.warn(this.order)
        await this.$store.dispatch('GET_ORDER')
      },

      async fetchData() {
        let { status = 'all', page = 1, orderId, cellNumber, createdAtFrom, createdAtTo } = this.$route.query;
        this.query = { status, page, orderId, cellNumber, createdAtFrom, createdAtTo };
        // await this.$store.dispatch()
      }
    },

    computed: {
      ...mapState({
        order: state => {console.log(state.order, 'state--', state.order.page); return state.order}
      })
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
      <el-table :data="orders.list">
        <el-table-column width="90px" label="状态" prop="status"></el-table-column>
        <el-table-column width="200px" label="订单号"></el-table-column>
        <el-table-column width="100px" label="客户"></el-table-column>
        <el-table-column width="130px" label="手机号" prop="cellNumber"></el-table-column>
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