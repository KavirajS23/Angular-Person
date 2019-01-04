import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lsp',
  templateUrl: './lsp.component.html',
  styleUrls: ['./lsp.component.css']
})
export class LspComponent implements OnInit {
  entitySelected: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onEntitySelect(entity: string) {
    this.entitySelected = entity;
    this.valueChange.emit(this.entitySelected);
  }
}
