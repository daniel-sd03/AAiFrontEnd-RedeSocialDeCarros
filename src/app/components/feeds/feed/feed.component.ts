import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { SidebarLeftComponent } from "../../sidebar/sidebar-left/sidebar-left.component";
import { FeedItemComponent } from "../feed-item/feed-item.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [NavbarComponent, SidebarLeftComponent, FeedItemComponent, FooterComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {

}
