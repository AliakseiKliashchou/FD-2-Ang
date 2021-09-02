import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ERROR_MESSAGES } from 'src/app/shared/constants/error-messages';
import { LABELS } from 'src/app/shared/constants/labels';
import { REGEXP } from 'src/app/shared/constants/regexp';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public signInForm: any;
  public labels = LABELS;
  public errors = ERROR_MESSAGES;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.signInForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(REGEXP.email)]],
      password: [null, [Validators.required, Validators.pattern(REGEXP.password_length)]]
    });
  }

}
