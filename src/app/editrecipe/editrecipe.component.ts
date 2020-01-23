import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-editrecipe',
  templateUrl: './editrecipe.component.html',
  styleUrls: ['./editrecipe.component.css']
})
export class EditrecipeComponent implements OnInit {

  test = 0;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((data: ParamMap) => {
      this.test = Number.parseInt(data.get('id'));
      console.log(this.test);
    });
  }

  ngOnInit() {
  }
}
