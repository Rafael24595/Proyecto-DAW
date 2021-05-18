import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BarThemesListInterface } from '../../../../../utils/audio-bar/interfaces/Bar-Themes-List';
import { AudiobufferToWav } from '../../../../../utils/audio-bar/AudionufferToWav';
import { BarUtils } from '../../../../../utils/audio-bar/Bar-Utils';
import { Color_Vars } from '../../../../../utils/audio-bar/variables/Bar-Variables';
import { Themes } from 'src/app/classes/Themes';
import { ComunicationServiceService } from 'src/app/services/comunication-service/comunication-service.service';

@Component({
  selector: 'app-audio-bar',
  templateUrl: './audio-bar.component.html',
  styleUrls: ['./audio-bar.component.css']
})
export class AudioBarComponent implements OnInit {

  @Output() outputToparent = new EventEmitter<{status:string, value:string | number}>();

  constructor(private comunicationService :ComunicationServiceService) {
  }

  ngOnInit(): void { 
    window.onresize = ()=>{
      let element = document.getElementById('bar-ajustable-width');
      if(element && this.ajustableWidth){
        this.barAudioSize = element.offsetWidth;
      }
    }
    if(this.ajustableWidth){
      let element = document.getElementById('bar-ajustable-width');
      if(element){
        this.barAudioSize = element.offsetWidth;
      }
    }
    else{
      this.barAudioSize = 525;
    }
    this.comunicationService.sendReproductorDataObservable.subscribe((data:{type:string, value: any})=>{

      let type = data.type;
      let value  = data.value;

      switch (type){

        case 'themes':

          let themes = value as {isThemeList:Boolean, themes:Themes[]};

          if(typeof themes.isThemeList == 'boolean' && themes.themes){
            this.isThemeList = themes.isThemeList;
            this.themesList = themes.themes;
            this.themesListActive = themes.themes;
            this.prepareTheme(this.themesListActive[this.position]);

            this.barAudioSizeProgress = 0;
            this.pointAudioPosition = 0;
          }

        break;

        case 'position':

          if(typeof value == 'number' && value != -1){
            this.calculeNextThemePosition(value, true);
          }

        break;

        case 'play':

          if (this.audio){
            this.setPlayPause('play');
          }

        break;

        case 'stop':

          if (this.audio){
            this.setPlayPause('stop');
          }

        break

      }

    });
    this.comunicationService.sendReproductorViewData({type:'ready', value:''});
  }

  /*/////////////
  | THEMES VARS |
  /////////////*/

  mediaPath:string = '../../../../../assets/media';
  ajustableWidth: boolean = true;
  lineToolBar:boolean = true;
  isThemeList:Boolean = false;
  audio: HTMLAudioElement | undefined;
  themesList:BarThemesListInterface[] = [];
  themesListRandom:BarThemesListInterface[] = [];
  themesListActive:BarThemesListInterface[] = this.themesList;
  position = 0;
  randomList = false;
  loopList = false;
  launchPaused = true;
  normalSrc = '';
  reverseSrc = '';

  /*////////////
  | AUDIO VARS |
  ////////////*/

  barAudioSize;
  barAudioSizeProgress = 0
  pointAudioPosition = 0;
  speed = 1; 
  time = '00:00';
  overBar = 'none'
  timePointer = this.time;
  timePointerPosition = 0;
  audioStatus = true;
  mouseDwnAudio = false;
  isReverse = false;

  /*/////////////
  | VOlUME VARS |
  /////////////*/

  barVolumeSize = 75;
  barVolumeSizeProgress = this.barVolumeSize;
  pointVolumePosition = this.barVolumeSize;
  mouseDwnVolume = false;
  volLogo = 'B';
  //vol = '100%';

  /*////////////
  | COLOR VARS |
  ////////////*/

  loadGif = Color_Vars.load_gif_status.hidden;
  playButtonColor = Color_Vars.button_play_color.pause;
  barColor = Color_Vars.bar_progress_color.pause;
  barVolColorBack = Color_Vars.bar_volume_color.background.unmuted;
  barVolColor = Color_Vars.bar_volume_color.front.unmuted;
  babyMeatballColor = Color_Vars.meatball_color.baby.unmuted;
  muteColor = Color_Vars.button_mute_color.unmuted;
  loopColor = Color_Vars.button_loop_color.normal;
  randomColor = Color_Vars.button_random_color.normal;
  loopListColor = Color_Vars.button_loop_list_color.normal;
  reverseColor = Color_Vars.button_reverse_color.normal;

