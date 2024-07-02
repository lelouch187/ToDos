import { Component, signal} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, ReactiveFormsModule, MatCheckbox
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  hide = signal(true);

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl(false),
    captcha: new FormControl(false)
  })

  clickEvent(event: MouseEvent) {
    event.preventDefault();
    this.hide.update((value)=>!value);
    event.stopPropagation();
  }
}
