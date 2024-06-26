import {Component, Input, signal} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  hide = signal(true);

  clickEvent(event: MouseEvent) {
    event.preventDefault();
    this.hide.update((value)=>!value);
    event.stopPropagation();
  }
}
