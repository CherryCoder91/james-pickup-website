import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopPageComponent } from './components/desktop-page/desktop-page.component';

const routes: Routes = [
  {
      path: '', component: DesktopPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }