import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicHotspotComponent } from './components/music-hotspot/music-hotspot.component';

@NgModule({
  declarations: [MusicHotspotComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MusicHotspotComponent
  ]
})
export class MusicHotspotModule { }
