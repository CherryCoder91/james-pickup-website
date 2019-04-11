import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopRoutingModule } from './desktop-routing.module';
import { DesktopPageComponent } from './components/desktop-page/desktop-page.component';
import { PcViewportComponent } from './components/pc-viewport/pc-viewport.component';

@NgModule({
  declarations: [DesktopPageComponent, PcViewportComponent],
  imports: [
    CommonModule,
    DesktopRoutingModule
  ]
})
export class DesktopModule { }
