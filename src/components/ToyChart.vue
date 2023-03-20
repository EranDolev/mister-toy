<template>
    <DoughnutChart :chartData="testData" />

    <BarChart :chartData="getDataLabelsPercentage" :options="getOptions('Percentage Of toys That Are In Stock By Label')" />
</template>
  
<script>
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
    name: 'Chart',
    components: { DoughnutChart },
    methods: {
        getOptions(title) {
            return {
                plugins: {
                    legend: {
                        position: "top"
                    },
                    title: {
                        display: true,
                        text: title
                    }
                }
            };
        },
        getToysByLabel(label) {
      return this.toys.filter(toy => toy.labels.includes(label));
    }
    },
    data() {
        return {
            testData: {
                labels: [this.var1, 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
                datasets: [
                    {
                        data: [30, 40, 60, 70, 5],
                        backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
                    },
                ],
            },
            var1: 'PP',
        }
    },
    computed: {
        labels() {
      return this.$store.getters.labels;
    },
    toys() {
      return this.$store.getters.toys;
    },
        getDataLabelsPercentage() {
      // This is for making an array of object, each object represents a count (of total toys,in stock and out of stock) per label.
      const data = this.labels.map(label => {
        const filteredToys = this.getToysByLabel(label);
        const num = filteredToys.length;
        const inStock = filteredToys.filter(toy => toy.inStock).length;
        const outStock = num - inStock;
        return { num, inStock, outStock };
      });
      // console.log("data", data); // [{num:10,inStock:7,outStock:3}]

      // Now we need to make two data arrays - one for in stock toys and one for out of stock toys- with numbers representing the percentage of the toys.
      // e.g. For the doll label: if we have 10 toys overall, 3 are out of stock and 7 is in stock =>  inStockData = [70]; outStockData = [30];
      const inStockData = data.map(({ num, inStock }) => (inStock * 100) / num);
      const outStockData = data.map(
        ({ num, outStock }) => (outStock * 100) / num
      );
      // console.log("inStockData ", inStockData);
      // console.log("outStockData ", outStockData);

      return {
        labels: this.labels,
        datasets: [
          {
            label: "In stock",
            borderRadius: 6,
            data: inStockData, //This is an array numbers
            backgroundColor: ["#77CEFF", "#77CEFF", "#77CEFF"]
          },
          {
            label: "Out of stock",
            borderRadius: 6,
            data: outStockData, //This is an array of numbers
            backgroundColor: ["#0079AF", "#0079AF", "#0079AF"]
          }
        ]
      };
    }
    }

};
</script>