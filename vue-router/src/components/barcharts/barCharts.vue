<template>
  <div>
   <apexchart 
     width="100%" type="bar" 
     :options="options" :series="series">
   </apexchart>  
  </div>
</template>

<script>
export default {
  data: () => ({
    options: {
      title: {
        text: 'Title',
        align: 'center',
        style: {
          fontSize:  '20px',
        },
      },
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
      }
    },
    series: [{
      name: 'series-1',
      data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139]
    }]
  })
}
</script>