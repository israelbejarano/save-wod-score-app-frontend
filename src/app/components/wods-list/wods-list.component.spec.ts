import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WodsListComponent } from './wods-list.component';

describe('WodsListComponent', () => {
  let component: WodsListComponent;
  let fixture: ComponentFixture<WodsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WodsListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
