import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  
  private moviesUrl = '../../assets/data/movies.json';
  private seriesUrl = '../../assets/data/series.json';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(this.moviesUrl);
  }

  getSeries(): Observable<any> {
    return this.http.get<any>(this.seriesUrl);
  }

  getGenres(): Observable<{ [key: string]: any[] }> {
    return new Observable(observer => {
      let genres: { [key: string]: any[] } = {};

      this.getMovies().subscribe(movies => {
        this.groupByGenre(movies, genres);
        this.getSeries().subscribe(series => {
          this.groupByGenre(series, genres);
          observer.next(genres);
          observer.complete();
        });
      });
    });
  }

  private groupByGenre(items: any[], genres: { [key: string]: any[] }): void {
    items.forEach(item => {
      if (item.genre) {
        if (!genres[item.genre]) {
          genres[item.genre] = [];
        }
        genres[item.genre].push(item);
      }
    });
  }
}
