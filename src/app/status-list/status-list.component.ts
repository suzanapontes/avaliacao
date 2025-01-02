import { Component, Input, OnInit } from '@angular/core';
import { FlagStatus, FlagStatusDetails } from './flag-status.enum';

@Component({
  selector: 'status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {
  @Input() items: Array<{
    icone: string; 
    descricao: string;
    valorDesc: string;
    flagStatus: FlagStatus;
    valor: number;
  }> = [];

  @Input() flagStatusDetails = FlagStatusDetails;

  constructor() {}

  ngOnInit(): void {}

  getDescricao(item: any) {
    const descricao = `${item.valor} ${item.valorDesc}`;
    const index = this.items.indexOf(item);
    if(index == 2 || index == 3) {
      const total = Number(this.items[2].valor) + Number(this.items[3].valor);      
        if (total > 0) { 
            const percentual = (item.valor / total) * 100;            
            return `${descricao} ${percentual.toFixed(2)}%`;
        }
        return `${descricao} -%`;
    }
    return descricao;
  }

}
