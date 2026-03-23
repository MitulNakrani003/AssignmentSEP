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
import { RegisterComponentComponent } from './register-component/register-component.component';
import { HttpIntroComponent } from './http-intro/http-intro.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductComponentComponent } from './product-component/product-component.component';
import { SubjectIntroComponent } from './subject-intro/subject-intro.component';
import { SubjectIntroSecondComponent } from './subject-intro-second/subject-intro-second.component';
import { StarWarsComponent } from './star-wars/star-wars.component';
import { TabComponentComponent } from './tab-component/tab-component.component';
import { TabGroupComponentComponent } from './tab-group-component/tab-group-component.component';
import { JobBoardComponent } from './job-board/job-board.component';

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
    FlightBookingComponent,
    RegisterComponentComponent,
    HttpIntroComponent,
    ProductComponentComponent,
    SubjectIntroComponent,
    SubjectIntroSecondComponent,
    StarWarsComponent,
    TabComponentComponent,
    TabGroupComponentComponent,
    JobBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
