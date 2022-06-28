import { Component, VERSION } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nome: string;
  idade: number;
  nasci: number;
  hora: number;
  datahora: number;
  senha: number;

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}
  async exibirToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  async alertaEntrada() {
    const alert = await this.alertController.create({
      header: 'Exemplo Input',
      inputs: [
        {
          name: 'inputNome',
          type: 'text',
          placeholder: 'Digite seu nome',
        },
        {
          name: 'inputIdade',
          type: 'number',
          placeholder: 'Digite sua idade',
          max: 99,
          min: 0,
        },
        {
          name: 'inputNascimento',
          type: 'date',
        },
        {
          name: 'inputHora',
          type: 'time',
        },
        {
          name: 'inputDataHora',
          type: 'datetime-local',
        },
        {
          name: 'inputSenha',
          type: 'password',
        },
      ],
      buttons: [
        {
          text: 'Ok',
          handler: (valor: any) => {
            this.nome = valor['inputNome'];
            this.idade = valor['inputIdade'];
            this.nasci = valor['inputNascimento'];
            this.hora = valor['inputHora'];
            this.datahora = valor['inputDataHora'];
            this.senha = valor['inputSenha'];
            this.exibirToast(this.nome, this.idade);
          },
        },
      ],
    });
    await alert.present();
  }
}
