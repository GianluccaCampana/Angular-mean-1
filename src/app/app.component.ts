import { Component } from '@angular/core';
import { Livro } from './livros/livro.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  livros: Livro[] = []
  OnLivroAdicionado(livro){
    console.log("testando")
    this.livros= [...this.livros,livro]
  }
}
