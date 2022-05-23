import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KoreAiService } from './kore-ai.service';
import { KoreAiRoutingModule } from './kore-ai-routing.module';
import { KoreAiComponent } from './kore-ai.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    KoreAiRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [KoreAiComponent],
  providers: [KoreAiService],
  exports: [KoreAiComponent]
})
export class KoreAiModule { }
