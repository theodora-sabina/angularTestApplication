import { IVinyl } from './vinyl'
import { HttpClient } from '@angular/common/http'; //vreau ca Angular sa furnizeze o instanta a serviciului HttpClient
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'; // pentru error handling
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})    
export class VinylService {
    private vinylUrl = 'api/vinyls/vinyls.json'; //locatia serverului web, citesc dintr-un fisier local json 
                        // trebuie sa definesc locatia fisierului json( in angular.json in assets array) pt ca CLI sa il gaseasca la serve
    constructor(private http: HttpClient){}  //Angular va injecta instanta serviciului HttpClient in variabila http 

    getVinyls() : Observable<IVinyl[]> {    //am sters datele hardcodate, acum le iau din json-ul local 
        return this.http.get<IVinyl[]>(this.vinylUrl).pipe(
            tap(data=> console.log( JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
        private handleError(err: HttpErrorResponse) {
            let errorMessage ='';
            if(err.error instanceof ErrorEvent) {
              errorMessage = 'An error occurred';
            } else {
                errorMessage = 'Server returned code';
            }
            console.error(errorMessage);
            return throwError(errorMessage);
        }

    }

