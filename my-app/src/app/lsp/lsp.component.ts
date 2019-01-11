import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SelectorService } from './selector.service';

@Component({
  selector: 'app-lsp',
  templateUrl: './lsp.component.html',
  styleUrls: ['./lsp.component.css'],
  providers: [SelectorService]
})
export class LspComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
