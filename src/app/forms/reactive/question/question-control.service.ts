import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { from } from 'rxjs';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
    constructor() { }

    toFormGroup(questions: QuestionBase<string>[]) {
        const group: any = {};

        questions.forEach(question => {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required) : new FormControl(question.value || '');
        });

        return new FormGroup(group);
    }
}