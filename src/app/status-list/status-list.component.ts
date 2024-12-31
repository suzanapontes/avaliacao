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

}
