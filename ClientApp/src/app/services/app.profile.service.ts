import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ProfileMaster } from '../models/app.models';

@Injectable({
    providedIn:'root'
})
export class ProfileService {
   private baseUrl: string
    constructor(private http: HttpClient) {
        this.baseUrl = 'http://localhost:5000';
    }

    getProfiles(): Observable<ProfileMaster[]> {
        let response: Observable<ProfileMaster[]> = null;
        response = this.http.get<ProfileMaster[]>(`${this.baseUrl}/api/Profiles`);
        return response;
    }

    getProfile(id:string): Observable<ProfileMaster> {
        let response: Observable<ProfileMaster> = null;
        response = this.http.get<ProfileMaster>(`${this.baseUrl}/api/Profiles/${id}`);
        return response;
    }

    postProfile(profile: ProfileMaster): Observable<ProfileMaster> {
        let response: Observable<ProfileMaster> = null;
        profile.Id = '00000000-0000-0000-0000-000000000000';
        const options = {
            headers: new HttpHeaders({ 'Content-Type':'application/json'})
        };
        response = this.http.post<ProfileMaster>(`${this.baseUrl}/api/Profiles`,
            profile, options)
            
        return response;
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}
