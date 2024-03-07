import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMood:any=false;
  darkMoodKey:string='darkMood'
  constructor() {
    const storedDarkMood =localStorage.getItem(this.darkMoodKey)
    this.isDarkMood= storedDarkMood?JSON.parse(storedDarkMood):false
    this.applyDarkMoodStyle()
  }
  toggleDarkMood(){
    this.isDarkMood=!this.isDarkMood
    this.applyDarkMoodStyle()
    localStorage.setItem(this.darkMoodKey,this.isDarkMood.toString())
  }

  applyDarkMoodStyle(){
    document.body.classList.toggle("dark-mood",this.isDarkMood)
    // document.body.classList.toggle("dark-mood a",this.isDarkMood)

  }

  isDarkMoodEnable():void{
  return this.isDarkMood
  }


}


// for dark mode later
