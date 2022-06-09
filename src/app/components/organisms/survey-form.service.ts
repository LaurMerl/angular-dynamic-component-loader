import { Injectable } from '@angular/core';

import { RadioButtonComponent } from '../atoms/radio-button.component';
import { OpenQuestionComponent } from '../atoms/open-question.component';
import { StepItem } from '../molecules/step/step-item';

@Injectable()
export class FormService {
  composeForm() {
    return [
      new StepItem(
        OpenQuestionComponent,
        { title: 'Open question n1?'}
      ),
      new StepItem(
        OpenQuestionComponent,
        { title: 'Open question n2?'}
      ),
      new StepItem(
        RadioButtonComponent,
        { title: 'Hey, check those options!',
          choiches: ['opt1', 'opt2', 'opt3', 'opt4']
        }
      ),
      new StepItem(
        RadioButtonComponent,
        { title: 'Hey, check those other options!',
          choiches: ['opt5', 'opt6', 'opt7', 'opt8']
        }
      )
    ];
  }
}
