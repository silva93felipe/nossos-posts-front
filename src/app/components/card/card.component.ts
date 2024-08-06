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
    public quantidadesCurtidas: number = 0;
    public comentarios: string[] = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatem tempora asperiores distinctio culpa inventore, placeat quis aspernatur perferendis nulla rem totam earum non dolore et iste veniam. Eaque, incidunt."];

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


    public adicionarComentario(){
        this.comentarios.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatem tempora asperiores distinctio culpa inventore, placeat quis aspernatur perferendis nulla rem totam earum non dolore et iste veniam. Eaque, incidunt.");
    }
}
