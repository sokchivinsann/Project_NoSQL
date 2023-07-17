<template>
  <div>
   <apexchart 
     width="100%" type="bar" 
     :options="chartOptions" :series="series">
   </apexchart>  
   <p>These are 10 most contributed customers. <br>
  Customer with ID 14646 contributed the most, and secondly following by Customer with ID 18102. </p>
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
  computed: {
    series() {
      return [{
        //name: this.dataRecords.map((record) => record.BestSellingProduct),
        data: this.dataRecords.map((record) => record.TotalSales)
      }];
    },
    
    customers() {
      return this.dataRecords.map((record) => record.CustomerID);
    },
    chartOptions() {
      return {
        title: {
          text: "Most contributed customers",
          align: "center",
          style: {
            fontSize: "20px",
          },
        },
        
        xaxis: {
          categories: this.customers,
          title: {
            text: 'Customer ID',
          }
        },
        yaxis:{
          title: {
            text: 'Total Sales',
          }
        },
        chart: {
          type: 'bar',
          //height: '600px' 
        },
        plotOptions: {
          
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '9px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
            //colors: ''
          },
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
        .get('http://localhost:3000/api/v1/sales/most-contributed-customer')
        .then((response) => {
          console.log(response.data.most_contributed_customer);
          
          this.dataRecords = [...response.data.most_contributed_customer];//Object.assign([],response.data.total_of_sales);
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