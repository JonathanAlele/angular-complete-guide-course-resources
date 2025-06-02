import { Component } from '@angular/core';
import {HeaderComponentComponent} from "./header/header-component.component";
import {ServerStatusComponent} from "./dashboard/server-status/server-status.component";
import {TicketsComponent} from "./dashboard/tickets/tickets.component";
import {TrafficComponent} from "./dashboard/traffic/traffic.component";
import {DashboardItemComponent} from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponentComponent,
    ServerStatusComponent,
    TicketsComponent,
    TrafficComponent,
    DashboardItemComponent
  ]
})
export class AppComponent {
}
