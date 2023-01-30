import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrinterComponent } from './printer/printer.component';

const routes: Routes = [{
  path: 'unique', component: PrinterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
