import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  templateUrl: 'inicial.page.html',
  styleUrls: ['inicial.page.scss']
})
export class InicialPage {

  id_cliente: any;
  
  constructor(public barcodeScanner: BarcodeScanner,private router: Router) {
    
  }

  startScanner() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.id_cliente = barcodeData.text;
      this.router.navigate(['tabs/tab1',this.id_cliente]);  
     }).catch(err => {
         console.log('Error', err);
     });
  }

  ionViewWillEnter(){
    document.querySelector('ion-tab-bar').style.display = 'none';
  }

  ionViewWillLeave() {
      document.querySelector('ion-tab-bar').style.display = 'flex';
   }

}
