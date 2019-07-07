import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { flagList } from './models/red-flags.model';

@Component({
  selector: 'app-red-flags',
  templateUrl: './red-flags.component.html',
  styleUrls: ['./red-flags.component.scss']
})
export class RedFlagsComponent implements OnInit {

  redFlagsForm: FormGroup;
  results = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.redFlagsForm = this.formBuilder.group({});
    for (const flag of flagList) {
      this.redFlagsForm.addControl(flag, new FormControl());
    }
  }

  get flags(): string[] {
    return Object.keys(this.redFlagsForm.controls);
  }


  submit() {
    console.log(this.redFlagsForm.getRawValue());
  }
}