  /////////////////////////
  //PREPARATION FUNCTIONS//
  /////////////////////////

  prepareTheme(theme?:BarThemesListInterface){

      if(theme){
        this.isReverse =  false;
        this.reverseSrc = '';
        this.normalSrc = `${this.mediaPath}/audio/themes/${theme.id}.mp3`;
        //this.outputToparent.emit(status:'finish', JSON.stringify(theme));
      }
      
      if(this.audio) {this.audio.pause();}
      this.audio = new Audio();
      this.audio.src = (this.isReverse) ? this.reverseSrc : this.normalSrc;
      this.audio.load();
      this.audio.onloadedmetadata = ()=>{
        if(this.audio){
          this.audio.onloadeddata = ()=>{
            if(this.audio){
              this.audio.onpause = ()=>{this.setPlay()}
              this.audio.onplay = ()=>{this.setPlay()}
              this.audio.onvolumechange = ()=>{this.progressBarVolume()};
              this.audio.ontimeupdate = ()=>{this.progressBarAudio()}
              this.audio.onended = ()=>{this.calculeNextThemePosition(1)}
      
              this.setDefaultThemeValues();
              this.setDefaultInterfaceValues();
            }
          }
        }
      }
      this.audio.onerror = ()=>{this.audio = undefined;};
  }

  //////////////////////////
  //REPRODUCTION FUNCTIONS//
  //////////////////////////

  setPlayPause(mode?:string){
    if(this.audio){
      if(this.audio.paused || mode == 'play'){
        this.audio.play();
        this.comunicationService.sendReproductorViewData({type:'play', value:this.themesList[this.position].id});
      }
      else if(!this.audio.paused || mode == 'stop'){
        this.audio.pause();
        this.comunicationService.sendReproductorViewData({type:'stop', value:this.themesList[this.position].id});
      }
    }
  }

  setDefaultInterfaceValues(){

    this.progressBarAudio();
    this.setLoopAudio();
    this.selectVelocity();
    this.setLoopList();
    this.setRandomList();
    this.setReverse();
    this.setPlay();

    (this.audio && !this.launchPaused) ? this.audio.play() : '';

  }

  setDefaultThemeValues(){

    let muted = localStorage.getItem('isMuted');
    let loop = localStorage.getItem('isLoop');
    let volume = localStorage.getItem('volVal');
    let velocity = localStorage.getItem('velVal');
    let listLoop = localStorage.getItem('isListLoop');
    let listRandom = localStorage.getItem('isListRandom');

    if(this.audio){
      this.audio.muted = (muted) ? JSON.parse(muted) : this.audio.muted;
      this.audio.loop = (loop) ? JSON.parse(loop) : this.audio.loop;
      this.audio.volume = (volume) ? JSON.parse(volume) : this.audio.volume;
      this.audio.playbackRate = (velocity) ? JSON.parse(velocity) : this.audio.playbackRate;
      this.loopList = (listLoop) ? JSON.parse(listLoop) : false;
      this.randomList = (listRandom) ? JSON.parse(listRandom) : false;
    }

  }

  loopListReproduction(){
    this.loopList = !this.loopList;
    this.setLoopList();
    localStorage.setItem('isListLoop', JSON.stringify(this.loopList));
  }

  setPlay(){
    if(this.audio){
      if(this.audio.paused){
        this.barColor = (this.isReverse) ? Color_Vars.bar_progress_color.reverse_rause : Color_Vars.bar_progress_color.pause; 
        this.playButtonColor = Color_Vars.button_play_color.pause;
      }
      else{
        this.barColor = (this.isReverse) ? Color_Vars.bar_progress_color.reverse_play : Color_Vars.bar_progress_color.play;
        this.playButtonColor = Color_Vars.button_play_color.play;
      }
    }
  }

  setReverse(){
    if(this.audio){
      if(this.isReverse){
        this.reverseColor = Color_Vars.button_reverse_color.reverse;
        this.barColor = (this.audio.paused) ? Color_Vars.bar_progress_color.reverse_rause : Color_Vars.bar_progress_color.reverse_play;
      }
      else{
        this.reverseColor = Color_Vars.button_reverse_color.normal;
        this.barColor = (this.audio.paused) ? Color_Vars.bar_progress_color.pause : Color_Vars.bar_progress_color.play;
      }
    }
  }

