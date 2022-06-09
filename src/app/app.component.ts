import { Component, OnInit } from '@angular/core';

import { FormService } from './components/organisms/survey-form.service';
import { StepItem } from './components/molecules/step/step-item';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-form [steps]="steps"></app-form>
    </div>
  `
})
export class AppComponent implements OnInit {
  steps: StepItem[] = [];

  constructor(private adService: FormService) {}

  ngOnInit() {
    this.steps = this.adService.composeForm();
  }
}

/*******************************************************
 *  Heavily inspired by:                               *
 *  https://angular.io/guide/dynamic-component-loader  *
 *                                                     *  
*******************************************************/