import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HioCardComponent } from './hio-card.component';

describe('HioCardComponent', () => {
  let component: HioCardComponent;
  let fixture: ComponentFixture<HioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HioCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
