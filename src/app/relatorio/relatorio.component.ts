import { AfterViewInit, Component, Input, OnChanges } from '@angular/core';
import { ArcElement, CategoryScale, Chart, Legend, PieController, Tooltip } from 'chart.js';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'relatorio',
  standalone: false,
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnChanges, AfterViewInit {

  @Input() data: any;

  constructor() {
    Chart.register(PieController, ArcElement, CategoryScale, Tooltip, Legend);
  }

  ngOnChanges() {
    if (this.data) {
      this.gerarGrafico();
    }
  }

  ngAfterViewInit(): void {
    if (this.data) {
      this.gerarGrafico();
    }
  }

  gerarGrafico() {
    const ctx = (document.getElementById('chart') as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Água', 'Proteína', 'Gordura', 'Massa Óssea'],
          datasets: [{
            data: [this.data.agua, this.data.proteina, this.data.gordura, this.data.massaOssea],
            backgroundColor: ['#4caf50', '#ffeb3b', '#f44336', '#9e9e9e'],
            borderColor: ['#4caf50', '#ffeb3b', '#f44336', '#9e9e9e'],
            borderWidth: 1
          }]
        }
      });
    }
  }

  gerarPDF() {
    const doc = new jsPDF.jsPDF();
    doc.html(document.querySelector('.relatorio-container') as HTMLElement, {
      callback: (doc) => {
        doc.save('relatorio-avaliacao.pdf');
      }
    });
  }
}
