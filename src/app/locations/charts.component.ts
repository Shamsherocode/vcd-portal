import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


declare var $:any;

declare interface DataTable {
    headerRow: string[];
    dataRows: string[][];
}


@Component({
  moduleId: module.id,
  selector: 'charts-cmp',
  templateUrl: './charts.component.html'
})

export class ChartsComponent implements OnInit{
  public dataTable: DataTable;
  public gradientStroke;
  public chartColor = "#FFFFFF";
  public canvas : any;
  public ctx;
  public gradientFill;
  public gradientChartOptionsConfiguration: any;
  public gradientChartOptionsConfigurationWithNumbersAndGrid: any;
  public myChart: any;
    ngOnInit(){
      this.dataTable = {
        headerRow: ['name', 'city', 'zip code', 'state'],
        dataRows: [
          ['Peter Parker','Phoenix', '86556', 'Arizona [AZ]',],
          ['Peter Parker','Phoenix', '86556', 'Arizona [AZ]',],
          ['Peter Parker','Phoenix', '86556', 'Arizona [AZ]',],
          ['John Parker','	Sacramento', '86556', 'California [CA]',],
          ['John Parker','	Sacramento', '86556', 'California [CA]',],
          ['John Parker','	Sacramento', '86556', 'California [CA]',],
          ['John Parker','	Sacramento', '86556', 'California [CA]',],
          ['John Parker','	Sacramento', '86556', 'California [CA]',],
          ['John Parker','	Sacramento', '86556', 'California [CA]',],
          ['Peter Parker','Phoenix', '86556', 'Arizona [AZ]',],
          ['John Parker','	Sacramento', '86556', 'California [CA]',],
          ['Peter Parker','Phoenix', '86556', 'Arizona [AZ]',],
          ['John Parker','	Sacramento', '86556', 'California [CA]',],
          ['Peter Parker','Phoenix', '86556', 'Arizona [AZ]',],
          ['John Parker','	Sacramento', '86556', 'California [CA]',],
          ['Peter Parker','Phoenix', '86556', 'Arizona [AZ]',],
          ['John Parker','	Sacramento', '86556', 'California [CA]',],
          ['Peter Parker','Phoenix', '86556', 'Arizona [AZ]',],
          ['John Parker','	Sacramento', '86556', 'California [CA]',],
          ['Peter Parker','Phoenix', '86556', 'Arizona [AZ]',],
          ['John Parker','	Sacramento', '86556', 'California [CA]',],
        ]
        };  

    }

    ngAfterViewInit(){
      $('#datatable1').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search locations",
        }

      });

      var table = $('#datatable').DataTable();

      // Edit record
      table.on('click', '.edit', function() {
        let $tr = $(this).closest('tr');

        var data = table.row($tr).data();
        alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
      });

      // Delete a record
      table.on('click', '.remove', function(e) {
        let $tr = $(this).closest('tr');
        table.row($tr).remove().draw();
        e.preventDefault();
      });

      //Like record
      table.on('click', '.like', function() {
        alert('You clicked on Like button');
      });
    }
}
