import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpendingsPageWrapperComponent } from './spendings-page-wrapper.component';

describe('SpendingsPageWrapperComponent', () => {
  let component: SpendingsPageWrapperComponent;
  let fixture: ComponentFixture<SpendingsPageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpendingsPageWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpendingsPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
