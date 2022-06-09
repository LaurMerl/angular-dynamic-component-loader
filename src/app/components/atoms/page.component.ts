import { Component, Input } from '@angular/core';

import { InternalStepComponent } from '../molecules/step/internal-step.component';

@Component({
  template: `
    <div>
      <h3>{{data.title}}</h3>
      <p>{{data.body}}</p>
    </div>
  `
})
export class PageComponent implements InternalStepComponent {
  @Input() data: any;
}

