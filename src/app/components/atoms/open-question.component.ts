import { Component, Input } from '@angular/core';

import { InternalStepComponent } from '../molecules/step/internal-step.component';

@Component({
  template: `
    <div>
      <h3>{{data.title}}</h3>
      <input name="name" type="text" required>
    </div>
  `
})
export class OpenQuestionComponent implements InternalStepComponent {
  @Input() data: any;
}


