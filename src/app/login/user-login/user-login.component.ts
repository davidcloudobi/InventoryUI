import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/authService/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from 'src/app/error/error.component';
import { AppError } from 'src/app/common/app-error/app-error.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  myForm: FormGroup;
  storeName = 'Joe Link';
  hide = true;
  constructor(private service: AuthService, private router: Router,  private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
  this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup): void {
    if (form.valid) {
      this.service.loginUser(form.value.email, form.value.password)
      .subscribe(arg =>
        {
          if (arg) {
              this.router.navigate(['sell']);
          }
        }, (error: AppError) => {
          this.myForm.reset();
          this.dialog.open(ErrorComponent, {
            data: { error: error.originalError.error.message},
          });
          }
         );
    }
  }

  // submit(): void{

  //  if (this.password && this.email) {
  //   this.service.loginUser(this.email, this.password)
  //   .subscribe(arg =>
  //     {
  //       if (arg) {
  //           this.router.navigate(['sell']);
  //       }
  //     }
  //      );
  //  }


  // }

}
