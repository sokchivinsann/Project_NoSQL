<template>
  
  <div class="table-container">
    
    <table border="1">      
      <thead>
        <tr>
          <th>Country</th>
          <th>Best Selling Product</th>
          <th>Total Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataRecords" :key="index">
          <td>{{ item.Country }}</td>
          <td>{{ item.BestSellingProduct }}</td>
          <td>{{ item.TotalQuantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>
.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust the height as needed */
}

</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      dataRecords: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/v1/sales/best-selling-by-country")
      .then((response) => {
        this.dataRecords = response.data.best_selling_product_by_country;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
};
</script>