<template>
    <div>  
      <div class="chart-wrapper">
        <apexchart 
          width="100%" type="line" 
          :options="options" :series="series">
        </apexchart>
      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    options: {
      chart: {
        id: 'vuechart-example'
      },
      xaxis: {
        categories: [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec"
        ]
      },
      title: {
        text: 'Title',
        align: 'center',
        style: {
          fontSize:  '20px',
        },
      },
      colors: ['#00897b']
      },
      series: [{
        name: 'series-1',
        data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139]
      }]
  })
}
</script>