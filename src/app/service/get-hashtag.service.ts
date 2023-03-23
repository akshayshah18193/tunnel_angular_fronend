import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import{Hashtag} from '../Hashtag'

@Injectable({
  providedIn: 'root'
})
export class GetHashtagService {
gethashtagEndpoint:string;
  constructor(private http:HttpClient) { 
    this.gethashtagEndpoint='http://127.0.0.1:5000/hashgrab/'
  }

  getHashTags(hahskey:string): Observable<Array<Hashtag>> {
    let  headers= new HttpHeaders();
    headers.set('content-type', 'application/json')
    
    console.log(headers);
    const url =`${this.gethashtagEndpoint}${hahskey}`;
    return this.http.get<Array<Hashtag>>(url,{headers});
}

}