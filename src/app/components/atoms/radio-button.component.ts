import { Component, Input } from '@angular/core';

import { InternalStepComponent } from '../molecules/step/internal-step.component';

@Component({
  template: `
    <div>
      <h3>{{data.title}}</h3>

      <section>
        <div *ngFor="let item of data.choiches">
          <input type="radio" id={{item}} name={{item}} value={{item}}>
          <label for={{item}}>{{item}}</label>
          <br><br>
        </div>
      </section>
    </div>
  `
})
export class RadioButtonComponent implements InternalStepComponent {
  @Input() data: any;
}

