<template>
  <div class="main-layout"> 
    <div class="backoffice">
        <div class="items-area">
            <div class="graph-holder wide">
                <BarChart width="70%" :chartData="ordersData" />
            </div>  
            <section class="graph-holder"></section> 
            <section class="graph-holder"></section> 
        </div>

        <el-table 
            ref="filterTable"
            :data="orders"
            style="width: 100%">
            <el-table-column type="index" width="30">
            </el-table-column>
            <el-table-column label="Orders info" >
                <el-table-column prop="dates" label="From" width="110" sortable :formatter="formatter"></el-table-column>
                <el-table-column prop="dates" label="To" width="110" sortable :formatter="formatter"></el-table-column>
                <el-table-column prop="dates" label="Nights" width="70" :formatter="formatter"></el-table-column>
            </el-table-column> 
            <el-table-column prop="price" label="Price" width="70" :formatter="formatter"></el-table-column>
            <el-table-column prop="destination.address" label="Address" width="270" @click="showStay">
                <template v-slot="scope">
                    <div class="address" @click="showStay">{{ scope.row.destination.address }}</div>  
                </template>
            </el-table-column>
            <el-table-column label="Guests info">
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
import { ref } from 'vue'
import { defineComponent } from 'vue';
import { BarChart } from 'vue-chart-3';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

  export default {
    components: { DoughnutChart, BarChart },
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
    computed:{
        
    ordersData() {
        let labels = [];
        let data = [];
        const dataset = this.orders
        for (const price in dataset)
        {
            labels.push('aaa')//(order.price)
            data.push(price);
        }

      return { labels, datasets: [{ data, backgroundColor: ["gray"]}]}
    },





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
            
        if(column.label === 'Nights'){
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
        return new Date(date).toLocaleString('en-GB',{ year:"numeric", day: "numeric", month:"numeric"})
      },
      showStay(index, row){
        this.$router.push("/stay/622f337a75c7d36e498aab05")// + row._id)
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


