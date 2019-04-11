import { Component } from '@angular/core';

import { PessoasManagerService } from './pessoas-manager.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  nome: string = null;
  sexo: string = null;
  idade: number = null;
  cidade: string = null;


  constructor(public pessoa: PessoasManagerService){
  }

  ngOnInit(){
  }

  salvar(form){
    const pessoa = {
      nome: this.nome,
      sexo: this.sexo,
      idade: this.idade,
      cidade: this.cidade
    };
    this.pessoa.salvar(pessoa);
    form.reset()
  };
  
  getPessoas(){
    this.pessoa.getPessoas()
  };

  getCidades(){
    this.pessoa.getCidades()
  };

  pessoaMaisVelha(){
    this.pessoa.pessoaMaisVelha()
  };

}

