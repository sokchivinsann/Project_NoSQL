<template>
  <div>
   <apexchart 
     width="100%" type="line" 
     :options="chartOptions" :series="series">
   </apexchart> 
   <p>Customers trend has the same behavior as Sales trend.
    <br> It's obvious that the decline of sales is due to the decline of customers.</p> 
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
        data: this.dataRecords.map((record) => record.CustomerCount)
      }];
    },
    dates() {
      return this.dataRecords.map((record) => record.YearMonth);
    },
    chartOptions() {
      return {
        title: {
          text: "Total number of customers for each month",
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
            text: 'Total Customers',
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
        .get('http://localhost:3000/api/v1/sales/customer-puchaseed-by-month')
        .then((response) => {
          console.log(response.data.total_customers);
          
          this.dataRecords = [...response.data.total_customers];//Object.assign([],response.data.total_of_sales);
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