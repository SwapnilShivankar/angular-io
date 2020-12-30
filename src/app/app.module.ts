import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildAComponent } from './first/child-a/child-a.component';
import { ChildBComponent } from './first/child-b/child-b.component';
import { AdminModule } from './admin/admin.module';
import { SpyDirective } from './directives/spy.directive';
import { Pane, ViewChildComp } from './directives/pane.component'
import { SquarePipe } from './pipes/square.pipe';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFavouriteColorComponent } from './forms/reactive/reactive-favourite-color/reactive-favourite-color.component';
import { NameEditorComponent } from './forms/reactive/name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { DynamicFormComponent } from './forms/reactive/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './forms/reactive/dynamic-form-question/dynamic-form-question.component';
import { QuestionService } from './forms/reactive/question/question.service';
import { QuestionControlService } from './forms/reactive/question/question-control.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
    ChildAComponent,
    ChildBComponent,
    SpyDirective,
    Pane,
    ViewChildComp,
    SquarePipe,
    ExponentialStrengthPipe,
    ReactiveFavouriteColorComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    QuestionService,
    QuestionControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
