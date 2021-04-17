import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CandyInterface } from '../../interfaces/CandyInterface';

@Injectable({
  providedIn: 'root'
})
export class ComunicationServiceService {
  
  candy: CandyInterface | undefined;
  private sendCandySubject = new Subject<CandyInterface>();
  sendCandyObservable = this.sendCandySubject.asObservable();

  sendCandy(candy:CandyInterface){
    this.candy = candy;
    this.sendCandySubject.next(candy);
  }
  
  candies: CandyInterface[] | undefined;
  private sendCandiesSubject = new Subject<CandyInterface[]>();
  sendCandiesObservable = this.sendCandiesSubject.asObservable();

  sendCandies(candies:CandyInterface[]){
    this.candies = candies;
    this.sendCandiesSubject.next(candies);
  }

}
