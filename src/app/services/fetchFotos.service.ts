import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { fotosRequestResponse } from '../models/fotosRequestRespone.model';

@Injectable({
    providedIn: 'root',
  })
export class fetchFotosService{
    
    private _url: string ='assets/data/response.json'

    constructor(private http: Http){ }
        
        getFotos(){
            return this.http.get(this._url)
            ; 
        }
    }