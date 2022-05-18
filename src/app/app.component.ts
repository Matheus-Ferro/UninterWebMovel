// Esqueleto básico do Angular
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// Classe primária
export class AppComponent {
  title = 'uninter_web_movel';

  // Array de objetos, onde cada objeto é um aluno
  students = [
    {
      name: 'Matheus Ferro de Sousa Leite',
      ru: 3602118,
      course: 'Engenharia de Software',
      birth: '14/06/2000',
    },
    {
      name: 'Amelia Moreira Marcondes',
      ru: 4713229,
      course: 'Psicologia',
      birth: '13/05/1999',
    },
    {
      name: 'Nadine Henriques Angelim',
      ru: 5824330,
      course: 'Marketing',
      birth: '12/04/1998',
    },
    {
      name: 'Emilia Hernandes Alvarenga',
      ru: 6935441,
      course: 'Publicidade',
      birth: '11/03/1997',
    },
    {
      name: 'Keyson Ramos Aguiar',
      ru: 7046552,
      course: 'Economia',
      birth: '10/02/1996',
    },
  ];
}
