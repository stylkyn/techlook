import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  selectedTheme = true;
  constructor() { }

  ngOnInit() {
  }
  changeTheme(color: string){
    setTimeout(() => {
      if(color === 'blue'){
        this.selectedTheme = true;
      }else{
        this.selectedTheme = false;
      }
      console.log(color);
      console.log(this.selectedTheme);
    }, 790);
  }

}
