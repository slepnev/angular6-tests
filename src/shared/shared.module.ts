import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupService } from './popup.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PopupService],
  declarations: []
})
export class SharedModule { }
