import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from 'ng-apexcharts';
import { StatusListComponent } from './status-list/status-list.component';
import { AvaliacaoItemComponent } from './avaliacao-item/avaliacao-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AvaliacaoComponent,
    AvaliacaoItemComponent,
    RelatorioComponent,
    StatusListComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
