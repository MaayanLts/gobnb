<template>
  <div class="main-layout"> 
    <div class="backoffice">
        <div class="items-area">

            <div class="graph-holder">
                <h4 class="reviews-title">★ 4.9
                    <span class="pr-5 pl-5"> • 
                    </span>{{ 20 }} reviews 
                </h4>

                <div class="reviews-holder">

                        <div class="bar-holder">
                            <span class="bar-text">Cleanliness</span>
                            <div class="bar-num">
                                <div class="bar">
                                    <div class="fill" :style="style(4.9)"></div>
                                </div>
                                <span class="pl-5">4.9</span>
                            </div>
                        </div>


                        <div class="bar-holder">
                            <span class="bar-text">Communication</span>
                            <div class="bar-num">
                                <div class="bar">
                                    <div class="fill" :style="style(5)"></div>
                                </div>
                                <span class="pl-5">5.0</span>
                            </div>
                        </div>

                        <div class="bar-holder">
                            <span  class="bar-text">Check-in</span>
                            <div class="bar-num">
                                <div class="bar">
                                    <div class="fill" :style="style(4.9)"></div>
                                </div>
                                <span class="pl-5">4.9</span>
                            </div>
                        </div>

                        <div class="bar-holder">
                            <span  class="bar-text">Accuracy</span>
                            <div class="bar-num">
                                <div class="bar">
                                    <div class="fill" :style="style(5)"></div>
                                </div>
                                <span class="pl-5">5.0</span>
                            </div>
                        </div>

                        <div class="bar-holder">
                            <spn  class="bar-text">Location</spn>
                            <div class="bar-num">
                                <div class="bar">
                                    <div class="fill" :style="style(4.9)"></div>
                                </div>
                                <span class="pl-5">4.9</span>
                            </div>
                        </div>

                        <div class="bar-holder">
                            <span  class="bar-text">Value</span>
                            <div class="bar-num">
                                <div class="bar">
                                    <div class="fill" :style="style(4.9)"></div>
                                </div>
                                <span class="pl-5">4.9</span>
                            </div>
                        </div>

                </div>
            </div> 

            <div class="graph-holder" style="margin-right: 30px;margin-left: 30px;">
                <div class="toys-per-stock">
                    <h3>★ Rating</h3>
                    <DoughnutChart :chartData="toysData" />
                </div>
            </div> 
            <div class="graph-holder wide">
                <BarChart width="70%" :chartData="ordersData" />
            </div>  
        </div>
        
        <div class="el-table-container">
            <el-table header-align="center"
            ref="filterTable"
            :data="orders"
            style="width: 100%">
            <el-table-column type="index" width="30">
            </el-table-column>
            <el-table-column label="Orders info" header-align="center">
                <el-table-column prop="orderDate" label="Booked" width="130" :formatter="formatter" header-align="center"></el-table-column>
                <el-table-column prop="dates" label="Check in/Check out" width="160" :formatter="formatter"></el-table-column>
                <!-- <el-table-column prop="dates" label="Check out" width="120" sortable :formatter="formatter"></el-table-column> -->
                <el-table-column prop="dates" label="Nights" width="67" :formatter="formatter"></el-table-column>
                <el-table-column prop="price" header-align="center" label="Price" width="70" :formatter="formatter"></el-table-column>
            </el-table-column> 
            <el-table-column prop="destination.address" label="Stay" width="250" @click="showStay" header-align="center">
                <template v-slot="scope">
                    <div class="address" @click="showStay(scope.row)">{{ scope.row.destination.address }}</div>  
                </template>
            </el-table-column>
            <el-table-column label="Guests info" header-align="center">
                <el-table-column prop="mainGuest.fullName"  header-align="center" label="Main guest" >
                    <template v-slot="scope">
                        <div class="main-guest-container">
                            <img class="main-guest-img" :src="scope.row.mainGuest.imgUrl"> 
                            <div>{{ scope.row.mainGuest.fullName }}</div> 
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="guests.adults" width="75" label="Guests" :formatter="formatter"/>
                <!-- <el-table-column prop="guests.children" width="80" label="Children" />
                <el-table-column prop="guests.infants" width="80" label="Infants" /> -->
                <!-- <el-table-column prop="guests.pets" width="60"  label="Pets" /> -->
            </el-table-column>
            <el-table-column prop="orderStatus" label="Status" width="106" header-align="center">
            <!-- :filters="[{ text: 'Approved', value: 'approved' }, { text: 'Pending', value: 'pending' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end" -->

                <template v-slot="scope">
                    <el-tag round
                    :type="statusLable(scope.row)"
                    disable-transitions>{{scope.row.orderStatus}}</el-tag>
                </template>
            </el-table-column>

            <el-table-column label="Operations" header-align="center" width="250" >
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

        toysData: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            data: null,
            backgroundColor: ["#eb4034", "#eb4034", '#8ba2d6', '#2d4d96', '#167520'],
          },
        ],
      },

      }
    },
    created() {
        this.$store.commit('loadOrders')
        this.orders = this.$store.getters.orders

        const dataSet = this.orders

        this.toysData.datasets[0].data = [1,5,7,10,44]
        console.log(this.toysData.datasets[0])
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
        style(rev) {
            const width = 20*rev
            return 'width:' + width + '%'
        },
        resetDateFilter() {
            this.$refs.filterTable.clearFilter('date');
        },
        clearFilter() {
            this.$refs.filterTable.clearFilter();
        },
      formatter(row, column) {
        let formatedData = ''

        if(column.label === 'Booked'){
            const oneMinute=1000*60
            const oneHour=1000*60*60
            const oneDay=1000*60*60*24
            const interval = (new Date().getTime() - new Date(row.orderDate).getTime())
            let bookedInterval = Math.round(interval/oneDay)

            if(bookedInterval === 0){
                bookedInterval = Math.round(interval/oneHour)
                if(bookedInterval === 0){
                    bookedInterval = Math.round(interval/oneMinute)
                    formatedData = `${bookedInterval} minutes ago`
                }else{
                    formatedData = `${bookedInterval} hours ago`
                }
            }else{
                formatedData = `${bookedInterval} days ago`
            }
        }

        if(column.label === 'Check in/Check out'){
            const from = new Date(row.dates[0]).toLocaleString('en-GB',{ day: "numeric", month:"numeric"})
            const to = new Date(row.dates[1]).toLocaleString('en-GB',{ year:"numeric", day: "numeric", month:"numeric"})
            
            formatedData = `${from} - ${to}`
        }
    //    if(column.label === 'Check out')
    //         formatedData = this.formatedDate(row.dates[1])
            
        if(column.label === 'Nights'){
            const oneDay=1000*60*60*24;
            formatedData = Math.round((new Date(row.dates[1]).getTime() - new Date(row.dates[0]).getTime())/oneDay)
        }

        if(column.label === 'Price')
            formatedData = `$${row.price.toLocaleString()}`

        if(column.label === 'Guests')
            formatedData = row.guests.adults + row.guests.children + row.guests.infants

        return formatedData;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
    //   formatedDate(date){
    //     return new Date(date).toLocaleString('en-GB',{ year:"numeric", day: "numeric", month:"numeric"})
    //   },
      showStay(row){
        this.$router.push(`/stay/${row.stayId}`)// + row._id)622f337a75c7d36e498aab05
      },
      handleApprove(index, row) {
        this.$store.commit({type: "changeOrderOrder", orderId: row._id, status: 'approved' })
      },
      handleDecline(index, row) {
        this.$store.commit({type: "changeOrderOrder", orderId: row._id, status: 'declined'})
      },
      statusLable(row){
        let lableType = ''
        if(row.orderStatus === 'approved')
            lableType = 'success'
        else if(row.orderStatus === 'pending') 
            lableType = 'warning'
        else{
            lableType = 'danger'
        }

        return lableType
      }
    }
  }
</script>


