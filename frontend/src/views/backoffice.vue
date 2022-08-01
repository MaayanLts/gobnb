<template>
  <div class="main-layout"> 
    <div class="backoffice">
        <div class="items-area">

            <div class="graph-holder" style="display: none;">
                <div class="card-title">
                    <span class="pr-5 pl-5">★ 4.9</span>
                    <span class="pr-5 pl-5"> • </span>{{ 37 }} reviews 
                </div>

                <div class="data-holder">

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

            <div class="graph-holder" style="margin-right: 30px;margin-left: 30px;display: none;"> 
                <div class="card-title">
                    <span>Plaça del Mar 1, Barcelona</span>
                </div>
                <div class="host-stay-container">
                    <!-- <img class="host-stay-img" src="../images/110.jpeg" @click="showStay('622f337a75c7d36e498aab11')"  /> -->
                </div>
                    <!-- <DoughnutChart :chartData="scoreData" :options="scoreOptions" class="scores-chart"/> -->
            </div> 
            <div class="graph-holder" style="display: none;">
                    <div class="card-title">
                        <span>Pla de Palau 19, Barcelona</span>
                    </div>
                    <div class="host-stay-container">
                        <!-- <img  class="host-stay-img" src="../images/028.jpeg" @click="showStay('622f337a75c7d36e498aab05')" /> -->
                    </div>
                <!-- <BarChart class="revenue-chart" :chartData="ordersData" /> -->
            </div>  
        </div>

        <div class="el-table-container small" v-if="recentOrders.length > 0">
            <div class="details-title small">Recent ordes</div>


            <el-table header-align="center" class="table-recent"
            ref="filterTable"
            :data="recentOrders" fit
            :header-cell-style="{ background: '#DDDDDD' }">
            <el-table-column prop="orderDate" label="Booked" width="110" :formatter="formatter" header-align="center">
                <!-- <template v-slot="scope">
                    <div>
                        <div :style="orderColor(scope.row.orderDate)">{{ scope.row.mainGuest.fullName }}</div> 
                    </div>
                </template> -->
            </el-table-column>
            <el-table-column prop="dates" label="Check in/Check out" :min-width="180" :formatter="formatter"></el-table-column>
            <el-table-column prop="dates" label="Nights" :min-width="67" :formatter="formatter">
            </el-table-column>
            <el-table-column prop="price" header-align="center" label="Price" :min-width="90" :formatter="formatter"></el-table-column>
            <!-- <el-table-column prop="destination.address" label="Stay"  @click="showStay" header-align="center">
                <template v-slot="scope">
                    <div class="address" @click="showStay(scope.row.stayId)">{{ scope.row.destination.address }}</div>  
                </template>
            </el-table-column> -->
            <el-table-column prop="mainGuest.fullName"  header-align="center" label="Main guest" :min-width="230">
                <template v-slot="scope">
                    <div class="main-guest-container">
                        <img class="main-guest-img" :src="scope.row.mainGuest.imgUrl"> 
                        <div>{{ scope.row.mainGuest.fullName }}</div> 
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="guests.adults" :min-width="75" label="Guests" :formatter="formatter"/>
            <el-table-column prop="orderStatus" label="Status" header-align="center" :min-width="360"  >
                <template v-slot="scope">
                    <div class="buttons-container">
                        <el-tag class="el-tag-status" round
                        :type="statusLable(scope.row)"
                        disable-transitions>{{scope.row.orderStatus}}</el-tag>
                        <button class="table-button approve" 
                        @click="handleApprove(scope.$index, scope.row)">Approve</button>
                        <button class="table-button decline" 
                        @click="handleDecline(scope.$index, scope.row)" >Decline</button> 
                    </div>  
                </template>
            </el-table-column>
            </el-table>

        </div>

        
        <div class="el-table-container">
            <div class="details-title small" style="margin-bottom: 20px">Orders history</div>
            <el-table header-align="center"
            ref="filterTable"
            border
            :data="oldOrders"
            style="width: 100%" :header-cell-style="{ background: '#DDDDDD' }">
            <el-table-column prop="orderDate" label="Booked" width="110" :formatter="formatter" header-align="center"></el-table-column>
            <el-table-column prop="dates" label="Check in/Check out" width="180" :formatter="formatter"></el-table-column>
            <el-table-column prop="dates" label="Nights" width="67" :formatter="formatter"></el-table-column>
            <el-table-column prop="price" header-align="center" label="Price" width="90" :formatter="formatter"></el-table-column>
            <el-table-column prop="destination.address" label="Stay"  @click="showStay" header-align="center">
                <template v-slot="scope">
                    <div class="address" @click="showStay(scope.row.stayId)">{{ scope.row.destination.address }}</div>  
                </template>
            </el-table-column>
            <el-table-column prop="mainGuest.fullName"  header-align="center" label="Main guest" width="230">
                <template v-slot="scope">
                    <div class="main-guest-container">
                        <img class="main-guest-img" :src="scope.row.mainGuest.imgUrl"> 
                        <div>{{ scope.row.mainGuest.fullName }}</div> 
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="guests.adults" width="75" label="Guests" :formatter="formatter"/>
            <el-table-column prop="orderStatus" label="Status" header-align="center" width="130"  >
                <template v-slot="scope">
                    <div class="buttons-container">
                        <el-tag class="el-tag-status" round
                        :type="statusLable(scope.row)"
                        disable-transitions>{{scope.row.orderStatus}}</el-tag>
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
   // Chart.defaults.global.legend.display = false;

  export default {
    components: { DoughnutChart, BarChart },
    data() {
      return {
        orders: null,
        oldOrders: null,
        recentOrders: null,
        scoreData: {
            //labels: ["2", "3", "4", "5"],
            datasets: [
                {
                    data: [4,86],
                    backgroundColor: ["#f56c6c", '#67c23a'],
                    //labels: ["2", "3", "4", "5"]
                },
            ],
        },
        sccoreOptions: {
            //responsive: true,
            //maintainAspectRatios: false,
            tooltips: {
                enabled: true,
                callbacks: {
                    label:function (tooltipItem, data) {
                        let dataset = data.datasets[tooltipItem.datasetIndex]
                        let currentValue = dataset.data[tooltipItem.index]
                        return currentValue + ' £'
                    }
                }
            }
        },
      }
    },
    created() {
        var oneDay=1000*60*60*24
        //const interval = (new Date().getTime() - new Date(row.orderDate).getTime())
        //let bookedInterval = Math.round(interval/oneDay)

        this.$store.commit('loadOrders')
        this.orders = this.$store.getters.orders
        this.oldOrders = this.orders.filter(function (order) {
            return (new Date().getTime() - new Date(order.orderDate).getTime())/oneDay > 1 && order.orderStatus !== 'pending'
        })
        this.recentOrders = this.orders.filter(function (order) {
            return (new Date().getTime() - new Date(order.orderDate).getTime())/oneDay <=1 || order.orderStatus === 'pending'
        }).sort(function(a,b){
            return new Date(b.orderDate) - new Date(a.orderDate);
        });

       // const dataSet = this.orders
        console.log(this.scoreData.datasets[0])
    },
    computed:{
    ordersData() {
        let labels = [];
        let data = [];
        const dataset = this.orders
        for (const price in dataset)
        {
            labels.push((price))
            data.push(price);
        }

      return { labels, datasets: [{ data, backgroundColor: ["gray"]}]}
    },
    },
    methods: {
        recentOrderDate(dates){
            order.orderStatus  === 'pending'
        },
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
                   // if(bookedInterval > 10)
                       // formatedData = `${bookedInterval} minutes ago`
                   // else
                        formatedData = 'new order'    
                }else{
                    formatedData = `${bookedInterval} hours ago`
                }
            }else{
                if(bookedInterval === 1){
                    formatedData = 'yesterday'
                }else{
                    formatedData = new Date(row.orderDate).toLocaleString('en-GB',{ year:"numeric", day: "numeric", month:"numeric"})
                } 
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

      showStay(stayId){
        this.$router.push(`/stay/${stayId}`)// + row._id)622f337a75c7d36e498aab05
      },
      handleApprove(index, row) {
        this.$store.commit({type: "changeOrderOrder", orderId: row._id, status: 'approved' })
        this.orders = this.$store.getters.orders
        this.oldOrders = this.orders.filter(function (order) {
            return (new Date().getTime() - new Date(order.orderDate).getTime())/oneDay > 1 && order.orderStatus !== 'pending'
        })
        this.recentOrders = this.orders.filter(function (order) {
            return (new Date().getTime() - new Date(order.orderDate).getTime())/oneDay <=1 || order.orderStatus === 'pending'
        }).sort(function(a,b){
            return new Date(b.orderDate) - new Date(a.orderDate);
        });
      },
      handleDecline(index, row) {
        this.$store.commit({type: "changeOrderOrder", orderId: row._id, status: 'declined'})

        this.orders = this.$store.getters.orders
        this.oldOrders = this.orders.filter(function (order) {
            return (new Date().getTime() - new Date(order.orderDate).getTime())/oneDay > 1 && order.orderStatus !== 'pending'
        })
        this.recentOrders = this.orders.filter(function (order) {
            return (new Date().getTime() - new Date(order.orderDate).getTime())/oneDay <=1 || order.orderStatus === 'pending'
        }).sort(function(a,b){
            return new Date(b.orderDate) - new Date(a.orderDate);
        });
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


