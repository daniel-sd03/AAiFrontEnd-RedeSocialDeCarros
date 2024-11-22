import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";
import { SidebarLeftComponent } from "../../sidebar/sidebar-left/sidebar-left.component";
import { SidebarRightComponent } from "../../sidebar/sidebar-right/sidebar-right.component";
import { FeedItemComponent } from "../feed-item/feed-item.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [NavbarComponent, SidebarLeftComponent, SidebarRightComponent, FeedItemComponent, FooterComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {

}
