import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  public sorteados: any;
  public ultimos: any;
  public todos: any;
  public game: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
  ) {
    this.iniciaTudo();
  }

  ionViewDidLoad() {

  }

  iniciaTudo(){
    this.sorteado = null;
    this.sorteados = [];
    this.ultimos = [];
    this.todos = [];
    this.game = true;

    this.iniciaTodos();
  }

  sorteia(){
    if(this.game){
      let round = true;
      while(round){
        let sort = Math.floor(Math.random()*90)+1;
        if(this.sorteados.indexOf(sort) == -1 && this.sorteados.length <= 90){
          this.sorteado = sort;
          this.sorteados.push(sort);

          this.insereUltimo();
          this.insereTodos();

          round = false;
        }
        if(this.sorteados.length == 90){
          this.game = false;
        }
      }
    }else{
      let alert = this.alertCtrl.create({
        title: 'Alerta',
        subTitle: 'Não há mais números a serem sorteados',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  insereUltimo(){
    this.ultimos.push(this.sorteado);
    if(this.ultimos.length > 8){
      this.ultimos.splice(0, 1);
    }
  }

  iniciaTodos(){
    let linha = [];
    let x = 1;
    for(let i = 0; i < 90; i++){
      linha.push({'nu': i + 1, 'cl': 'cor-vazio'});

      if(x == 10){
        this.todos.push(linha);
        linha = [];
        x = 0;
      }
      x++;
    }
  }

  insereTodos(){
    let num = this.sorteado - 1;

    if(num > 9){
      this.todos[num.toString().slice(0, 1)][num.toString().slice(1)].cl = 'cor-cheio';
    }else{
      this.todos[0][num].cl = 'cor-cheio';
    }
  }
}
