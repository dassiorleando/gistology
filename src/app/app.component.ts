import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GISTOLOGY';
  // Five last saved gists: will take it dynamically in our mongo later
  gists = [
    {title: "A simple prediction using R package: caret",
     description: "Predict the input's output using some data set",
     technologies: ['Data Science', 'R']
    },
    {title: "Start with Angular2, material and flexbox",
     description: "Simple steps to build an angula2 app with material design and flexbox",
     technologies: ['Angular2', 'Angular-material2', 'Anglar-flexbox']
    },
    {title: "Typescript: the easier Js",
     description: "Know to use Ts for all your front projects using webpack",
     technologies: ['TypeScript', 'Webpack', 'Js']
    }
  ];

  constructor(){
  }
}
