<script>
  import getOrdersAPI from '../../api/order.js';
  import { mapState, mapMutations } from 'vuex';
  import OrderStatus from './components/order-status.vue';
  // import { actionTypes as orderActions } from './store.js'
  export default {
    components: {
      OrderStatus
    },

    data() {
      return {
        query: {
          tabStatus: 'all',
          page: 1,
          orderId: undefined,
          cellNumber: undefined,
          createdAtFrom: undefined,
          createdAtTo: undefined
        }
      }
    },

    computed: {
      ...mapState({
        orders: state => state.order.order
      })
    },

    async mounted() {
      await this.fetchData();
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
        await this.$store.dispatch('GET_ORDER')
      },

      async fetchData() {
        let { status = 'all', page = 1, orderId, cellNumber, createdAtFrom, createdAtTo } = this.$route.query;
        this.query = { status, page, orderId, cellNumber, createdAtFrom, createdAtTo };
        // this.orders = getOrdersAPI();
      }
    },
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
        <el-table-column width="90px" label="状态">
          <template scope="scope">
            <order-status :order="scope.row"></order-status>
          </template>
        </el-table-column>
        <el-table-column width="200px" label="订单号">
          <template scope="scope">
            <router-link :to="{name: 'OrderDetail', params: {id: scope.row.id}}">
              {{scope.row.id}}
            </router-link>
          </template>
        </el-table-column>
        <el-table-column width="100px" label="客户" prop="shippingAddress.recipient"></el-table-column>
        <el-table-column width="130px" label="手机号" prop="cellNumber"></el-table-column>
        <el-table-column label="商品" prop="brief"></el-table-column>
        <el-table-column width="100px" label="订单金额" prop="totalPrice"></el-table-column>
        <el-table-column width="200px" label="订单时间">
          <template scope="scope">{{scope.row.createdAt | datetime}}</template>
        </el-table-column>
        <el-table-column width="100px" label="操作">
          <template scope="scope">
            <router-link :to="{name: 'OrderDetail', params: {id: scope.row.id}}">
              查看
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: #005680;
    transition: .1s;
  }
</style>