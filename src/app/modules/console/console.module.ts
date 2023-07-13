import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { DashboardContextComponent } from './inner-items/dashboard-context/dashboard-context.component';
import { ManageProductComponent } from './inner-items/dashboard-context/items/manage-product/manage-product.component';
import { NewProductComponent} from "./inner-items/dashboard-context/items/manage-product/new-product/new-product.component";
import { MainConsoleHeaderComponent } from './components/main-console-header/main-console-header.component';
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { FindProductComponent } from './inner-items/dashboard-context/items/manage-product/find-product/find-product.component';


@NgModule({
  declarations: [
    ConsoleComponent,
    DashboardContextComponent,
    NewProductComponent,
    ManageProductComponent,
    MainConsoleHeaderComponent,
    NewProductComponent,
    FindProductComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class ConsoleModule { }
