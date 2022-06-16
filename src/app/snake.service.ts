import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnakeService {

  endpoint:string = 'http://localhost/snake/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  

  getallsnakes() 
  {
    return this.httpClient.get(this.endpoint+'master/sample.php?modules=snake').pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  uploadImage(data:any)
  {
    return this.httpClient.post(this.endpoint+'services/file_upload.php?iden=mobileUpload',data).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  registerClient(path,data)
  {
    return this.httpClient.post(this.endpoint+'auth/'+path,data).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  sendotp(email)
  {
    var data = {
      "email":email
    };
    return this.httpClient.post(this.endpoint+'auth/verifyotp.php?identifier=sendOTP',data).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  verifyotp(email,otp)
  {
    var data = {
      "email":email,
      "otp":otp
    };
    return this.httpClient.post(this.endpoint+'auth/verifyotp.php?identifier=verifyOTP',data).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  loginRescuser(data)
  {
    return this.httpClient.post(this.endpoint+'auth/rescuerLogin.php',data).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  loginUser(data)
  {
    return this.httpClient.post(this.endpoint+'auth/userLogin.php',data).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  activeRescuerLatLong(id,data)
  {
    return this.httpClient.post(this.endpoint+'rescuer/activeLatLong.php?id='+id,data).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  getactiverescuer(data)
  {
    return this.httpClient.post(this.endpoint+'rescuer/approvallistDistance.php',data).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }
  
  initiateTrans(data)
  {
    return this.httpClient.post(this.endpoint+'transcation/newtrans.php',data).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  getlistoftranscation(clientrole,id)
  {
    return this.httpClient.get(this.endpoint+'transcation/updationtransactionlist.php?clientType='+clientrole+'&client='+id).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  gettranscation(id)
  {
    return this.httpClient.get(this.endpoint+'transcation/updationtransactionlist.php?id='+id).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  getallhospitals() 
  {
    return this.httpClient.get(this.endpoint+'master/sample.php?modules=hospital').pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  gethospitaldetail(id) 
  {
    return this.httpClient.get(this.endpoint+'master/sample.php?modules=hospital&id='+id).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  getallwildlife() 
  {
    return this.httpClient.get(this.endpoint+'master/sample.php?modules=wildlife').pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  getwildlifedetail(id) 
  {
    return this.httpClient.get(this.endpoint+'master/sample.php?modules=wildlife&id='+id).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  getallusers(status,roleid,clientid) 
  {
    return this.httpClient.get(this.endpoint+'transcation/updationtransactionlist.php?status='+status+'&client='+roleid+'&clientType='+clientid).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  getsnakedetail(id) 
  {
    return this.httpClient.get(this.endpoint+'master/sample.php?modules=snake&id='+id).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  posttranscation(data)
  {
    return this.httpClient.post(this.endpoint+'transcation/transrescuer.php?id=1',data).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  getallevents() 
  {
    return this.httpClient.get(this.endpoint+'master/sample.php?modules=events').pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  geteventdetail(id) 
  {
    return this.httpClient.get(this.endpoint+'master/sample.php?modules=events&id='+id).pipe(
      tap(_ => console.log()),
      catchError(this.handleError('Delete user'))
    );
  }

  sendmail(email,otp)
  {
    var data = {
      "email":email,
      "otp":otp
    };
    return this.httpClient.get('https://treacel.000webhostapp.com/sendmail.php?email='+email+'&otp='+otp).pipe(
      tap(_ => console.log("asdsd")),
      catchError(this.handleError('Delete user'))
    );
  }
}
