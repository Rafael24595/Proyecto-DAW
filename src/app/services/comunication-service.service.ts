import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Themes } from '../classes/Themes';

@Injectable({
  providedIn: 'root'
})
export class ComunicationServiceService {
  
  theme: Themes | undefined;
  private sendThemeSubject = new Subject<Themes>();
  sendThemeObservable = this.sendThemeSubject.asObservable();

  sendTheme(theme:Themes){
    this.theme = theme;
    this.sendThemeSubject.next(theme);
  }
}
