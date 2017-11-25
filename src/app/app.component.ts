import { Component } from '@angular/core';
export const data = [
  { country: 'Europe', year: '1750', value: 163 },
  { country: 'Europe', year: '1800', value: 203 },
  { country: 'Europe', year: '1850', value: 276 },
  { country: 'Europe', year: '1900', value: 408 },
  { country: 'Europe', year: '1950', value: 547 },
  { country: 'Europe', year: '1999', value: 729 },
  { country: 'Europe', year: '2050', value: 628 },
  { country: 'Europe', year: '2100', value: 828 },
  { country: 'Asia', year: '1750', value: 502 },
  { country: 'Asia', year: '1800', value: 635 },
  { country: 'Asia', year: '1850', value: 809 },
  { country: 'Asia', year: '1900', value: 947 },
  { country: 'Asia', year: '1950', value: 1402 },
  { country: 'Asia', year: '1999', value: 3634 },
  { country: 'Asia', year: '2050', value: 5268 },
  { country: 'Asia', year: '2100', value: 7268 }
];

const dataPre = {
  transform: {
    type: 'percent',
    field: 'value',
    dimension: 'country',
    groupBy: ['year'],
    as: 'percent'
  }
};

const dataMapping = [{
  dataKey: 'year',
  mark: 'column',
}, {
  dataKey: 'percent',
  mark: 'row',
}, {
  dataKey: 'country',
  mark: 'color',
}];

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.2%',
}];

@Component({
  selector: 'app-root',
  template: `
  <div>
    <Chart [forceFit]="forceFit" [height]="height" [data]="data" [dataPre]="dataPre" [dataMapping]="dataMapping" [scale]="scale">
      <Tooltip></Tooltip>
      <Axis></Axis>
      <StackBar [ngStyle]="{ stroke: '#fff', lineWidth: 1 }" ></StackBar>
    </Chart>
    <LiteChart [height]="height" [data]="data" [dataPre]="dataPre" [dataMapping]="dataMapping" [forceFit]="forceFit" stackBar="true">
    </LiteChart>
  </div>
  `
})

export class AppComponent {
  forceFit = true;
  height = 400;
  data = data;
  dataPre = dataPre;
  dataMapping = dataMapping;
  scale = scale;
  fields = ['cut', 'clarity'];
}
