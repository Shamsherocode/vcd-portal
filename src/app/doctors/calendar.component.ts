import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import PerfectScrollbar from 'perfect-scrollbar';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    moduleId: module.id,
    selector: 'calendar-cmp',
    templateUrl: 'calendar.component.html'
})

export class CalendarComponent implements OnInit{
    public dataTable: DataTable;
  ngOnInit() {
    this.dataTable = {
        headerRow: ['name', 'department', 'mobile no', 'email', 'avaliable'],
        dataRows: [
          ['Feddy Strange, O.D.','Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
          ['Feddy Strange, O.D.','Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
          ['Feddy Strange, O.D.','Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
          ['Feddy Strange, O.D.','Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
          ['Feddy Strange, O.D.','Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
          ['Feddy Strange, O.D.','Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
          ['Feddy Strange, O.D.','Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
          ['Feddy Strange, O.D.','Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
          ['Feddy Strange, O.D.','Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes',],
          ['John Parker, O.D.','Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
          ['John Parker, O.D.','Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
          ['John Parker, O.D.','Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
          ['John Parker, O.D.','Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
          ['John Parker, O.D.','Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
          ['John Parker, O.D.','Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
          ['John Parker, O.D.','Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
          ['John Parker, O.D.','Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
          ['John Parker, O.D.','Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
          ['John Parker, O.D.','Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
          ['John Parker, O.D.','Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
          ['John Parker, O.D.','Gynaecology', '+17451252041', 'peter@vcdcare.org', 'No',],
          ]
        };  
  }

  ngAfterViewInit(){
    $('#datatable2').DataTable({
      "pagingType": "full_numbers",
      "lengthMenu": [
        [10, 25, 50, -1],
        [10, 25, 50, "All"]
      ],
      responsive: true,
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Search doctors",
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
