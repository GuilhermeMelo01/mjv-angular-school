import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhonePipe } from './components/pipes/phone.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PhonePipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    PhonePipe
  ]
})
export class SharedModule { }
