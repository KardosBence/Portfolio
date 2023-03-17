import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektekComponent } from './projektek.component';

describe('ProjektekComponent', () => {
  let component: ProjektekComponent;
  let fixture: ComponentFixture<ProjektekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjektekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
