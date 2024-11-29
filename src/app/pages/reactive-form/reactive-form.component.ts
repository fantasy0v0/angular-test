import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    console.log(this.formGroup.value);
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }
    alert('提交成功');
  }

}
