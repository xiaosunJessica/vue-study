<script lang="js">
  export default {
    mounted() {
      this.$refs['container'].$el.style['min-height'] = (window.innerHeight - 60) + 'px';
    }
  }
</script>

<template>
  <div class="wrapper">
    <el-row class="wrapper_header" type="flex" justify="space-between">
      <el-col :span="4">
        <div class="logo">
          <span>壹二商品订单中心</span>
        </div>
      </el-col>
      <el-col :span="20">
        <el-dropdown class="select-user right">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>切换商户</el-dropdown-item>
            <el-dropdown-item>切换到全局</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-row class="wrapper_body">
      <el-col :span="4" class="sidebar">
        <el-menu class="menu">
          <el-menu-item-group title="订单管理">
            <el-menu-item index="OrderList">
              <router-link class="menu_link" :to="{ name: 'OrderList' }">全部订单</router-link>
            </el-menu-item>
            <el-menu-item index="ServiceTicketList">
              <router-link class="menu_link" :to="{ name: 'ServiceTicketList' }">售后工单</router-link>
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="商品">
            <el-menu-item index="2-1">
              <router-link class="menu_link" :to="{ name: 'OrderList' }">全部商品</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link class="menu_link" :to="{ name: 'OrderList' }">品牌管理</router-link>
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="商户">
            <el-menu-item index="3-1">
              <router-link class="menu_link" :to="{ name: 'OrderList' }">商户管理</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-col>
      <el-col :span="20" class="container" ref="container">
        <router-view class="container_content"></router-view>
        <div class="container_footer">
          <mark>Powered by</mark>壹二 @2016-2017 All rights reserved.
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    min-height: 100vh;
    .wrapper_header {
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #efefef;
      .logo {
        background: url(./logo.png) no-repeat left center;
        padding-left: 50px;
        font-size: 20px;
      }
      .right {
        float: right;
        &::after {
          display: block;
          content: '';
          clear: both;
        }
      }
    }
    .wrapper_body {
      background: #222d32;
      height: 100%;
      .sidebar {
        .menu {
          background: #222d32;
          color: #FFFFFF;
          .menu_link {
            color: #FFFFFF;
            text-decoration: none;
            display: block;
          }
        }
      }
      .container {
        background: #FFFFFF;
        position: relative;
        .container_content {
          padding: 20px 60px;
        }
        .container_footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 60px;
          border-top: 1px solid #CCCCCC;
          background: #F5F7FA;
        }
      }
    }
  }
</style>