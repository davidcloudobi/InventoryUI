import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/authService/auth.service';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AppError } from 'src/app/common/app-error/app-error.component';
import { BadInput } from 'src/app/common/bad-input/bad-input';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from 'src/app/error/error.component';
@Component({
  selector: 'app-business-login',
  templateUrl: './business-login.component.html',
  styleUrls: ['./business-login.component.css']
})
export class BusinessLoginComponent implements OnInit {
myForm: FormGroup;
// name: string;
isValid = false;
  constructor(private service: AuthService, private router: Router, private fb: FormBuilder, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup): void {
    if (form.valid) {
          this.service.loginBusiness(form.value.name)
    .subscribe(arg => {
      console.log(arg);
      if (arg){
        this.service.setUser(arg);
        this.isValid = true;
      }
      if (this.isValid) {
        this.router.navigate(['/user/login']);
      }
      else{
        this.myForm.reset(this.myForm.value);
        alert('Invalid Login');
      }
    }, (error: AppError) => {
      this.myForm.reset();
      this.dialog.open(ErrorComponent, {
        data: { error: error.originalError.error.message},
      });
      // console.log(error.originalError.error.message);
        // if (error instanceof BadInput) {
        //  alert('Invalid Details')
         // this.form.setErrors(error.originalError)
        // }
     // else{
        // throw error;
        // alert('Invalid Details')
      // }
      });
   }
  }

  // submit(): any{
  //  if (this.name && this.name.length > 0) {
  //   this.service.loginBusiness(this.name)
  //   .subscribe(arg => {
  //     console.log(arg);
  //     if (arg){
  //     this.isValid = true;
  //     }
  //     if (this.isValid) {
  //       this.router.navigate(['/user/login']);
  //     }
  //     else{
  //       this.name = '';
  //       alert('Invalid Login');
  //     }
  //   });
  //  }

  // }

}
