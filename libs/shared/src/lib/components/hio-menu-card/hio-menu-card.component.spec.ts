import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HioMenuCardComponent } from './hio-menu-card.component';

describe('HioMenuCardComponent', () => {
  let component: HioMenuCardComponent;
  let fixture: ComponentFixture<HioMenuCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HioMenuCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HioMenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
