import { Component } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  servico: any;
  opcao: any;
  id_cliente: any;
  sub: any;

  constructor(public speechRecognition: SpeechRecognition,private router: Router,private route: ActivatedRoute) {
    this.servico = null;
    this.opcao = null;

    this.speechRecognition.hasPermission().then((permission) => {
      if (permission) {
      } else {
        this.speechRecognition.requestPermission().then((data) => {
          alert(JSON.stringify(data));
        }, (err) => {
          alert(JSON.stringify(err));
        });
      }
    }, (err) => {
      alert(JSON.stringify(err));
    }
    );
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id_cliente = params['id_cliente'];
    });
  }

  startListening() {
    this.speechRecognition.startListening().subscribe((speeches) => {
        this.servico = speeches[0];
         this.router.navigate(['tabs/confirmar/',this.servico,this.id_cliente]);
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }

  marcar_opcao(){
    this.opcao = 1;
  }
}
