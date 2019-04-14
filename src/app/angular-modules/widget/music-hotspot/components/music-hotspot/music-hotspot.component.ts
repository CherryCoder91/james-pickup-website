import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-music-hotspot',
  templateUrl: './music-hotspot.component.html',
  styleUrls: ['./music-hotspot.component.scss']
})
export class MusicHotspotComponent implements OnInit {

  headphoneAudio: HTMLAudioElement;

  @Input() musicTrackPath: string;

  debug = false;

  constructor() { }

  ngOnInit() {
    this.loadMusicTrack();
  }

  public startMusic() {
    this.headphoneAudio.play();
  }

  public endMusic() {
    this.headphoneAudio.pause();
  }

  private loadMusicTrack() {
    this.headphoneAudio = new Audio(this.musicTrackPath);
  }

}
