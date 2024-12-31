import { Component, Input } from '@angular/core';

@Component({
  selector: 'avaliacao-item',
  templateUrl: './avaliacao-item.component.html',
  styleUrl: './avaliacao-item.component.css'
})
export class AvaliacaoItemComponent {

  @Input() item: any; 
  @Input() flagStatusList: { value: string, descricao: string }[] = [];

}
