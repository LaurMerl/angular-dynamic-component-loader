import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RadioButtonComponent } from './components/atoms/radio-button.component';
import { StepComponent } from './components/molecules/step/step.component';
import { OpenQuestionComponent } from './components/atoms/open-question.component';
import { StepDirective } from './components/molecules/step/step.directive';
import { FormService } from './components/organisms/survey-form.service';

@NgModule({
  imports: [ BrowserModule ],
  providers: [ FormService ],
  declarations: [
    AppComponent,
    StepComponent,
    RadioButtonComponent,
    OpenQuestionComponent,
    StepDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

