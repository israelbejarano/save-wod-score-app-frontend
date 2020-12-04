import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuzonSugerenciasComponent } from './buzon-sugerencias.component';

describe('BuzonSugerenciasComponent', () => {
  let component: BuzonSugerenciasComponent;
  let fixture: ComponentFixture<BuzonSugerenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzonSugerenciasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuzonSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
