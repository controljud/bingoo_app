import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BingooPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bingoo',
  templateUrl: 'bingoo.html',
})
export class BingooPage {

  public sorteado: any;
  public ultimos: any;
  public todos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ultimos = [];
    this.todos = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BingooPage');
  }

  sorteia(){
    this.sorteado = Math.floor(Math.random()*90)+1;
    this.insereUltimo();
  }

  insereUltimo(){
    this.ultimos.push(this.sorteado);
    if(this.ultimos.length > 8){
      this.ultimos.splice(0, 1);
    }
  }

  iniciaTodos(){
    for(let i = 0; i < 90; i++){
      this.todos.push(0);
    }
  }

}
