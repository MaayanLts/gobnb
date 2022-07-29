<template>
  <div class="main-layout"> 
    <div class="backoffice">
        <div class="items-area">
            <section class="graph-holder"></section>  
            <section class="graph-holder"></section> 
            <section class="graph-holder"></section> 
        </div>

        <el-table 
            ref="filterTable"
            :data="orders"
            style="width: 100%">
            <el-table-column type="index" width="50">
            </el-table-column>
            <el-table-column label="Order dates" >
                <el-table-column prop="dates" label="From" width="130" sortable :formatter="formatter"></el-table-column>
                <el-table-column prop="dates" label="To" width="130" sortable :formatter="formatter"></el-table-column>
                <el-table-column prop="dates" label="Days" width="70" :formatter="formatter"></el-table-column>
            </el-table-column> 
            <el-table-column prop="price" label="Price" width="70" ></el-table-column>
            <el-table-column prop="destination.address" label="Address" width="270" ></el-table-column>
            <el-table-column label="Guests Info">
                <el-table-column prop="guests.adults" width="70" label="Adults" />
                <el-table-column prop="guests.children" width="80" label="Children" />
                <el-table-column prop="guests.infants" width="80" label="Infants" />
                <el-table-column prop="guests.pets" width="60"  label="Pets" />
            </el-table-column>
            <el-table-column prop="orderStatus" label="Status" width="106">
            <!-- :filters="[{ text: 'Approved', value: 'approved' }, { text: 'Pending', value: 'pending' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end" -->

            <template v-slot="scope">
                <el-tag round
                :type="scope.row.orderStatus === 'approved' ? 'success' : 'warning'"
                disable-transitions>{{scope.row.orderStatus}}</el-tag>
            </template>
            </el-table-column>

            <el-table-column label="Operations">
            <template v-slot="scope">
                <div class="buttons-container"><button class="table-button approve"  v-if="scope.row.orderStatus === 'pending'" 
                @click="handleApprove(scope.$index, scope.row)">Approve</button>
                <button class="table-button decline" v-if="scope.row.orderStatus === 'pending'" 
                @click="handleDecline(scope.$index, scope.row)">Decline</button>
                </div>  
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

        if(column.label === 'From')
            formatedData = this.formatedDate(row.dates[0])

       if(column.label === 'To')
            formatedData = this.formatedDate(row.dates[1])
            
        if(column.label === 'Days'){
            const oneDay=1000*60*60*24;
            formatedData = Math.round((new Date(row.dates[1]).getTime() - new Date(row.dates[0]).getTime())/oneDay)
        }

        if(column.label === 'Price')
            formatedData = `$${row.price}`

        return formatedData;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      formatedDate(date){
        return new Date(date).toLocaleString('en-GB',{ year:"numeric", day: "numeric", month:"short"})
      },
      handleApprove(index, row) {
        //row.orderStatus = "approved"
        this.$store.commit({type: "approveOrder", orderId: row._id })
      },
      handleDecline(index, row) {
        //row.orderStatus = "approved"
        this.$store.commit({type: "declineOrder", orderId: row._id })
      }
    }
  }
</script>