  setLoopList(){
    if(this.loopList){
      this.loopListColor = Color_Vars.button_loop_list_color.loop;
    }
    else{
      this.loopListColor = Color_Vars.button_loop_list_color.normal;
    }
  }

  loopAudio(){
    if(this.audio){
      this.audio.loop = !this.audio.loop;
      this.setLoopAudio()
      localStorage.setItem('isLoop', JSON.stringify(this.audio.loop));
    }
  }

  setLoopAudio(){
    this.loopColor = (this.audio && this.audio.loop) ? Color_Vars.button_loop_color.loop : Color_Vars.button_loop_color.normal;
  }

  randomReproduction(){
    this.randomList = !this.randomList;
    if(this.randomList){
      this.themesListRandom = BarUtils.randomizeList(this.themesList, this.position);
      this.position = 0;
      this.themesListActive = this.themesListRandom;
    }
    else{
      this.position = BarUtils.findActualPosition(this.themesListActive, this.position, this.themesList);
      this.themesListActive = this.themesList;
    }
    this.setRandomList();
    localStorage.setItem('isListRandom', JSON.stringify(this.randomList));
  }

  setRandomList(){
    if(this.randomList){
      this.randomColor = Color_Vars.button_random_color.random;
    }
    else{
      this.randomColor = Color_Vars.button_random_color.normal;
    }
  }

  ///////////////////
  //TOOLS FUNCTIONS//
  ///////////////////

  calculeNextThemePosition(event:Event | number, isCalculed?: boolean){
    let action:HTMLInputElement | number = -1;
    if(event && !isCalculed){
      if(typeof event != 'number' && event.target){
        action = event.target as HTMLInputElement;
        action = parseInt(action.value);
      }
      else if(typeof event == 'number'){
        action = event;
      }
      if(this.loopList){
        action = (this.position + action < 0) ? this.themesListActive.length -1 : (this.position + action > this.themesList.length -1) ? 0 : this.position + action;
      }
      else{
        (this.position + action < 0) ? (action = 0, this.launchPaused = true) : (this.position + action > this.themesListActive.length -1) ? (action = this.themesListActive.length -1, this.launchPaused = true) : (action = this.position + action, this.launchPaused = false);
      }
    }
    if(isCalculed){
      action = event as number;
    }
    this.position = action;
    this.prepareTheme(this.themesListActive[this.position]);
    this.comunicationService.sendReproductorViewData({type:'ended', value:this.themesListActive[this.position].id});
  }

  calculeTimeByPixel(position:number){
    if(this.audio){
      let timeTotal = this.audio.duration
      return position * timeTotal / this.barAudioSize ;
    }
    return 0;
  }

  calculeTimeBySeconds(position?:number){
    if(this.audio){
      let timeActual = (position) ? position : this.audio.currentTime;
      let timeTotal = this.audio.duration;
      return timeActual * this.barAudioSize / timeTotal;
    }
    return 0;
  }

  calculateAudioPosition(coorY:number){
    if(this.audio){
      this.audio.currentTime = coorY * this.audio.duration / this.barAudioSize;
    }
  }

  calculateVolumePosition(coorY:number){
    if(this.audio){
      let vol = 
      (coorY / this.barVolumeSize > 1) 
        ? 1 
        : (coorY / this.barVolumeSize < 0.001)
          ? 0
          : coorY / this.barVolumeSize;
      this.audio.volume = vol;
    }
  }

  //////////////////////
  //MULTIBAR FUNCTIONS//
  //////////////////////

  mouseDrag(event:MouseEvent){
    
    this.showTimePointer(event);

    if(this.mouseDwnAudio == true){
      this.audioBarDrag(event);
    }

    if(this.mouseDwnVolume == true){
      this.volumeBarDrag(event);
    }

  }

  toClick(event:MouseEvent){
    let itemId = event.target as HTMLElement;
    if(itemId.id == 'audio-bar-padding'){
      (!this.isReverse) ? this.calculateAudioPosition(event.offsetX) : this.calculateAudioPosition(this.barAudioSize - event.offsetX) ;
      this.mouseDownAudio();
    }
    if(itemId.id == 'vol-bar-padding'){
      this.calculateVolumePosition(event.offsetX);
      this.mouseDownVolume();
    }
  }

  ////////////////////
  //VOLUME FUNCTIONS//
  ////////////////////

