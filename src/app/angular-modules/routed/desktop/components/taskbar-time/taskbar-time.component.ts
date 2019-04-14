import { Component, OnInit, ViewChild, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-taskbar-time',
  templateUrl: './taskbar-time.component.html',
  styleUrls: ['./taskbar-time.component.scss']
})
export class TaskbarTimeComponent implements OnInit, OnDestroy {

  @ViewChild("dateTime") dateTimeElement: ElementRef;

  currentDateTime: number;
  timerSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscribeToTimeUpdate();
    this.setFontSizeToFitCurrentHeightOfCotnainerAndVerticalCenter();
  }

  private subscribeToTimeUpdate() {
    const oneSecond = 1000;
    this.currentDateTime = Date.now();
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.timerSubscription = timer(oneSecond).subscribe(() => this.subscribeToTimeUpdate());
  }

  @HostListener('window:resize', ['$event'])
  setFontSizeToFitCurrentHeightOfCotnainerAndVerticalCenter(): void {
    const timeContainer = (this.dateTimeElement.nativeElement as HTMLDivElement);
    const height = timeContainer.clientHeight;
    const newFontSize = (height * 0.7);
    timeContainer.style.fontSize = `${newFontSize}px`;
    timeContainer.style.lineHeight = `${height}px`;
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

}
