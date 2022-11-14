import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoEncotradaComponent } from './nao-encotrada.component';

describe('NaoEncotradaComponent', () => {
  let component: NaoEncotradaComponent;
  let fixture: ComponentFixture<NaoEncotradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaoEncotradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaoEncotradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
