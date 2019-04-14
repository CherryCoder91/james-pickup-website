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
import { TaskbarTimeComponent } from './components/taskbar-time/taskbar-time.component';
import { TaskbarWifiComponent } from './components/taskbar-wifi/taskbar-wifi.component';
import { TaskbarBluetoothComponent } from './components/taskbar-bluetooth/taskbar-bluetooth.component';
import { TaskbarSiriComponent } from './components/taskbar-siri/taskbar-siri.component';
import { TaskbarLocationComponent } from './components/taskbar-location/taskbar-location.component';
import { TaskbarSearchComponent } from './components/taskbar-search/taskbar-search.component';
import { TaskbarBatteryComponent } from './components/taskbar-battery/taskbar-battery.component';
import { TaskbarSpeakerComponent } from './components/taskbar-speaker/taskbar-speaker.component';
import { MusicHotspotModule } from '../../widget/music-hotspot/music-hotspot.module';

@NgModule({
  declarations: [DesktopPageComponent, PcViewportComponent, LockScreenComponent, HomeScreenComponent, TaskbarComponent, TaskbarAppleComponent, TaskbarTimeComponent, TaskbarWifiComponent, TaskbarBluetoothComponent, TaskbarSiriComponent, TaskbarLocationComponent, TaskbarSearchComponent, TaskbarBatteryComponent, TaskbarSpeakerComponent],
  imports: [
    CommonModule,
    DesktopRoutingModule,
    FrostyModule,
    MusicHotspotModule
  ]
})
export class DesktopModule { }
