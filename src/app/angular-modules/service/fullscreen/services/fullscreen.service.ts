import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullscreenService {

  constructor() { }

  public enterFullscreen(element: ElementRef<HTMLElement>) {
    if (element['requestFullscreen']) {
      element['requestFullscreen']();
    } else if (element['mozRequestFullScreen']) {
      element['mozRequestFullScreen']();
    } else if (element['webkitRequestFullscreen']) {
      element['webkitRequestFullscreen'](element['ALLOW_KEYBOARD_INPUT']);
    } else if (element['msRequestFullscreen']) {
      element['msRequestFullscreen']();
    }
  }

  public deviceSupportsFullscreenRequest(element: ElementRef<HTMLElement>): boolean {
    return (element.nativeElement['requestFullscreen']
      || element.nativeElement['mozRequestFullScreen']
      || element.nativeElement['webkitRequestFullscreen']
      || element.nativeElement['msRequestFullscreen']);
  }
}
