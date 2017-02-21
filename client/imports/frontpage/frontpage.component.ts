import { Component } from '@angular/core';

import template from "./frontpage.html";

@Component({
  selector: 'frontpage',
  template
})
export class FrontpageComponent {
  products = [
    {
      title: 'Básico',
      prize: 50,
      box: 'básica',
      board: 'estándar',
      questions: 200,
      participants: 10
    },
    {
      title: 'Standard',
      prize: 70,
      box: 'básica',
      board: 'estándar',
      questions: 300,
      participants: 15
    },
    {
      title: 'Avanzado',
      prize: 90,
      box: 'total',
      board: 'personalizado',
      questions: 300,
      participants: 15
    },
    {
      title: 'Super Pro',
      prize: 110,
      box: 'total',
      board: 'personalizado',
      questions: "ilimitadas",
      participants: "ilimitadas"
    }
  ];

  features = [
    {
      text: 'Trivial con vuestras preguntas',
      value: true
    },
    {
      text: 'Tarjetas personalizadas',
      value: true
    },
    {
      text: 'Caja personalizada',
      value: 'box'
    },
    {
      text: 'Tablero',
      value: 'board'
    },
    {
      text: 'Fichas',
      value: true
    },
    {
      text: 'Preguntas',
      value: 'questions'
    },
    {
      text: 'Participantes',
      value: 'participants'
    }
  ]
}