  volumeBarDrag(event:MouseEvent){
    let volBarPosition = document.getElementById('vol-bar');
    let position = BarUtils.positionInBar(event.clientX, volBarPosition);
    event.preventDefault();

    if(position >= -1 && position <= this.barVolumeSize + 1){
      this.pointVolumePosition = position
      this.barVolumeSizeProgress = position;
    }
    this.calculateVolumePosition(this.pointVolumePosition);
  }

  mouseUpVolume(){
    if(this.mouseDwnVolume == true){
      this.calculateVolumePosition(this.pointVolumePosition)
      this.mouseDwnVolume = false;
    }
  }

  mouseDownVolume(){
    this.mouseDwnVolume = true;
  }

  progressBarVolume(){
    if(this.audio){
      let volActual = this.audio.volume;
      let movement = volActual * this.barVolumeSize;
      this.pointVolumePosition = movement;
      this.barVolumeSizeProgress = movement;

      //this.vol = `${Math.round(this.audio.volume * 100)}%`;
      this.setMuted();
      this.setVolLogo();
      localStorage.setItem('volVal', JSON.stringify(this.audio.volume));
    }
  }

  setVolLogo(){
    if(this.audio){
      let volActual = this.audio.volume;
      let percentage = volActual * 100 / 25;
      
      if(!this.audio.muted){
        if(percentage <= 0){
          this.volLogo = Color_Vars.volume_logo.percentage_0;
        }
        if(percentage > 0 && percentage <= 1){
          this.volLogo = Color_Vars.volume_logo.percentage_25;
        }
        if(percentage > 1 && percentage < 3){
          this.volLogo = Color_Vars.volume_logo.percentage_50;
        }
        if(percentage >= 3){
          this.volLogo = Color_Vars.volume_logo.percentage_75;
        }
      }
      else{
        this.volLogo = Color_Vars.volume_logo.percentage_0;
      }
    }
  }

  muteVol(){
    if(this.audio){
      this.audio.muted = !this.audio.muted;
      localStorage.setItem('isMuted', JSON.stringify(this.audio.muted));
    }
  }

  setMuted(){
    if(this.audio && this.audio.muted){
      //this.vol = `<del>${this.vol}</del>`;
      this.muteColor = Color_Vars.button_mute_color.muted;
      this.barVolColor = Color_Vars.bar_volume_color.front.muted;
      this.barVolColorBack = Color_Vars.bar_volume_color.background.muted;
      this.babyMeatballColor = Color_Vars.meatball_color.baby.muted;
    }
    else{
      //this.vol = this.vol.replace(/(<([^>]+)>)/gi, "");
      this.muteColor = Color_Vars.button_mute_color.unmuted;
      this.barVolColor = Color_Vars.bar_volume_color.front.unmuted;
      this.barVolColorBack = Color_Vars.bar_volume_color.background.unmuted;
      this.babyMeatballColor = Color_Vars.meatball_color.baby.unmuted;
    }
  }

   /*incrementVol(){

    let increment = Math.round((this.audio.volume + 0.1) * 10) / 10;
    increment = (increment < 1) ? increment : 1;

    this.audio.volume = increment;
  }

  decrementVol(){

    let decrement = Math.round((this.audio.volume - 0.1) * 10) / 10;
    decrement = (decrement > 0) ? decrement : 0;
 
    this.audio.volume = decrement;
  }*/

  ///////////////////
  // BAR FUNCTIONS //
  ///////////////////

  audioBarDrag(event:MouseEvent){
      let audioBarPosition = document.getElementById('audio-bar-padding');
      let position = (audioBarPosition) ? audioBarPosition.offsetLeft : 0;
      event.preventDefault();
      if(event.clientX - position >= 0 && event.clientX - position <= this.barAudioSize){
        let movement = BarUtils.positionInBar(event.clientX, audioBarPosition)
        this.pointAudioPosition = movement;
        this.barAudioSizeProgress = movement;
      }
  }

  mouseDownAudio(){
    if(this.audio){
      this.audioStatus = (this.audio.paused) ? false : true; 
      this.audio.pause();
      this.mouseDwnAudio = true;
    }
  }

  mouseUpAudio(){
    if(this.audio && this.mouseDwnAudio == true){
      (!this.isReverse) ? this.calculateAudioPosition(this.pointAudioPosition) : this.calculateAudioPosition(this.barAudioSize - this.pointAudioPosition);
      (this.audioStatus) ? this.audio.play(): this.audio.pause();
      this.mouseDwnAudio = false;
    }
  }

