import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopPageComponent } from './components/desktop-page/desktop-page.component';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { PcViewportComponent } from './components/pc-viewport/pc-viewport.component';

const routes: Routes = [
  {
      path: '', component: DesktopPageComponent
  },
  {
    path: 'pcscreen',
    component: PcViewportComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }