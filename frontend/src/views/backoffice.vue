<template>
  <div class="main-layout"> 
    <div class="backoffice">
        <div class="items-area">
            <section class="graph-holder"></section>  
            <section class="graph-holder"></section> 
            <section class="graph-holder"></section> 
        </div>

        <el-table :data="tableData" border show-summary style="width: 100%">
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="amount1" sortable label="Amount 1" />
        <el-table-column prop="amount2" sortable label="Amount 2" />
        <el-table-column prop="amount3" sortable label="Amount 3" />
        </el-table>

        <el-table
        :data="tableData"
        border
        height="200"
        :summary-method="getSummaries"
        show-summary
        style="width: 100%; margin-top: 20px">
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="amount1" label="Cost 1 ($)" />
        <el-table-column prop="amount2" label="Cost 2 ($)" />
        <el-table-column prop="amount3" label="Cost 3 ($)" />
        </el-table>

    </div>
  </div>
</template>

<script>

export default {
  //import { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'  
  data() {
    return {

    }
  },
  async created() {
  },
}
</script>