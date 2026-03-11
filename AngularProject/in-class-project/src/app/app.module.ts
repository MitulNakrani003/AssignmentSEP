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

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    BasicFormReactiveComponent,
    FormDirectivesComponentComponent,
    TaskListComponent,
    ColorChangeDirective
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
