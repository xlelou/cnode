import { TestBed, inject } from '@angular/core/testing';

import { ReplyService } from './reply.service';

describe('ReplyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReplyService]
    });
  });

  it('should ...', inject([ReplyService], (service: ReplyService) => {
    expect(service).toBeTruthy();
  }));
});
