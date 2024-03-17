import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { MessageComponent } from './welcome/message/message.component';



@NgModule({
  declarations: [
    LoaderComponent,
    MessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent],
  
})
export class SharedModule { }
