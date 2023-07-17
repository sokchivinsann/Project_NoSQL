<template>
  <div>
   <apexchart 
     width="100%" type="line" 
     :options="chartOptions" :series="series">
   </apexchart>  
   <p>Sales trend has increased until November 2011 but dropped down in December 2011.</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dataRecords: [],
    };
  },
  // data: () => ({
  //   dataRecords: []
  // }),
  computed: {
    series() {
      return [{
        data: this.dataRecords.map((record) => record.TotalSale)
      }];
    },
    dates() {
      return this.dataRecords.map((record) => record.YearMonth);
    },
    chartOptions() {
      return {
        title: {
          text: "Total sale for each month",
          align: "center",
          style: {
            fontSize: "20px",
          },
        },
        xaxis: {
          categories: this.dates
        },
        yaxis:{
          title: {
            text: 'Total Sales',
          }
        },
        chart:{
          dataLabels: {
            enabled: false
          },
          toolbar: {
            show: false
          },
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false}
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100%",
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };
    },
  },
  methods: {
    initData() {

      axios
        .get('http://localhost:3000/api/v1/sales/total-by-month')
        .then((response) => {
          console.log(response.data.total_of_sales);
          
          this.dataRecords = [...response.data.total_of_sales];//Object.assign([],response.data.total_of_sales);
      }).catch((error) => {
          console.log(error);
          this.errorMsg = "Error"
      })
    },
  },
  mounted() {
      this.initData();
  },
};
</script>