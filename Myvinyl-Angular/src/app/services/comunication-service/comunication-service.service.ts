import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Themes } from 'src/app/classes/Themes';
import { ThemesInterface } from 'src/app/interfaces/ThemesInterface';
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

  reproductorViewData: {type:string, value: any} | undefined;
  private sendReproductorViewDataSubject = new Subject<{type:string, value: any}>();
  sendReproductorViewDataObservable = this.sendReproductorViewDataSubject.asObservable();

  sendReproductorViewData(reproductorViewData:{type:string, value: any}){
    this.reproductorViewData = reproductorViewData
    this.sendReproductorViewDataSubject.next(reproductorViewData);
  }

  sendReproductorViewDataUnsubscribe(){
    this.sendReproductorViewDataSubject.next();
    this.sendReproductorViewDataSubject = new Subject<{type:string, value: any}>();
    this.sendReproductorViewDataObservable = this.sendReproductorViewDataSubject.asObservable();
  }



  reproductorData: {type:string, value: any} | undefined;
  private sendReproductorDataSubject = new Subject<{type:string, value: any}>();
  sendReproductorDataObservable = this.sendReproductorDataSubject.asObservable();

  sendReproductorDataUnsubscribe(){
    this.sendReproductorDataSubject.next();
    this.sendReproductorDataSubject = new Subject<{type:string, value: any}>();
    this.sendReproductorDataObservable = this.sendReproductorDataSubject.asObservable();
  }

  sendReproductorData(reproductorData:{type:string, value: any}){
    this.reproductorData = reproductorData
    this.sendReproductorDataSubject.next(reproductorData);
  }

}
