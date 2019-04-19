import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Component, NgZone } from '@angular/core';
import { Batch } from "./batch.model";

@Injectable()
export class BatchesService {

    constructor(private http: HttpClient) { }

    public load(): Observable<Batch[]> {
        return this.http
            .get<Batch[]>('http://wefindnow.com:8443/user/getRecord');
    }

    
    public add(data): Observable<any> {
        alert("hi hie");
        //return this.http
       //     .get<Batch[]>('https://jsonplaceholder.typicode.com/posts?userId=1');

            var content_data = JSON.parse(JSON.stringify(data));
            //console.log(content_data);
          //  return this.http.post('http://wefindnow.com:8443/user/insertRecord?companyname='+data.companyname+'&phonenumber='+data.phonenumber,content_data);
            return this.http.post('http://wefindnow.com:8443/user/insertRecord?companyname='+data.companyname+'&phonenumber='+data.phonenumber,content_data);

    }

        
    public update(data): Observable<any> {
        alert("hi hie="+data.companyname);
       

            var content_data = JSON.parse(JSON.stringify(data));
           
            return this.http.post('http://wefindnow.com:8443/user/insertRecord?companyname='+data.companyname+'&phonenumber='+data.phonenumber+'&_id='+data.id,content_data);

    }

        
    public delete(id): Observable<any> {
        alert("hi hie");
        //return this.http
       //     .get<Batch[]>('https://jsonplaceholder.typicode.com/posts?userId=1');

          //  var content_data = JSON.parse(JSON.stringify(id));
            //console.log(content_data);
           // user_id= id;
           // alert(id);
            return this.http.post('http://wefindnow.com:8443/user/deleteRecord?user_id='+id,id);
    }
}  