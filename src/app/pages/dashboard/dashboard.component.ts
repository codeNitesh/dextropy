import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
    this.monthlyChartRender()
    this.salesReportChartRender()
    this.inoviceRaisedChart()
  }

  monthlyChartRender(){
    new Chart("chart-monthly-trans", {
      type: 'doughnut',
      data: {
          labels: [
              'Invoices'
            ],
            datasets: [{
              label: 'Invoices',
              data: [75, 25],
              backgroundColor: [
                'rgb(223, 103, 103)',
                'rgb(122, 132, 166)'
              ],
              borderWidth: 5, 
              borderRadius: 2,
              hoverOffset: 4
            }]
      },
         
      options: { 
        maintainAspectRatio: false, 
        scales: {
          y: {
              display : false
          }
        },        
        // barThickness: 0,
          elements: {
              line: {
                  tension: 0 // disables bezier curves
              }
          },
      }
  });
  }

  salesReportChartRender(){
    new Chart("chart-sales-report", {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
                  label: 'Sales',
                  data: [50, 200, 150, 60, 70, 240, 55, 30, 200, 140, 90, 170],
                  fill: true,
                  backgroundColor: 'rgb(223, 103, 103)' ,
                  // borderColor: 'rgb(223, 103, 103)',
                  // tension: 0.1,
                },]
      },
         
      options: { 
        // maintainAspectRatio: false,      
          scales: {
              y: {
                  display : false
              }
              
          },
          // barThickness: 0,
          elements: {
              line: {
                  tension: 0.3 // disables bezier curves
              }
          },
      }
  });  
  }

  inoviceRaisedChart(){
    var myChart = new Chart("chart-invoice-raised", {
      type: 'line',
      data: {
          labels: ['1-7', '8-15', '16-22', '23-29'],
          datasets: [{
                  label: 'No. of Invoice',
                  data: [920, 2000, 1200, 1400],
                  fill: true,
                  backgroundColor: 'rgb(223, 103, 103)' ,
                  // fillColor : gradient,
                  // borderColor: 'rgb(223, 103, 103)',
                  // tension: 0.1,
                },]
      },
         
      options: {   
        maintainAspectRatio: false,      
          scales: {
              y: {
                  display : false
              }
              
          },
          // barThickness: 0,
          elements: {
              line: {
                  tension: 0.3 // disables bezier curves
              }
          },
      }
  });

  }

}
