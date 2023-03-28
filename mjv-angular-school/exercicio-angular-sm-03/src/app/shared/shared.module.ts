import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueDirective } from './directives/blue.directive';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    BlueDirective,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
