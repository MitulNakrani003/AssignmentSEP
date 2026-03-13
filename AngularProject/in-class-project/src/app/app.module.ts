import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { BasicFormReactiveComponent } from './basic-form-reactive/basic-form-reactive.component';
import { FormDirectivesComponentComponent } from './form-directives-component/form-directives-component.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ColorChangeDirective } from './color-change.directive';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { ReplaceLongStringsPipe } from './replace-long-strings.pipe';
import { CommunicationComponentComponent } from './communication-component/communication-component.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    BasicFormReactiveComponent,
    FormDirectivesComponentComponent,
    TaskListComponent,
    ColorChangeDirective,
    PipeComponentComponent,
    ReplaceLongStringsPipe,
    CommunicationComponentComponent,
    FlightBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
