<template>
  <div class="main-layout"> 
    <div class="backoffice">
        <div class="items-area">
            <section class="graph-holder"></section>  
            <section class="graph-holder"></section> 
            <section class="graph-holder"></section> 
        </div>

        <el-table :data="orders" border stripe show-summary style="width: 100%">
        <el-table-column prop="price" label="price" />
        <el-table-column prop="stayIddest.address" sortable label="address" />
        <el-table-column prop="guests.adults" sortable label="guests" />
        <el-table-column prop="guests.pets" sortable label="price1" />
        </el-table>

    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
        orders: null,
    }
  },
  created() {
    this.$store.commit('loadOrders')
    this.orders = this.$store.getters.orders
    console.log(this.orders)
  },
}
</script>