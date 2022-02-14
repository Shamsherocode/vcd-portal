import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { ApiService } from '../services/api.service';
import { AuthService } from 'app/services/auth.service';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
import {NgbDateStruct, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { element } from 'protractor';
import { WidgetsComponent } from './doctors/widgets.component';
import { style } from '@angular/animations';


declare var $:any;


@Component({
  providers: [WidgetsComponent],
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    public message:string='';
    public showMembersTable:boolean = false;
    public memberSearch: any;
    public memberTable:any;
    public paymentsTable: any;
    public locationsTable: any;
    public doctorsTable: any;
    public paymentDetails: any;


    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private api:ApiService,
                public datepipe: DatePipe,
                private auth: AuthService,
                private data: WidgetsComponent) {

    this.showMembersTable=false
    var MemberSearchForms = JSON.parse(localStorage.getItem('MemberSearchForms'));
      if(MemberSearchForms){
        this.memberSearch = {
          lastname: MemberSearchForms.lastname,
          dob: MemberSearchForms.dob,
          id: MemberSearchForms.id,
          dobView: MemberSearchForms.dobView,
          startDate: MemberSearchForms.startDate,
        }

		setTimeout(function(){
      $('#memberTable').DataTable().draw();
      }, 500)

    }else{
      this.memberSearch = {
        lastname: '',
        dob: '',
        id: '',
        dobView: '',
        startDate: ''
        }
      }
  }
        
   
    ngOnInit(){

      this.paymentsTable = {
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


      this.doctorsTable = {
      headerRow: ['name', 'department', 'mobile no', 'email', 'avaliable'],
      dataRows: [
        ['Peter Parker', 'Eye', '+17451258741', 'peter@vcdcare.org', 'Yes'],
        ['Ted Strange, O.D.', 'Medicine', '+17451254141', 'peter@vcdcare.org', 'Yes'],
        ['Sam Parker, O.D.', 'Surgery', '+174512542141', 'peter@vcdcare.org', 'Yes'],
        ['Ransom Strange, O.D.', 'Neurology', '+17453258741', 'peter@vcdcare.org', 'No'],
        ['John Parker, O.D.', 'Cardiology', '+17451258981', 'peter@vcdcare.org', 'Yes'],
        ['Vin Strange, O.D.', 'Medicine', '+17451258721', 'peter@vcdcare.org', 'No'],
        ['Tom Parker, O.D.', 'Neurology', '+17451258796', 'peter@vcdcare.org', 'Yes'],
        ['Feddy Strange, O.D.', 'Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes'],
        ['Kat Parker, O.D.', 'Surgery', '+17451258691', 'peter@vcdcare.org', 'Yes'],
        ['Sujain Strange, O.D.', 'Gynaecology', '+17451258741', 'peter@vcdcare.org', 'No'],
        ['Feddy Strange, O.D.', 'Eye', '+17451258741', 'peter@vcdcare.org', 'Yes'],
        ['Kat Parker, O.D.', 'Gynaecology', '+17451258741', 'peter@vcdcare.org', 'Yes'],
        ['Sujain Strange, O.D.', 'Eye', '+17451258741', 'peter@vcdcare.org', 'No']]
      };

      this.locationsTable = {
        headerRow: ['name', 'city', 'zip code', 'state'],
        dataRows: [
          ['Peter Parker', 'Juneau', '99950', 'Alaska [AK]'],
          ['Ted Strange', 'Phoenix', '86556','Arizona [AZ]'],
          ['Sam Parker', 'Juneau', '99950', 'Alaska [AK]'],
          ['Ransom Strange', 'Phoenix', '86556','Arizona [AZ]'],
          ['John Parker', 'Sacramento', '96162', 'California [CA]'],
          ['Vin Strange', 'Phoenix', '86556','Arizona [AZ]'],
          ['Tom Parker', 'Sacramento', '96162', 'California [CA]'],
          ['Feddy Strange', 'Phoenix', '86556','Arizona [AZ]'],
          ['Kat Parker', 'Phoenix', '86556','Arizona [AZ]'],
          ['Sujain Strange', 'Sacramento', '96162', 'California [CA]'],
          ['Feddy Strange', 'Phoenix', '86556','Arizona [AZ]'],
          ['Kat Parker', 'Sacramento', '96162', 'California [CA]'],
          ['Sujain Strange', 'Juneau', '99950', 'Alaska [AK]']]
        };
      
    }


    ngAfterViewInit(){

      $('#paymentTable').DataTable({
        language:{ infoFiltered: ''},
        lengthMenu: [5,10,25,50],
      });

      $('#doctorTable').DataTable({
        language:{ infoFiltered: ''},
        lengthMenu: [5,10,25,50],
      });

      $('#locationTable').DataTable({
        language:{ infoFiltered: ''},
        lengthMenu: [5,10,25,50],
      });

    }
    
    getID(data){
      return data
    }

    redirectPage(){
      this.router.navigateByUrl('/payment-details')
    }
}
