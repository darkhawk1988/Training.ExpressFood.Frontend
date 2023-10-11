import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './admins.component';
import { NavigationComponent } from './+pages/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UsersComponent } from './+pages/users/users.component';
import { DataGridComponent } from 'src/app/shared/data-grid/data-grid.component';


@NgModule({
  declarations: [
    AdminsComponent,
    NavigationComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DataGridComponent
  ]
})
export class AdminsModule { }
