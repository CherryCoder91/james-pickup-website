import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopPageComponent } from './components/desktop-page/desktop-page.component';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';

const routes: Routes = [
  {
      path: '', component: DesktopPageComponent
  },
  {
    path: 'lockscreen',
    component: LockScreenComponent
  },
  {
    path: 'homescreen',
    component: HomeScreenComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }