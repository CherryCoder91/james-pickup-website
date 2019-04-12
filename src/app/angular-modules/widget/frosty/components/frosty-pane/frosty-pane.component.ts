import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-frosty-pane',
  templateUrl: './frosty-pane.component.html',
  styleUrls: ['./frosty-pane.component.scss']
})
export class FrostyPaneComponent implements OnInit {

  @Input()
  public imageUrl = '';

  constructor() { }

  ngOnInit() {
  }

}
