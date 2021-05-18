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

  isThemeList: boolean | undefined;
  themesArray: Themes[] | undefined;
  private sendThemesSubject = new Subject<{isThemeList:Boolean, themes:Themes[]}>();
  sendThemesObservable = this.sendThemesSubject.asObservable();

  sendThemes(isThemeList:boolean, themes:Themes[]){
    this.isThemeList = isThemeList;
    this.themesArray = themes;
    this.sendThemesSubject.next({isThemeList, themes});
  }

  listPosition: number | undefined;
  private sendListPositionSubject = new Subject<number>();
  sendListPositionObservable = this.sendListPositionSubject.asObservable();

  sendListPosition(listPosition:number){
    this.listPosition = listPosition
    this.sendListPositionSubject.next(listPosition);
  }

  reproductorViewData: {type:string, value: any} | undefined;
  private sendReproductorViewDataSubject = new Subject<{type:string, value: any}>();
  sendReproductorViewDataObservable = this.sendReproductorViewDataSubject.asObservable();

  sendReproductorViewData(reproductorViewData:{type:string, value: any}){
    this.reproductorViewData = reproductorViewData
    this.sendReproductorViewDataSubject.next(reproductorViewData);
  }

  reproductorData: {type:string, value: any} | undefined;
  private sendReproductorDataSubject = new Subject<{type:string, value: any}>();
  sendReproductorDataObservable = this.sendReproductorDataSubject.asObservable();

  sendReproductorData(reproductorData:{type:string, value: any}){
    this.reproductorData = reproductorData
    this.sendReproductorDataSubject.next(reproductorData);
  }

}
