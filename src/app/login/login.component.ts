import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  login(form: any) {
    const user = form.value;
    const users = localStorage.getItem('users');
    if (users != null) {
      const usersArray = JSON.parse(users);
      let isFound = usersArray.find((u: any) => {
        return u.username == user.username && u.password == user.password;
      });
      console.log(isFound);
      if (isFound != undefined) {
        this.router.navigateByUrl('dashboard');
      } else {
        alert('not Found');
      }
    }
  }
}
