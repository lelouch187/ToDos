import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {ModalComponent} from "../../components/modal/modal.component";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ColumnService} from "../../services/column/column.service";
import {Column} from "../../services/column/column.types";
import {JsonPipe} from "@angular/common";
import {DropDownMenuComponent} from "../../components/drop-down-menu/drop-down-menu.component";
import {MatMenuTrigger} from "@angular/material/menu";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ModalComponent, MatFormField, MatInput, MatLabel, MatSuffix, JsonPipe, DropDownMenuComponent, MatMenuTrigger],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit{
  columnServices = inject(ColumnService)
  columns:Column[] | undefined;
  is_loading = false;
  error = '';
  visibleModal = false;
  is_edit = false;
  titleControl = new FormControl('');

  onVisibleModal(){
    this.visibleModal = true;
  }

  onHideModal(){
  this.visibleModal = false;
  }

  getData(): void {
    this.is_loading = true;
    this.columnServices.getColumns().subscribe(
      (response) => {
        this.columns = response.columns;
        console.log(response)
      },
      (error) => {
        this.error = error;
      }
    );
    this.is_loading = false;
  }

  ngOnInit(): void {
    this.getData()
  }

}
