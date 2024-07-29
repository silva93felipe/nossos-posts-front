import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    public isComentar: boolean = false;
    public isFavorito: boolean = false;
    public isCurtido: boolean = false;
    public quantidadesCurtidas = 0;

    public toogleComentar(){
        this.isComentar = !this.isComentar;
    }

    public favoritar(){
        this.isFavorito = !this.isFavorito;
    }

    public curtir(){
        this.isCurtido = !this.isCurtido;
        if(this.isCurtido){
            this.quantidadesCurtidas += 1;
        }else{
            this.quantidadesCurtidas -= 1;
        }
    }

}
