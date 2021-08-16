import { Component, OnInit } from '@angular/core';

import { QuestionService } from './forms/reactive/question/question.service';
import { QuestionBase } from './forms/reactive/question/question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent implements OnInit {
  title = 'angular-io';

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit() {
    console.log("in ngOnInit -- commit from github");
  }

  callPhone(e: number) {
    console.log('e - ', e);
  }

}
