import { TestBed } from '@angular/core/testing';

import { DatabaseConexService } from './database-conex.service';

describe('DatabaseConexService', () => {
  let service: DatabaseConexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseConexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
