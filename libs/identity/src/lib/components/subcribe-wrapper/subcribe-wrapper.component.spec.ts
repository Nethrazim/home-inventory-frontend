import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubcribeWrapperComponent } from './subcribe-wrapper.component';

describe('SubcribeWrapperComponent', () => {
  let component: SubcribeWrapperComponent;
  let fixture: ComponentFixture<SubcribeWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubcribeWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubcribeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
