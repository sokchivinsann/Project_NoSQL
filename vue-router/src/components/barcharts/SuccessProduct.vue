<template>
  <div>
   <apexchart 
     width="100%" type="bar" 
     :options="chartOptions" :series="series">
   </apexchart>
   <p>These are 10 most succssful product. <br>
    The most successful product is Manual, secondly following by DOTCOM POSTAGE. </p>
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
    
    products() {
      return this.dataRecords.map((record) => record.Product);
    },
    chartOptions() {
      return {
        title: {
          text: "Most successful Product Overall",
          align: "center",
          style: {
            fontSize: "20px",
          },
        },
        
        xaxis: {
          categories: this.products,
          title: {
            text: 'Products',
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
        .get('http://localhost:3000/api/v1/sales/most-successful-product')
        .then((response) => {
          console.log(response.data.best_selling_product);
          
          this.dataRecords = [...response.data.best_selling_product];//Object.assign([],response.data.total_of_sales);
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