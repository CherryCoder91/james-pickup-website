import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrostyPaneComponent } from './components/frosty-pane/frosty-pane.component';

@NgModule({
  declarations: [FrostyPaneComponent],
  imports: [
    CommonModule
  ],
  exports: [FrostyPaneComponent]
})
export class FrostyModule { }
