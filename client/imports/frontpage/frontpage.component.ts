import { Component } from '@angular/core';
import { MeteorObservable } from 'meteor-rxjs';

import template from "./frontpage.html";

@Component({
  selector: 'frontpage',
  template
})
export class FrontpageComponent {
  chosen;
  email: string = '';
  comments: string = '';
  sentFeedback: boolean = false;

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
      participants: "ilimitados"
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
      text: 'Fichas',
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
      text: 'Preguntas',
      value: 'questions'
    },
    {
      text: 'Participantes',
      value: 'participants'
    }
  ]

  topFeatures = {
    box: 'total',
    board: 'personalizado',
    questions: 'ilimitadas',
    participants: 'ilimitados'
  }

  choose(product): void {
    MeteorObservable.call('choose', Meteor['connection']._lastSessionId, product).subscribe({
      next: () => {
        this.chosen = product;
      },
      error: (e: Error) => {
        console.error(e);

        alert(e);

      }
    })
  }

  sendFeedback(): void {
    MeteorObservable.call('feedback', Meteor['connection']._lastSessionId, this.email, this.comments).subscribe({
      next: () => {
        this.sentFeedback = true;
      },
      error: (e: Error) => {
        console.error(e);

        alert(e);
      }
    })
  }

  resetFeedback(): void {
    this.email = '';
    this.comments = '';
    this.sentFeedback = false;
  }
}
