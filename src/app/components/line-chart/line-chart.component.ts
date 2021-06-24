import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BitcoinService } from 'src/app/services/bitcoin.service';


@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{
        stacked: true,
        ticks: {
          fontColor: 'white',  // x axe labels (can be hexadecimal too)
          autoSkip: true,
          maxTicksLimit: 16
        }
      }],
      yAxes: [

        {
          id: 'y-axis-0',
          position: 'left',
          gridLines: {
            color: 'rgba(242,147,27,0.6)',
          },
          ticks: {
            fontColor: 'white',
          }
        },
        // {
        //   id: 'y-axis-1',
        //   position: 'right',
        //   gridLines: {
        //     color: 'rgba(242,147,27,0.6)',
        //   },
        //   ticks: {
        //     fontColor: 'white',
        //   }
        // }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(109, 24, 219,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];


  rate: any
  marketPrice: any
  confirmedTrans: any
  constructor(private bitcoinService: BitcoinService) { }

  async ngOnInit() {
    this.rate = await this.bitcoinService.getRate().toPromise()
    this.marketPrice = await this.bitcoinService.getMarketPrice().toPromise()
    this.updateLineChartData(0, this.marketPrice);
    this.confirmedTrans = await this.bitcoinService.getConfirmedTransactions().toPromise()
    console.log('rate', this.rate, 'market price', this.marketPrice, 'confirmed trans', this.confirmedTrans);
  }


  updateLineChartData(index: number, data: any) {

    const arr = data.values.map(item => item.y);
    this.lineChartData[index].data = arr;

    const dates = data.values.map(item =>
      new Date(item.x * 1000).toLocaleString('default', { month: 'long' })

    )


    this.lineChartLabels = dates;
  }
}
