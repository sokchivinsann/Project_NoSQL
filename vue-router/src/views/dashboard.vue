<template>
  <div id="barCharts" style="margin: auto;width: 30%;padding: 10px;">
      <PieChart/>
      <!-- <LineChart/> -->
      <!-- <BarCharts/> -->
      <LineChartSales/>
      <LineChartCustomer/>
      
  </div>
  <div>
    <h2>Best Selling Product of Each Country</h2>
    <p>We measure best selling product by total quantity.<br>
  In the table, we list best selling product of each country and total quantity.</p>  
  </div>
  <br><br><br>
  <div class="table-container">
    <BestSellingProducts/>
  </div>
  <div id="barCharts" style="margin: auto;width: 30%;padding: 10px;">
    <SuccessProducts/>
    <Customers/>
  </div>
</template>

<script>
// import BarCharts from "@/components/barcharts/barCharts.vue";
// import LineChart from "@/components/barcharts/lineChart.vue";
import PieChart from "@/components/barcharts/pieChart.vue";
import LineChartSales from "@/components/barcharts/SalesByMonth.vue";
import LineChartCustomer from "@/components/barcharts/CustomersByMonth.vue";
import BestSellingProducts from "@/components/barcharts/BestSellingProduct.vue";
import SuccessProducts from "@/components/barcharts/SuccessProduct.vue";
import Customers from "@/components/barcharts/Customers.vue";


export default {
  name: 'HelloWorld',
  // components:{BarCharts, LineChart, PieChart,BarChartSales}
  components:{PieChart,LineChartSales, 
    LineChartCustomer,BestSellingProducts,
    SuccessProducts, Customers}
}
</script>
