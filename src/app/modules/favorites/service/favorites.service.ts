import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FavoriteItem } from 'src/app/core/models/shared.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favorites = new BehaviorSubject<FavoriteItem[]>([]);
  favorites$ = this.favorites.asObservable();

  addFavorite(item: FavoriteItem) {
    const currentFavorites = this.favorites.getValue();
    if (!currentFavorites.find(fav => fav.id === item.id)) {
      this.favorites.next([...currentFavorites, item]);
    }
  }

  removeFavorite(itemId: number) {
    const currentFavorites = this.favorites.getValue();
    this.favorites.next(currentFavorites.filter(item => item.id !== itemId));
  }

  getFavorites(): FavoriteItem[] {
    return this.favorites.getValue();
  }
}
