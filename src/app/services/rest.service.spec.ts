import { TestBed } from '@angular/core/testing';
import { RestService } from 'src/app/services/rest.service';

describe('RestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestService = TestBed.get(RestService);
    expect(service).toBeTruthy();
  });
});
