import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMiperfilComponent } from './editar-miperfil.component';

describe('EditarMiperfilComponent', () => {
  let component: EditarMiperfilComponent;
  let fixture: ComponentFixture<EditarMiperfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMiperfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMiperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
