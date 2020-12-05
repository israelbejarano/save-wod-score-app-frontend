import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewWodComponent } from './new-wod.component';

describe('NewWodComponent', () => {
  let component: NewWodComponent;
  let fixture: ComponentFixture<NewWodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWodComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewWodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
