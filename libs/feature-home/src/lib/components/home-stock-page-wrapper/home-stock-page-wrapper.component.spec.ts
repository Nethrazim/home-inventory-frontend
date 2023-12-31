import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeStockPageWrapperComponent } from './home-stock-page-wrapper.component';

describe('HomeStockPageWrapperComponent', () => {
  let component: HomeStockPageWrapperComponent;
  let fixture: ComponentFixture<HomeStockPageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeStockPageWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeStockPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
