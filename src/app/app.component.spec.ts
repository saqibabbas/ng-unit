import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppService } from './app.service';
import { of } from 'rxjs';
import { data } from './app.mock.spec';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let appService: AppService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers:[AppService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    appService = TestBed.get(AppService);
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ng-unit'`, () => {
    expect(component.title).toEqual('ng-unit');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ng-unit!');
  });


  it('should add two numbers', () => {
    const addition=component.add(1,1);
    expect(addition).toBe(2);
  });

  it('should set isSubmitted true on onSubmit', () => {
    expect(component.isSubmitted).toBeFalsy();
    component.onSubmit();
    expect(component.isSubmitted).toBeTruthy();
  });
  
  it('spy should work for methods', () => {
    spyOn(component, 'add');
    spyOn(component, 'subtract');
    component.onSubmit();
    expect(component.add).toHaveBeenCalled();
    expect(component.subtract).toHaveBeenCalled();
  });

  it('spy should return mocked data for methods', () => {
    spyOn(appService, 'get').and.returnValue(of(Array(4).fill(data)));
    component.someBusiness();
    expect(component.data).toBeTruthy();
  });

});
