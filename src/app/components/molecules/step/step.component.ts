import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { StepDirective } from './step.directive';
import { StepItem } from './step-item';
import { InternalStepComponent } from './internal-step.component';

@Component({
  selector: 'app-form',
  template: `
    <div class="step-container">
      <h3>This is a shared title!</h3>
      <ng-template stepHost></ng-template>
      <button (click)=loadPreviousComponent()>Previous</button>
      <button (click)=loadNextComponent()>Next</button>
    </div>
  `
})
export class StepComponent implements OnInit {
  @Input() steps: StepItem[] = [];

  currentStepIndex = -1;

  @ViewChild(StepDirective, {static: true}) stepHost!: StepDirective;

  ngOnInit(): void {
    this.loadNextComponent();
  }

  loadNextComponent() {
    this.currentStepIndex = (this.currentStepIndex + 1) % this.steps.length;
    const stepItem = this.steps[this.currentStepIndex];

    const viewContainerRef = this.stepHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<InternalStepComponent>(stepItem.component);
    componentRef.instance.data = stepItem.data;
  }

  loadPreviousComponent() {
    this.currentStepIndex = this.currentStepIndex === 0
      ? this.currentStepIndex
      : (this.currentStepIndex - 1) % this.steps.length;
    const stepItem = this.steps[this.currentStepIndex];

    const viewContainerRef = this.stepHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<InternalStepComponent>(stepItem.component);
    componentRef.instance.data = stepItem.data;
  }
}
