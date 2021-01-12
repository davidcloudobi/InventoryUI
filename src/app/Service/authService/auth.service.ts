import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from 'src/app/common/app-error/app-error.component';
import { BadInput } from '../../common/bad-input/bad-input';
import { LoginUser, UserObj, BusinessObj } from '../../Interface/interface';
import { NotFound } from '../../common/not-found/not-found';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user: UserObj;
business: BusinessObj;
url = 'https://localhost:5001/';
  constructor(private http: HttpClient) { }
setUser(business: BusinessObj): void{
this.business = business;
console.log(this.business);

}

  loginBusiness(name: string): any{
   return  this.http.get<BusinessObj>(`${this.url}Business/name/${name}`)
   .pipe(
     map(data => {
      const businessObj: BusinessObj = data;
      if (businessObj && businessObj.id){
        localStorage.setItem('businessId', businessObj.id);
        // localStorage.setItem('access_token', res.access_token);
      }
      return businessObj;
     }),
    catchError(this.handleError)
   );
  }
  // isBusinessLogIn(){

  // }

  loginUser(emailObj: string, passwordObj: string): any{
    const loginObj: LoginUser  = { email: emailObj, password: passwordObj};
  //  const loginObj: LoginUser  = {
  //   email: 'davidcloudobi@gmail.com',
  //   password: 'Tochukwu_95'
  // };
    const businessId = localStorage.getItem('businessId');

    console.log(loginObj);
    return this.http.post<UserObj>(`${this.url}Auth/login/${businessId ?? this.business.id}`, JSON.stringify(loginObj), httpOptions)
    .pipe(
      map(data => {
        localStorage.setItem('access_token', data.token);
        this.user = data;
        localStorage.setItem('user', JSON.stringify(this.user));
        return data;
      }),
      catchError(this.handleError)
    );
  }

  isLoggedIn(): boolean{
   const localUser = localStorage.getItem('user');
   const user: UserObj = JSON.parse(localUser);
   if (user && user.token) {
      return true;
    }
   return false;
  }

  private handleError(error: Response): any {
    if (error.status === 400) {
       return throwError(new BadInput(error));
     }
    if (error.status === 404) {
       return throwError(new NotFound(error));
     }
    return throwError(new AppError(error));
 }
}
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
