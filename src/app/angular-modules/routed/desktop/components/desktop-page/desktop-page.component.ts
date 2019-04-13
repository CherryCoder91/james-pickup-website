import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FullscreenService } from 'src/app/angular-modules/service/fullscreen/services/fullscreen.service';
import { element } from 'protractor';

@Component({
  selector: 'app-desktop-page',
  templateUrl: './desktop-page.component.html',
  styleUrls: ['./desktop-page.component.scss']
})
export class DesktopPageComponent implements OnInit {

  @ViewChild('pcViewport') pcViewport: ElementRef<HTMLElement>;

  public shouldShowFullScreenButton: boolean;

  constructor(private readonly fullscreenService: FullscreenService) { }

  ngOnInit() {
    this.shouldShowFullScreenButton = this.deviceSupportsFullscreenRequest(this.pcViewport);
  }

  public enterFullscreen(element: ElementRef<HTMLElement>) {
    this.fullscreenService.enterFullscreen(element);
  }

  private deviceSupportsFullscreenRequest(element: ElementRef<HTMLElement>): boolean {
    return this.fullscreenService.deviceSupportsFullscreenRequest(element);
  }
}
