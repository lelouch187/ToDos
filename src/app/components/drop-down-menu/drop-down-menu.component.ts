import { Component } from '@angular/core';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-drop-down-menu',
  standalone: true,
  imports: [
    MatMenu,
    MatIcon,
    MatMenuItem,
    MatIconButton,
    MatMenuTrigger
  ],
  templateUrl: './drop-down-menu.component.html',
  styleUrl: './drop-down-menu.component.scss'
})
export class DropDownMenuComponent {

}
