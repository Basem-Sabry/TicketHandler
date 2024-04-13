import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [
    TranslateModule,
    NgApexchartsModule
  ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      dataLabels: {
        enabled: false
      },
      series: [
        {
          name: "الاستخدام",
          data: [{y:10,x:'ديسمبر'}, {y:41,x:'نوفمبر'},{y:20,x:'اكتوبر'},{y:100,x:'سبتمبر'},{y:30,x:'اغسطس'},{y:41,x:'يوليو'},{y:55,x:'يونيو'},{y:60,x:'مايو'},{y:10,x:'ابريل'},{y:60,x:'مارس'},{y:50,x:'فبراير'},{y:55,x:'يناير'}]
        }
      ],

      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
        fontFamily:'Neo Sans Arabic',

      },

    };
  }


}
