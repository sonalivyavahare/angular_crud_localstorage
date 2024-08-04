import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmploeeComponent } from './add-emploee.component';

describe('AddEmploeeComponent', () => {
  let component: AddEmploeeComponent;
  let fixture: ComponentFixture<AddEmploeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmploeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEmploeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
