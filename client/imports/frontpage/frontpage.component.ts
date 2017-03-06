import { Component, ViewChild } from '@angular/core';
import { MeteorObservable } from 'meteor-rxjs';

import template from "./frontpage.html";

@Component({
  selector: 'frontpage',
  template
})
export class FrontpageComponent {
  @ViewChild('emailInput') emailInput;

  chosen;
  email: string = '';
  comments: string = '';
  sentFeedback: boolean = false;

  products = [
    {
      title: 'Básico',
      prize: 50,
      box: 'básica',
      board: 'básico',
      questions: 200,
      participants: 10
    },
    {
      title: 'Standard',
      prize: 70,
      box: 'básica',
      board: 'básico',
      questions: 300,
      participants: 15
    },
    {
      title: 'Avanzado',
      prize: 90,
      box: 'personalizada',
      board: 'personalizado',
      questions: 300,
      participants: 15
    },
    {
      title: 'Super Pro',
      prize: 110,
      box: 'personalizada',
      board: 'personalizado',
      questions: "ilimitadas",
      participants: "ilimitados"
    }
  ];

  features = [
    {
      text: 'Trivial con vuestras preguntas',
      tooltip: 'Un trivial cuyas preguntas las diseñáis entre el grupo de amigos',
      value: true
    },
    {
      text: 'Tarjetas personalizadas',
      tooltip: 'Las tarjetas del trivial están personalizadas, con vuestras preguntas y la imágen que queráis',
      value: true
    },
    {
      text: 'Fichas',
      tooltip: 'Fichas para jugar al trivial',
      value: true
    },
    {
      text: 'Caja',
      tooltip: 'La caja puede llevar personalización básica, con una pequeña foto, o totalmente personalizada con el diseño que queráis',
      value: 'box'
    },
    {
      text: 'Tablero',
      tooltip: 'El tablero del trivial puede ser básico, o totalmente personalizado con el diseño que queráis',
      value: 'board'
    },
    {
      text: 'Preguntas',
      tooltip: 'El número máximo de preguntas que llevará el trivial',
      value: 'questions'
    },
    {
      text: 'Creadores de preguntas',
      tooltip: 'El número máximo de personas que pueden participar haciendo preguntas',
      value: 'participants'
    }
  ]

  topFeatures = {
    box: 'personalizada',
    board: 'personalizado',
    questions: 'ilimitadas',
    participants: 'ilimitados'
  }

  midFeatures = {
    questions: 300,
    participants: 15
  }

  choose(product): void {
    MeteorObservable.call('choose', Meteor['connection']._lastSessionId, product).subscribe({
      next: () => {
        this.chosen = product;

        this.emailInput.nativeElement.focus();
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
