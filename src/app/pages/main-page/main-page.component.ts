import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {ModalComponent} from "../../components/ui/modal/modal.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ModalComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  visibleModal = false;

  onVisibleModal(){
    this.visibleModal = true;
  }
}
