import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pessoas = [];
  nome = null;
  sexo = null;
  idade = null;
  cidade = null;
  pessoaMaisVelha = null;
  pessoaMaisNova = null;
  idadeMaisVelho = 0;
  idadeMaisNovo = 999;
  mediaIdadeMulheres = null;
  mediaIdadeHomens = null;
  mediaPalmas = null;
  mediaParaiso = null;
  mediaPorto = null;
  

  salvar(){
    const pessoa = {
      id: this.pessoas.length,
      nome: this.nome,
      sexo: this.sexo,
      idade: this.idade,
      cidade: this.cidade,
      visivel: false
    };
    this.pessoas.push(pessoa);
    this.mediaIdadeCidade(this);
    this.nome = null;
    this.sexo = null;
    this.idade = null;
    this.cidade = null;
  }
  mostrar(pessoa) {
    pessoa.visivel = true;
  }
  fechar(pessoa) {
    pessoa.visivel = false;
  }
  maisvelha(pessoa){
    this.pessoas.forEach(element => {
      if (pessoa.idade > this.idadeMaisVelho){
        this.idadeMaisVelho = pessoa.idade,
        this.pessoaMaisVelha = pessoa.nome
      }
    });
  }
  maisNovo(pessoa){
    this.pessoas.forEach(element => {
      if (pessoa.idade < this.idadeMaisNovo){
        this.idadeMaisNovo = pessoa.idade,
        this.pessoaMaisNova = pessoa.nome
      }
    });
  }
  mediaIdadeCidade(pessoa){
    let qnt_mulheres = 0;
    let soma_idades_m = 0;
    let qnt_homens = 0;
    let soma_idades_h = 0;
    
    let qnt_homem_palmas = 0;
    let qnt_homem_paraiso = 0;
    let qnt_homem_porto = 0;

    let qnt_mulher_palmas = 0;
    let qnt_mulher_paraiso = 0;
    let qnt_mulher_porto = 0;

    let soma_palmas = 0;
    let soma_paraiso = 0;
    let soma_porto = 0;

    this.pessoas.forEach(element =>{
      if (pessoa.sexo == "masculino"){
        qnt_homens++;
        soma_idades_h = soma_idades_h + pessoa.idade
        switch (pessoa.cidade){
          case "Palmas":{
            qnt_homem_palmas++;
            soma_palmas += pessoa.idade;
          }
          case "Paraiso":{
            qnt_homem_paraiso++;
            soma_paraiso += pessoa.idade;
          }
          case "Porto Nacional":{
            qnt_homem_porto++;
            soma_porto += pessoa.idade;
          }
        }
      }
      else if (pessoa.sexo == "feminino"){
        qnt_mulheres++;
        soma_idades_m = soma_idades_m + pessoa.idade
        switch (pessoa.cidade){
          case "Palmas":{
            qnt_mulher_palmas++;
            soma_palmas += pessoa.idade;
          }
          case "Paraiso":{
            qnt_mulher_paraiso++;
            soma_paraiso += pessoa.idade;
          }
          case "Porto Nacional":{
            qnt_mulher_porto++;
            soma_porto += pessoa.idade;
          }
        }
      }
    });
    this.mediaIdadeMulheres = (soma_idades_m / qnt_mulheres);
    this.mediaIdadeHomens = (soma_idades_h / qnt_homens);
    this.mediaPalmas = (soma_palmas / (qnt_homem_palmas + qnt_mulher_palmas));
    this.mediaParaiso = (soma_paraiso / (qnt_homem_paraiso + qnt_mulher_paraiso));
    this.mediaPorto = (soma_porto / (qnt_homem_porto + qnt_mulher_porto));
  }
}
