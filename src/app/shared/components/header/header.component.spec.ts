import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { GenresService } from '@modules/genres/service/genres.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent
      
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

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
