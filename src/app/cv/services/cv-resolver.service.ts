// cv-resolver.service.ts

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs';
import {Cv} from "../model/cv";
import {CvService} from "./cv.service"; // Replace with the actual path

@Injectable({
  providedIn: 'root',
})
export class CvResolver implements Resolve<Cv | null> {
  constructor(private cvService: CvService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cv | null> {
    const id:string = route.params['id'];

    return this.cvService.getCvById(id).pipe(
      map((cv) => cv as Cv),
      catchError((error) => {
        console.error('An error occurred while fetching data:', error);
        // You can navigate to an error page or handle the error in another way
        return of(null);
      })
    );
  }
}
