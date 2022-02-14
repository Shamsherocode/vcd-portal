import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { WidgetsComponent } from './doctors/widgets.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  AgmCoreModule
} from '@agm/core';
import { DashboardComponent } from './dashboard.component';

import { DashboardRoutes } from './dashboard.routing';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
          apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        })
    ],
    declarations: [
      DashboardComponent,
      WidgetsComponent
    ],
    providers: [
    DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class DashboardModule {}
