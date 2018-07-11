import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PopupService } from '../shared/popup.service';
import { GameService } from './game.service';

describe('AppComponent', () => {
  let fixture, comp, popup;
  const popupServiceStub = {
    open: () => {}
  };
  const gameServiceStub = {
    getGames: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {'provide': PopupService, 'useValue': popupServiceStub},
        {'provide': GameService, 'useValue': gameServiceStub},
       ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    popup = TestBed.get(PopupService);
  }));

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    expect(comp.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    comp.title = 'angular-tests!';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-tests!');
  }));
  it('should called open', () => {
    const openSpy = spyOn(popup, 'open');
    fixture.detectChanges();
    expect(openSpy).toHaveBeenCalled();
  });
});
