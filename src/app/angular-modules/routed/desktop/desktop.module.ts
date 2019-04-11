import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopRoutingModule } from './desktop-routing.module';
import { DesktopPageComponent } from './components/desktop-page/desktop-page.component';
import { PcViewportComponent } from './components/pc-viewport/pc-viewport.component';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { FrostyModule } from '../../widget/frosty/frosty.module';

@NgModule({
  declarations: [DesktopPageComponent, PcViewportComponent, LockScreenComponent, HomeScreenComponent],
  imports: [
    CommonModule,
    DesktopRoutingModule,
    FrostyModule
  ]
})
export class DesktopModule { }
