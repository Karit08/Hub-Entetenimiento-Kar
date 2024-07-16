import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { Serie } from 'src/app/core/models/series.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  private moviesUrl = '../../assets/data/movies.json';
  private seriesUrl = '../../assets/data/series.json';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(this.moviesUrl);
  }

  getSeries(): Observable<any> {
    return this.http.get<any>(this.seriesUrl);
  }
  
  getItems(): Observable<{ movies: Movie[], series: Serie[] }> {
    return forkJoin({
      movies: this.getMovies(),
      series: this.getSeries()
    });
  }
}
