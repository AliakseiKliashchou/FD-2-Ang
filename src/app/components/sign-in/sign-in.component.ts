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
  public isFormValid: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.initSubscriptions();
  }

  private initForm(): void {
    this.signInForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(REGEXP.email)]],
      password: [null, [Validators.required, Validators.pattern(REGEXP.password_length)]]
    });
  }

  private initSubscriptions(): void {
    this.signInForm.valueChanges
      .subscribe( () => this.isFormValid = this.signInForm.valid);
  }

}
