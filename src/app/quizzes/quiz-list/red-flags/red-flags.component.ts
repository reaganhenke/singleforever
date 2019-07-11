import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { flagList } from './models/red-flags.model';
import { UIParams, FacebookService, UIResponse } from 'ngx-facebook';

@Component({
  selector: 'app-red-flags',
  templateUrl: './red-flags.component.html',
  styleUrls: ['./red-flags.component.scss', '../../../shared/sharing.scss', '../../quizzes.component.scss']
})
export class RedFlagsComponent {

  redFlagsForm: FormGroup;
  results: number;
  total: number;
  finished = false;
  href = 'asdfkhadfkjhdsflkajhdf.com';
  copied = false;
  heightPercent: string;

  constructor(private fb: FacebookService) {
    this.redFlagsForm = new FormGroup({});
    for (const flag of flagList) {
      this.redFlagsForm.addControl(flag, new FormControl());
    }
    this.total = this.flags.length;
  }

  get flags(): string[] {
    return Object.keys(this.redFlagsForm.controls);
  }

  get percent(): string {
    return Math.floor((this.results / this.total) * 100) + '%';
  }

  submit() {
    console.log(this.redFlagsForm.getRawValue());
    this.results = Object.values(this.redFlagsForm.getRawValue()).filter(val => val).length;
    this.finished = true;
    this.redFlagsForm.disable();
    setTimeout(() => this.heightPercent = this.percent, 10);
  }

  reset() {
    this.finished = false;
    this.redFlagsForm.reset();
    this.redFlagsForm.enable();
  }

  share(url: string) {
    const params: UIParams = {
      href: 'https://github.com/zyra/ngx-facebook',
      method: 'share',
      quote: 'I won!'
    };
    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
  }

  tweet() {
    const text = 'I won the game!';
    const href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(this.href);
    window.open(href, '', 'menubar=no, toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  }

  copySuccess() {
    this.copied = true;
    setTimeout(() => this.copied = false, 1000);
  }
}
