import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullscreenService {

  constructor() { }

  public enterFullscreen(element: ElementRef<HTMLElement>) {
    // tslint:disable-next-line: no-string-literal
    if (element['requestFullscreen']) {
      // tslint:disable-next-line: no-string-literal
      element['requestFullscreen']();
      // tslint:disable-next-line: no-string-literal
    } else if (element['mozRequestFullScreen']) {
      // tslint:disable-next-line: no-string-literal
      element['mozRequestFullScreen']();
      // tslint:disable-next-line: no-string-literal
    } else if (element['webkitRequestFullscreen']) {
      // tslint:disable-next-line: no-string-literal
      element['webkitRequestFullscreen'](element['ALLOW_KEYBOARD_INPUT']);
      // tslint:disable-next-line: no-string-literal
    } else if (element['msRequestFullscreen']) {
      // tslint:disable-next-line: no-string-literal
      element['msRequestFullscreen']();
    }
  }

  public deviceSupportsFullscreenRequest(element: ElementRef<HTMLElement>): boolean {
    // tslint:disable-next-line: no-string-literal
    return (element.nativeElement['requestFullscreen']
      // tslint:disable-next-line: no-string-literal
      || element.nativeElement['mozRequestFullScreen']
      // tslint:disable-next-line: no-string-literal
      || element.nativeElement['webkitRequestFullscreen']
      // tslint:disable-next-line: no-string-literal
      || element.nativeElement['msRequestFullscreen']);
  }
}
