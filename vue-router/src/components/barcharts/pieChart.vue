<template>
  <div id="chart">
    <apexchart
      type="pie"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <p>We observe that United Kingdom dominates most of sales, i.e 82%.</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    dataRecords: [],
  }),
  computed: {
    series() {
      return this.dataRecords.map((record) => record.TotalSale);
    },
    countries() {
      return this.dataRecords.map((record) => record.Country);
    },
    chartOptions() {
      return {
        title: {
          text: "Total sale for each country",
          align: "center",
          style: {
            fontSize: "20px",
          },
        },
        chart: {
          width: 600,
          type: "pie",
        },
        labels: this.countries,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
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
        .get('http://localhost:3000/api/v1/sales/total-by-country')
        .then((response) => {
          console.log(response.data.total_of_sales);
          this.dataRecords = Object.assign([],response.data.total_of_sales);
      }).catch((error) => {
          console.log(error);
          this.errorMsg = "Error"
      })
    },
  },
  mounted() {
    setTimeout(() => {
      this.initData();
    }, 3000);
  },
};
</script>