import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Portfolio';

  aktYear = new Date().getFullYear();

  aktDatum: string = "";

  constructor() {
    function padTo2Digits(num: number) {
      return num.toString().padStart(2, '0');
    }
    function formatDate(aktDatum: Date) {
      return (
        [
          aktDatum.getFullYear(),
          padTo2Digits(aktDatum.getMonth() + 1),
          padTo2Digits(aktDatum.getDate()),
        ].join('-') +
        ' ' +
        [
          padTo2Digits(aktDatum.getHours()),
          padTo2Digits(aktDatum.getMinutes()),
          padTo2Digits(aktDatum.getSeconds()),
        ].join(':')
      );
    }
    const result = formatDate(new Date());

    setInterval(() => {
      this.aktDatum = formatDate(new Date());
    }, 1000);
  }
  

}
