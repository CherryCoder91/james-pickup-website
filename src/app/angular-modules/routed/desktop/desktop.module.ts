import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopRoutingModule } from './desktop-routing.module';
import { DesktopPageComponent } from './components/desktop-page/desktop-page.component';
import { PcViewportComponent } from './components/pc-viewport/pc-viewport.component';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { FrostyModule } from '../../widget/frosty/frosty.module';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { TaskbarAppleComponent } from './components/taskbar-apple/taskbar-apple.component';

@NgModule({
  declarations: [DesktopPageComponent, PcViewportComponent, LockScreenComponent, HomeScreenComponent, TaskbarComponent, TaskbarAppleComponent],
  imports: [
    CommonModule,
    DesktopRoutingModule,
    FrostyModule
  ]
})
export class DesktopModule { }
