import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SignOnRoutingModule } from './sign-on-routing.module';
import {
  SignOnFormComponent
} from './index';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SignOnRoutingModule,
  ],
  declarations: [SignOnFormComponent],
})
export class SignOnModule { }
