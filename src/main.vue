<script lang="js">
</script>

<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="4">
        <div class="logo">
          
          <span>壹二商品订</span>
        </div>
      </el-col>
      <el-col :span="20">
        <el-dropdown>
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
  </div>
</template>

<style lang="scss" scoped>
</style>