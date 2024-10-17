import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengpruebaComponent } from './primengprueba.component';

describe('PrimengpruebaComponent', () => {
  let component: PrimengpruebaComponent;
  let fixture: ComponentFixture<PrimengpruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengpruebaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengpruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
