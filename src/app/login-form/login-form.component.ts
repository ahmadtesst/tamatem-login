import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, FormsModule, NgIf],
  standalone: true
})

export class LoginFormComponent {
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    alert('Login successful');
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
  });

  str(val:any){
    return JSON.stringify(val);
  }
}
