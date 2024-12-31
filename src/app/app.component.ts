import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avaliacao';

  dadosPaciente: any = null;

  receberDados(dados: any) {
    this.dadosPaciente = dados;
  }
}
