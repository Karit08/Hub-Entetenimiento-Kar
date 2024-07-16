import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private seriesUrl = '../../assets/data/series.json';

  constructor(private http: HttpClient) { }

  getSeries(): Observable<any> {
    return this.http.get<any>(this.seriesUrl);
  }
}
