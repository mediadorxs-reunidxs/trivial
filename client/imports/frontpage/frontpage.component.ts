import { Component, ViewChild, HostListener } from '@angular/core';
import { MeteorObservable } from 'meteor-rxjs';
import { Angulartics2 } from 'angulartics2';

import template from "./frontpage.html";

@Component({
  selector: 'frontpage',
  template
})
export class FrontpageComponent {
  @ViewChild('emailInput') emailInput;

  @HostListener('window:scroll', ['$event']) trackScroll() {
    let el = this.getLastElement();

    if (el !== this.currentLastElement) {
      this.currentLastElement = el;

      this.track(el);
    }
  }

  toTrackElements = [
    '.what',
    '.why',
    '.steps',
    '.product-1',
    '.product-2',
    '.product-3',
    '.product-4',
    '.feedback'
  ];

  currentLastElement;

  getLastElement() {
    let last,
        bottom = window.pageYOffset + window.innerHeight;

    for (let element of this.toTrackElements) {
      let htmlEl = document.querySelector(element);

      if (bottom > htmlEl.offsetTop + htmlEl.offsetHeight) {
        last = element;
      }
    }

    return last;
  }


  chosen;
  email: string = '';
  comments: string = '';
  sentFeedback: boolean = false;

  products = [
    {
      title: 'Básico',
      price: 50,
      box: 'básica',
      board: 'básico',
      questions: 200,
      participants: 10
    },
    {
      title: 'Standard',
      price: 70,
      box: 'básica',
      board: 'básico',
      questions: 300,
      participants: 15
    },
    {
      title: 'Avanzado',
      price: 90,
      box: 'personalizada',
      board: 'personalizado',
      questions: 300,
      participants: 15
    },
    {
      title: 'Super Pro',
      price: 110,
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
      tooltip: 'La caja puede ser básica, con una pequeña foto, o personalizada con el diseño que queráis',
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
      tooltip: 'El número máximo de personas que participan definiendo las preguntas en la plataforma. Cada pregunta en la tarjeta impresa lleva el nombre de quien la creó.',
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

  constructor(private angulartics2: Angulartics2) {}

  track(el) {
    this.angulartics2.eventTrack.next({ action: 'View ' + el, properties: { category: 'Frontpage' }});
  }

  scrollToExplanation(): void {
    console.log('scroll');
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
