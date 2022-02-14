import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { element } from 'protractor';

declare var $:any;


@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html'
})

export class WidgetsComponent implements OnInit {
  public doctorTable: any;


  constructor(private api:ApiService,
              private auth: AuthService,
              private router: Router) {}

    ngOnInit() {
      
        this.doctorTable = {
  
            headerRow: ['benefit type', 'charged', 'allowed', 'write off', 'paid by patient', 'paid by plan'],
            dataRows: [
              ['Peter Parker','$1101', 'No', 'Yes', '120$', '$180'],
              ['Peter Parker','$1101', 'No', 'Yes', '120$', '$180'],
              ['Peter Parker','$1101', 'No', 'Yes', '120$', '$180'],
              ['Peter Parker','$1101', 'No', 'Yes', '120$', '$180'],
              ['Peter Parker','$1101', 'No', 'Yes', '120$', '$180'],
              ['Peter Parker','$1101', 'No', 'Yes', '120$', '$180'],
              ['Peter Parker','$1101', 'No', 'Yes', '120$', '$180'],
              ['Peter Parker','$1101', 'No', 'Yes', '120$', '$180'],
              ['Peter Parker','$1101', 'No', 'Yes', '120$', '$180'],
              ['Peter Parker','$1101', 'No', 'Yes', '120$', '$180'],
              ['Peter Parker','$1101', 'No', 'Yes', '120$', '$180'],
              ['Peter Parker','$1101', 'No', 'Yes', '120$', '$180'],
              ['Peter Parker','$1101', 'No', 'Yes', '120$', '$180'],
            ]
            };       

  }


  printFunction(){
    window.print();
  }

  
}
