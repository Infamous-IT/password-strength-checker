import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrength: string = '';

  checkPasswordStrength() {
    const password = this.password;

    if (password.length === 0) {
      this.passwordStrength = 'gray';
    } else if (/([a-zA-Z])\1+/.test(password) || /(\d)\1+/.test(password) || /([!@#$%^&*])\1+/.test(password) || password.length < 8) {
      this.passwordStrength = 'red';
    } else if (/\d/.test(password) && /[a-zA-Z]/.test(password) && /[!@#$%^&*]/.test(password)) {
      this.passwordStrength = 'green';
    } else {
      this.passwordStrength = 'yellow';
    }
  }

}
