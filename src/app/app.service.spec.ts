import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let httpController: HttpTestingController;
  let appService: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    })
    httpController = TestBed.get(HttpTestingController);
    appService = TestBed.get(AppService);
  });

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });

  it('GET method should be called in get', () => {
    appService.get().toPromise();

    const req = httpController.expectOne(`google.com`);
    expect(req.request.method).toBe('GET');
  });
});
