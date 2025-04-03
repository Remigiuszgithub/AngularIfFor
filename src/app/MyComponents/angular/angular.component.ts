import { Component, OnInit } from '@angular/core';

interface Framework {
  name: string;
  year: number;
  creator: string;
}

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  info = "Popularne Frameworki"; 
  frameworks: Framework[] = []; 

  constructor() { }

  ngOnInit(): void {
    this.frameworks.push({ name: 'React.js', year: 2013, creator: 'Facebook (teraz Meta)' });
    this.frameworks.push({ name: 'Vue.js', year: 2014, creator: 'Evan You' });
    this.frameworks.push({ name: 'Angular', year: 2010, creator: 'Google' });
    this.frameworks.push({ name: 'Svelte', year: 2016, creator: 'Rich Harris' });
    this.frameworks.push({ name: 'Next.js', year: 2016, creator: 'Vercel (dawniej ZEIT)' });
    this.frameworks.push({ name: 'Ember.js', year: 2011, creator: 'Yehuda Katz' });
    this.frameworks.push({ name: 'Backbone.js', year: 2010, creator: 'Jeremy Ashkenas' });
    this.frameworks.push({ name: 'jQuery', year: 2006, creator: 'John Resig' });
  }
}