  progressBarAudio(){
    if(this.audio){
      let movement = (!this.isReverse) ? this.calculeTimeBySeconds() : this.calculeTimeBySeconds(this.audio.duration - this.audio.currentTime);
      this.pointAudioPosition = movement;
      this.barAudioSizeProgress = movement;
      this.time = BarUtils.getSeconds((!this.isReverse) ? Math.trunc(this.audio.currentTime) : Math.trunc(this.audio.duration - this.audio.currentTime));
    }
  }

  showTimePointer(event:MouseEvent){
    if(this.audio){
      let item:HTMLElement | string = event.target as HTMLElement;
      let itemId = item.id;
      item = (itemId == 'Meatball' && item.parentElement) ? item.parentElement : item;
      if(itemId == 'audio-bar-padding' || itemId == 'Meatball' ){
        this.overBar = 'block';
        let positionInPage = BarUtils.positionInBar(event.clientX, item);
        let time = this.calculeTimeByPixel(positionInPage);
        this.timePointer = BarUtils.getSeconds(time);
        this.timePointerPosition = positionInPage;
      }
      else{
        this.overBar = 'none';
      }
    }
  }

  selectVelocity(){
    if(this.audio){
      this.speed = this.audio.playbackRate;
    }
  }

  updateSpeed(){
    if(this.audio){
      this.audio.playbackRate = this.speed;
      localStorage.setItem('velVal', JSON.stringify(this.audio.playbackRate));
    }
  }

  stopAudio(){
    if(this.audio){
      this.audio.pause();
      this.audio.currentTime = 0;
      this.comunicationService.sendReproductorViewData({type:'stop', value:this.themesList[this.position].id});
    }
}

  /*incrementTime(){

    this.audio.currentTime = this.audio.currentTime + 5;

  }

  decremenTime(){

    this.audio.currentTime = this.audio.currentTime - 5;

  }*/

  /////////////////////
  // BETA FUNCTIONS //
  ////////////////////

  revertAudioImplement(){
    if(this.audio){
      this.loadGif = Color_Vars.load_gif_status.visible;
      this.audioStatus = (this.audio.paused) ? false : true;

      if(this.audio.src != this.reverseSrc){
        this.audio.pause();
        (this.reverseSrc == '')
          ? this.revertAudio(this.audio.src).then(()=>{this.isReverse = true; this.switchSRC()})
          : (this.isReverse = true, this.switchSRC()) ;  
      }
      else{
        this.isReverse = false;
        this.switchSRC();
      }
    }
  }

  switchSRC(){

    if(this.audio){
      if(this.isReverse){

        this.loadGif = Color_Vars.load_gif_status.hidden;
        let time = this.audio.duration - this.audio.currentTime;
        this.prepareTheme();
        this.audio.currentTime = time;
        this.audio.play();
  
      }else{
  
        this.loadGif = Color_Vars.load_gif_status.hidden;
        let time = this.audio.duration - this.audio.currentTime;
        this.prepareTheme();
        this.audio.currentTime = time;
  
      }
  
      this.setReverse();
      (this.audioStatus) ? this.audio.play() : this.audio.pause();
      this.audioStatus = (this.audio.paused) ? false : true; 
    }

  }

  revertAudio(src:string) {
    
    return new Promise(resolve=>{

      var context = new AudioContext();
      var xhr = new XMLHttpRequest(),
      method = "GET",
      url = src;

      xhr.open(method, url, true);
      xhr.responseType = 'arraybuffer';
      xhr.onreadystatechange = ()=> this.xhrReady(xhr, context).then(()=>resolve(true));
      xhr.send();

    })

  }

  xhrReady(xhr: { readyState: number; status: number; response: any; }, context: { decodeAudioData: (arg0: any, arg1: (buffer: any) => void) => void; createBufferSource: () => any; }){

    return new Promise(resolve=>{

      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        context.decodeAudioData(xhr.response, (buffer)=>{
          var src = context.createBufferSource();
          Array.prototype.reverse.call(buffer.getChannelData(0));
          Array.prototype.reverse.call(buffer.getChannelData(1));
          src.buffer = buffer;
  
          var wav = AudiobufferToWav.audioBufferToWav(buffer);
          let blob = new Blob([wav],{type:'mp3'});
          let blobUrl = URL.createObjectURL(blob);
  
          this.reverseSrc = blobUrl;
  
          resolve(true);
          
        });
      }

    });

  }

}
