import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TooltipModule,
    AlertModule.forRoot(),
    BsDropdownModule
  ],
  exports: [
    TooltipModule,
    AlertModule,
    BsDropdownModule
  ]
})
export class NgxBootstrapModule { }
