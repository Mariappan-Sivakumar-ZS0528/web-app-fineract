import { Component, OnInit } from '@angular/core';
import 'assets/js/script.js';
import 'assets/js/components/chat.js';
import 'assets/js/constants.js';
import 'assets/js/components/cardsCarousel.js';
import 'assets/js/components/botTyping.js';
import 'assets/js/components/charts.js';
import 'assets/js/components/collapsible.js';
import 'assets/js/components/dropDown.js';
import 'assets/js/components/location.js';
import 'assets/js/components/pdfAttachment.js';
import 'assets/js/components/quickReplies.js';
import 'assets/js/components/suggestionButtons.js';


@Component({
  selector: 'mifosx-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss','css/materialize.min.css', 'css/style.css']
})
export class ChatbotComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
