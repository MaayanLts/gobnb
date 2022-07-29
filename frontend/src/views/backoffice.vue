<template>
  <div class="main-layout"> 
    <div class="backoffice">
        <div class="items-area">
            <section class="graph-holder"></section>  
            <section class="graph-holder"></section> 
            <section class="graph-holder"></section> 
        </div>

        <!-- <el-table :data="orders" border stripe show-summary style="width: 100%">
        <el-table-column prop="date" label="Date" width="150" />
        <el-table-column prop="price" label="price" width="100" />

    <el-table-column width="200"
      prop="orderStatus"
      label="Status"
      :filters="[
        { text: 'approved', value: 'approved' },
        { text: 'aending', value: 'pending' },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
       <template #default="scope">
        <el-tag
          :type="scope.row.tag === 'pending' ? 'pending' : 'approved'"
          disable-transitions
          >{{ scope.row.tag }}</el-tag
        > 
      </template>
    </el-table-column>


        <el-table-column label="Guests Info">
            <el-table-column prop="guests.adults" label="Adults" />
            <el-table-column prop="guests.children" label="Children" />
            <el-table-column prop="guests.infants" label="infants" />
            <el-table-column prop="guests.pets" label="Pets" />
        </el-table-column>
        
    </el-table> -->



<el-button @click="resetDateFilter">reset date filter</el-button>
  <el-button @click="clearFilter">reset all filters</el-button>
  <el-table 
    ref="filterTable"
    :data="orders"
    style="width: 100%">
    <el-table-column prop="dates" label="Date" width="150" sortable :formatter="formatter"></el-table-column>
    <el-table-column prop="price" label="Price" width="100" :formatter="formatter"></el-table-column>
    <el-table-column prop="destination.address" label="Address" width="300"></el-table-column>
    <el-table-column label="Guests Info">
        <el-table-column prop="guests.adults" label="Adults" />
        <el-table-column prop="guests.children" label="Children" />
        <el-table-column prop="guests.infants" label="infants" />
        <el-table-column prop="guests.pets" label="Pets" />
    </el-table-column>
    <el-table-column prop="orderStatus" label="Status   " width="106"
      :filters="[{ text: 'Approved', value: 'approved' }, { text: 'Pending', value: 'pending' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">

      <template v-slot="scope">
        <el-tag
          :type="scope.row.orderStatus === 'approved' ? 'success' : 'warning'"
          disable-transitions>{{scope.row.orderStatus}}</el-tag>
      </template>

    </el-table-column>

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
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        let formatedData = ''
        //if(lable === 'Date')
          //  formated
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
</script>

<!-- <script>
export default {
  
//   interface Order{
//     _id: '',
//     stayId:'',
//   }

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
</script> -->

