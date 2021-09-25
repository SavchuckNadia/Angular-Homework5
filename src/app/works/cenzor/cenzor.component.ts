import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {

  public arrBadWords: Array<string> = ['java', 'tottenham'];
  public newWord!: string;
  public text!: string;
  public checkWord: boolean = false;
  public checkText: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addWord(): void {
    if (this.newWord) {
      this.arrBadWords.push(this.newWord);
      this.newWord = '';
      this.checkWord = false;
    }
    else {
      this.checkWord = true;
    }
  }
  resetArrBadWords(): void {
    this.arrBadWords = [];
    this.text = ''
  }
  cenzor(): void {
    if (this.text) {
      this.arrBadWords.forEach(elem => {
        let regExp = new RegExp(`\\b${elem}\\b`, 'gmi')
        let stars = '*'.repeat(elem.length)
        this.text = this.text.replace(regExp, stars);
        this.checkText = false;
      })
    }
    else {
      this.checkText = true
    }
  }

}
