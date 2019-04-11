import { Injectable } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoasManagerService {
  
  cidades = [
    'Palmas',
    'Paraíso',
    'Porto Nacional',
    'Luzimangues'
  ]

  pessoas = []
  
  salvar(pessoa){
    this.pessoas.push(new Pessoa(pessoa.nome,pessoa.sexo,pessoa.idade,pessoa.cidade))
  };

  getPessoas(){
    return this.pessoas
  };

  getCidades(){
    return this.cidades
  };

  pessoaMaisVelha() {
    let maisVelho: string;
    let maisVelhoIdade = 0;
    if (this.pessoas.length !== 0) {
      for (let i = 0; i < this.pessoas.length; i++) {
        if (this.pessoas[i].idade > maisVelhoIdade) {
          maisVelho = this.pessoas[i].nome
          maisVelhoIdade = this.pessoas[i].idade
        }
      }
    }
    return maisVelho;
  };

  pessoaMaisNova() {
    let maisNova: string;
    let maisNovaIdade = 999;
    if (this.pessoas.length !== 0) {
      for (let i = 0; i < this.pessoas.length; i++) {
        if (this.pessoas[i].idade < maisNovaIdade) {
          maisNova = this.pessoas[i].nome
          maisNovaIdade = this.pessoas[i].idade
        }
      }
    }
    return maisNova;
  };

  mediaIdadeMulheres(){
    let qnt_mulheres =  0;
    let soma_idade_mulheres = 0 ;
    let media_idade_mulheres= 0 ;
    if (this.pessoas.length !== 0){
      for (let i = 0; i < this.pessoas.length; i++){
        parseInt(this.pessoas[i].idade);
        if(this.pessoas[i].sexo == "feminino"){
          soma_idade_mulheres += this.pessoas[i].idade;
          qnt_mulheres ++;
        }
      }  
      media_idade_mulheres = soma_idade_mulheres / qnt_mulheres
    }
    return media_idade_mulheres;
  };

  mediaIdadeHomens(){
    let qnt_homens =  0;
    let soma_idade_homens = 0 ;
    let media_idade_homens= 0 ;
    if (this.pessoas.length !== 0){
      for (let i = 0; i < this.pessoas.length; i++){
        parseInt(this.pessoas[i].idade);
        if(this.pessoas[i].sexo == "masculino"){
          soma_idade_homens += this.pessoas[i].idade;
          qnt_homens ++;
        }
      }  
      media_idade_homens = soma_idade_homens / qnt_homens
    }
    return media_idade_homens;
  };

  porcentoMulheresCidade(cidade){

    let mulheres = 0;
    const pessoasCidade = this.pessoas.filter(pessoa => pessoa.cidade == cidade);
    let total_pessoas = pessoasCidade.length;

    for (let i = 0; i < pessoasCidade.length; i++){
      if( pessoasCidade[i].sexo == "feminino"){
        mulheres++;
      }
    }
    let porcentoMulher = (mulheres / total_pessoas ) * 100;
    return porcentoMulher;
  };

  porcentoHomensCidade(cidade){

    let homens = 0;
    const pessoasCidade = this.pessoas.filter(pessoa => pessoa.cidade == cidade);
    let total_pessoas = pessoasCidade.length;

    for (let i = 0; i < pessoasCidade.length; i++){
      if( pessoasCidade[i].sexo == "masculino"){
        homens++;
      }
    }
    let porcentoHomens = (homens / total_pessoas ) * 100;
    return porcentoHomens;
  };

}

