import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SidebarComponent } from '../sidebar/sidebar.component';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
})
export class ProductModule { }
