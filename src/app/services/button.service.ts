import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  constructor(private http: HttpClient) { }

  getTime() {
    return this.http.get("http://ec2-52-25-83-101.us-west-2.compute.amazonaws.com:8000/api/test/getTime");
  }

}
