import { Component, OnInit } from '@angular/core';
import { Evento } from '../domain/evento';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  public eventos: Evento[];

  constructor() { }

  ngOnInit() {

    this.eventos = [
      {
        id:"0", 
        titulo: "Título do evento aqui", 
        descricao: "Descrição do evento aqui", 
        foto: "http://www.saobernardo.sp.gov.br/documents/10181/370004/Vista+a%C3%A9rea_Pa%C3%A7o+Municipal_Centro_foto+Raquel+Toth.JPG/7d0e926e-c8f3-49cf-a914-10b6f540b8d7?t=1425690643089",
        dia: "26",
        mes: "Setembro",
        ano: "2017"
      }
    ]
 
  }

}
