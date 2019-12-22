import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { RandomTeamService } from 'src/app/Service/random-team.service';
import { User } from '../Service/User';
// este lo agregue para aprender a mapear x numero de ingredientes
import { Infor } from '../Service/User';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  users: User[] = [];

  constructor(private service: RandomTeamService) {
  }

  ngOnInit() {
    this.cargarTeam();
  }

  cargarTeam() {
    this.service.getData().subscribe((data: any) => {
      this.users = data.results;
    });
    console.log('EJECUTANDO cargarTeam');
  }
}
