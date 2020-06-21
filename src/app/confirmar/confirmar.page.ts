import { Component } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmar',
  templateUrl: 'confirmar.page.html',
  styleUrls: ['confirmar.page.scss']
})
export class ConfirmarPage {

  servico: any;
  opcao: any;
  sub: any;
  id_cliente: any;

  constructor(public speechRecognition: SpeechRecognition,private router: Router ,private route: ActivatedRoute) {
    this.servico = null;
    this.opcao = null;

    this.sub = this.route.params.subscribe(params => {
      this.servico = params['servico'];
      this.id_cliente = params['id_cliente'];
    });
  }

  confirma(){
    this.router.navigate(['tabs/tab1',this.id_cliente]);
  }

  marcar_opcao(){
    this.opcao = 1;
  }
}
