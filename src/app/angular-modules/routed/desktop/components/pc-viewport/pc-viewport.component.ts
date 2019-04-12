import { Component, OnInit } from '@angular/core';
import { LoginStateService } from 'src/app/angular-modules/service/os-services/services/login-state.service';

@Component({
  selector: 'app-pc-viewport',
  templateUrl: './pc-viewport.component.html',
  styleUrls: ['./pc-viewport.component.scss']
})
export class PcViewportComponent implements OnInit {

  constructor(private loginStateService: LoginStateService) { }

  ngOnInit() {
  }

}
