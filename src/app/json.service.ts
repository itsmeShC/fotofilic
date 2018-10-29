import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { fotosUpload } from './fotos';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JasonService{
    
    private _url: string ="assets/data/response.json"

    constructor(private http: Http){ }
        
        getFotos(): Observable<fotosUpload[]>{
            return this.http.get<fotosUpload[]>(this._url); 
        }
    }