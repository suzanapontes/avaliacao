import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts'; // Importando o ChartComponent
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexLegend
} from 'ng-apexcharts'; // Importando os tipos necessários para o gráfico

import * as html2pdf from 'html2pdf.js';
import { FlagStatus } from '../status-list/flag-status.enum';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements AfterViewInit {


  flagStatusList = [
    { descricao: 'Ligeiramente Alto', value: FlagStatus.LigeiramenteAlto },
    { descricao: 'Obeso', value: FlagStatus.Obeso },
    { descricao: 'Média', value: FlagStatus.Media },
    { descricao: 'Baixo', value: FlagStatus.Baixo },
    { descricao: 'Alto', value: FlagStatus.Alto }
  ];

  data = {
    pacienteNome: '',
    dataGeracao: new Date()
  };

  statusItems = [
    {
      icone: 'balance',
      descricao: 'Peso',
      flagStatus: FlagStatus.Media,
      valor: 0,
      valorDesc: 'Kg'
    },
    {
      icone: 'fitness_center',
      descricao: 'IMC',
      flagStatus: FlagStatus.Media,
      valor: 0,
      valorDesc: ''
    },
    {
      icone: 'fitness_center',
      descricao: 'Massa magra',
      flagStatus: FlagStatus.Media,
      valor: 0,
      valorDesc: 'Kg'
    },
    {
      icone: 'body_fat',
      descricao: 'Massa gorda',
      flagStatus: FlagStatus.Media,
      valor: 0,
      valorDesc: 'Kg'
    },
    {
      icone: 'body_fat',
      descricao: '️Gordura visceral',
      flagStatus: FlagStatus.Media,
      valor: 0,
      valorDesc: 'Kg'
    },
    {
      icone: 'water_drop',
      descricao: 'Água Corporal',
      flagStatus: FlagStatus.Media,
      valor: 0,
      valorDesc: 'Kg'
    },
    {
      icone: 'femur_alt',
      descricao: 'Massa óssea',
      flagStatus: FlagStatus.Media,
      valor: 0,
      valorDesc: 'Kg'
    },
    {
      icone: 'person',
      descricao: 'Idade Metabólica',
      flagStatus: FlagStatus.Media,
      valor: 0,
      valorDesc: ''
    },
    {
      icone: 'conditions',
      descricao: 'Gordura subcutânea',
      flagStatus: FlagStatus.Media,
      valor: 0,
      valorDesc: 'Kg'
    }
  ];

  @ViewChild('grafico') chart: ChartComponent | undefined;
  @ViewChild('relatorioContent') relatorioContent!: ElementRef;

  public chartOptions: Partial<ChartOptions> | any;  // Inicializando o tipo do gráfico

  constructor() {
    this.createChart();
  }

  createChart() {

    const massaMagra = Number(this.statusItems[2].valor);
    const massaGorda = Number(this.statusItems[3].valor);

    if (isNaN(massaMagra) || isNaN(massaGorda)) {
      console.error('Os valores fornecidos não são números válidos!');
      return;
    }

    this.chartOptions = {
      series: [massaMagra, massaGorda],
      chart: {
        type: 'donut',
        height: 350
      },
      labels: ['Massa magra', 'Massa gorda'],

      colors: ['#66d18a', '#f06292'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'right'
            }
          }
        }
      ],
      legend: {
        position: 'right',
        show: true, // Ativar a exibição da legenda        
        horizontalAlign: 'right', // Alinhar horizontalmente (pode ser 'left', 'center', 'right')
        fontSize: '16px', // Tamanho da fonte da legenda
        fontWeight: 400, // Peso da fonte da legenda
        labels: {
          colors: '#000', // Cor do texto da legenda
        },
        markers: {
          width: 12, // Largura dos ícones da legenda
          height: 12, // Altura dos ícones da legenda
        }

      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              style: {
                fontSize: '12px', // Define o tamanho da fonte das labels
                fontFamily: 'Arial, sans-serif', // Se quiser personalizar a família da fonte
                fontWeight: 600, // Para tornar a fonte mais grossa
              },
              show: true,
              total: {
                show: true,
                label: 'Peso Total',
                fontSize: '20px',  // Aumentando o tamanho da label
                color: '#000', // Cor do texto
                offsetY: -10,
                fontWeight: 500,
                formatter: () => {
                  console.log(this.statusItems);
                  const total = massaMagra + massaGorda;
                  return `${total} Kg`;
                }
              },

            }
          }
        }
      },
      dataLabels: {
        enabled: true,

      }

    };
  }

  ngAfterViewInit(): void {
    //this.generateChart();
  }

  async gerarPdf(): Promise<void> {
    this.data.dataGeracao = new Date();
    this.createChart();
    await this.sleep(1000);
    const options = {
      margin: 1,
      filename: 'relatorio_paciente.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(this.relatorioContent.nativeElement).set(options).save();
  }

  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
