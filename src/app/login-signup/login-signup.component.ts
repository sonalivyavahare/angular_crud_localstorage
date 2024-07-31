import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css',
})
export class LoginSignupComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  form = 'register';
  isUserRegisterd: boolean = false;

  toggleForm(form1: any) {
    this.form = form1;
  }

  register(form: any) {
    const newUser = form.value;
    let users: any = localStorage.getItem('users');
    if (users != null) {
      let localUser = JSON.parse(users);
      localUser.push(newUser);
      localStorage.setItem('users', JSON.stringify(localUser));
      this.isUserRegisterd = true;
      this.router.navigateByUrl('/login');
    } else {
      const user: any = [];
      user.push(newUser);
      localStorage.setItem('users', JSON.stringify(user));
      this.isUserRegisterd = true;
      this.router.navigateByUrl('/login');
    }
  }
}
