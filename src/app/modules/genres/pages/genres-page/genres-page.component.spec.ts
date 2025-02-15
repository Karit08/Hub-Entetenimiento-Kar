import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresPageComponent } from './genres-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { GenresService } from '@modules/genres/service/genres.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('GenresPageComponent', () => {
  let component: GenresPageComponent;
  let fixture: ComponentFixture<GenresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenresPageComponent,
        CommonModule,
        HttpClientTestingModule,
        HeaderComponent,
        FooterComponent,
        MatDialogModule
      ],
      providers: [
        GenresService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: (param: string) => null })
          }
        }
      ]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
