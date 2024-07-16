import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HomeService } from '../../service/home.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Movie } from 'src/app/core/models/movie.model';
import { Serie } from 'src/app/core/models/series.model';
import { DetailsComponent } from '@shared/components/details/details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HttpClientModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  providers: []
})
export class HomePageComponent implements OnInit{

  movies: Movie[] = [];
  series: Serie[] = [];

  constructor(private homeService: HomeService, public dialog: MatDialog) { }

  ngOnInit() {
    this.homeService.getItems().subscribe(data => {
      this.movies = data.movies;
      this.series = data.series;
    });
  }

  openDialog(item: Movie | Serie): void {
    this.dialog.open(DetailsComponent, {
      width: '800px',
      data: item
    });
  }
}
