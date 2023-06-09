import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  koszontes: string = "Szia!";
  ora: number = new Date().getHours();

  constructor() {
    setInterval(() => {
      if (this.ora < 9) {
        this.koszontes = "Jó reggelt!";
      } else if (this.ora < 18) {
        this.koszontes = "Szia!";
      } else {
        this.koszontes = "Jó estét!";
      }
    }, 1000)
    
  }
}

