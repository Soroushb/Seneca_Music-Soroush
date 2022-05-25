import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegisterUser } from '../RegisterUser';
@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  constructor(private auth: AuthService) { }
   
  public registerUser: RegisterUser = {
  userName: "",
  password: "",
  password2: ""
  }
  public warning: string;
  public success: boolean = false;
  public loading: boolean = false;

 
  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.registerUser.password !== this.registerUser.password2) {
      this.warning = 'passwords must match';
    }
    if (
      this.registerUser.userName !== '' &&
      this.registerUser.password === this.registerUser.password2
    ) {
      // valid
      this.loading = true;
      this.auth.register(this.registerUser).subscribe(
        () => {
          this.success = true;
          this.warning = null;
          this.loading = false;
        },
        (error) => {
          this.success = false;
          this.warning = error.error.message;
          this.loading = false;
        }
      );
    }
  }
}
