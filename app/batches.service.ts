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
            .get<Batch[]>('https://jsonplaceholder.typicode.com/posts?userId=1');
    }
}