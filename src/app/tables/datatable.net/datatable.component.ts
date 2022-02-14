import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    moduleId: module.id,
    selector: 'data-table-cmp',
    templateUrl: 'datatable.component.html'
})

export class DataTableComponent implements OnInit{

  constructor(private router: Router) {}
    public dataTable: DataTable;
    ngOnInit(){
        this.dataTable = {
            headerRow: ['patient name', 'payment id', 'date of service', 'status', 'amount'],
            dataRows: [
              ['Peter Parker','1101', '10-feb-2022', 'Paid', '120$',],
              ['Ted Strange','1102', '10-feb-2022', 'Due', '120$',],
              ['Peter Parker','1103', '10-feb-2022', 'Due', '120$',],
              ['Ted Strange','1104', '10-feb-2022', 'Due', '120$',],
              ['Peter Parker','1105', '10-feb-2022', 'Paid', '120$',],
              ['Ted Strange','1106', '10-feb-2022', 'Due', '120$',],
              ['Peter Parker','1107', '10-feb-2022', 'Due', '120$',],
              ['Ted Strange','1108', '10-feb-2022', 'Due', '120$',],
              ['Peter Parker','1109', '10-feb-2022', 'Paid', '120$',],
              ['Ted Strange','1101', '10-feb-2022', 'Due', '120$',],
              ['Peter Parker','1101', '10-feb-2022', 'Due', '120$',],
              ['Ted Strange','1101', '10-feb-2022', 'Due', '120$',],
              ['Peter Parker','1101', '10-feb-2022', 'Due', '120$',],
              ['Ted Strange','1101', '10-feb-2022', 'Paid', '120$',],
              ['Peter Parker','1101', '10-feb-2022', 'Paid', '120$',],
              ['Ted Strange','1101', '10-feb-2022', 'Due', '120$',],
              ['Peter Parker','1101', '10-feb-2022', 'Paid', '120$',],
              ['Ted Strange','1101', '10-feb-2022', 'Due', '120$',],
              ['Sam Parker','1101', '10-feb-2022', 'Paid', '120$',]]
            };  
    }

    ngAfterViewInit(){
      $('#datatable').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search payments",
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

    redirectPage(){
      this.router.navigateByUrl('/payment-details')
    }
}
