import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ERROR_MESSAGES } from 'src/app/shared/constants/error-messages';
import { LABELS } from 'src/app/shared/constants/labels';
import { REGEXP } from 'src/app/shared/constants/regexp';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  public signUpForm!: FormGroup;
  public labels = LABELS;
  public errors = ERROR_MESSAGES;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.initSubscriptions();
  }

  private initForm(): void {
    this.signUpForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(REGEXP.email)]],
      password1: [null, [Validators.required, Validators.pattern(REGEXP.password_length)]],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      password2: [null]
    })
  }

  private initSubscriptions(): void {
    this.signUpForm.valueChanges
      .subscribe( () => {
        const password1 = this.signUpForm.value.password1;
        const password2 = this.signUpForm.value.password2;
        password1 !== password2 ? this.signUpForm.controls['password2'].setErrors({'passwords_equal': true}) : null;
      });

  }

}
