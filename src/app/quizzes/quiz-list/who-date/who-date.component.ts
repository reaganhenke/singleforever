import { Component } from '@angular/core';
import { dateQuestions } from './models/who-date.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UIParams, FacebookService, UIResponse } from 'ngx-facebook';

@Component({
  selector: 'app-who-date',
  templateUrl: './who-date.component.html',
  styleUrls: ['./who-date.component.scss', '../../../shared/sharing.scss', '../../quizzes.component.scss']
})
export class WhoDateComponent {

  whoDateForm: FormGroup;
  winner: string;
  questions = dateQuestions;
  copied = false;
  href = 'https://single-forever.netlify.com/';

  constructor(private fb: FacebookService) {
    this.whoDateForm = new FormGroup({});
    dateQuestions.forEach((question) => {
      this.whoDateForm.addControl(question.question, new FormControl('', Validators.required));
    });
  }

  select(i: string, value: string) {
    if (!this.winner && !!value) {
      this.whoDateForm.get(i).setValue(value);
    }
  }

  submit() {
    const selected = Object.values(this.whoDateForm.getRawValue()) as string[];
    let mostOften = selected[0];
    let mostFreq = 0;

    for (const result of selected) {
      let freq = 0;
      for (const cur of selected) {
        if (cur === result) {
          freq++;
        }
      }
      if (freq > mostFreq) {
        mostFreq = freq;
        mostOften = result;
      }
    }

    this.winner = mostOften;
    this.whoDateForm.disable();
  }

  reset() {
    this.winner = undefined;
    this.whoDateForm.reset('');
    this.whoDateForm.enable();

  }

  share() {
    const params: UIParams = {
      href: this.href,
      method: 'share',
      quote: `I got ${this.winner}! See who your dream date is!`
    };
    this.fb.ui(params);
  }

  tweet() {
    const text = `I got ${this.winner}! See who your dream date is! ${this.href}`;
    const href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(this.href);
    window.open(href, '', 'menubar=no, toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  }

  copySuccess() {
    this.copied = true;
    setTimeout(() => this.copied = false, 1000);
  }
}
