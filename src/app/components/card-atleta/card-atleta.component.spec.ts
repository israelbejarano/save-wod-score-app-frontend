import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardAtletaComponent } from './card-atleta.component';

describe('CardAtletaComponent', () => {
  let component: CardAtletaComponent;
  let fixture: ComponentFixture<CardAtletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAtletaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
