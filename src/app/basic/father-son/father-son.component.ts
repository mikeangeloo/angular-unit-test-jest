import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientI} from '../interfaces/client.interface';

@Component({
  selector: 'app-father-son',
  templateUrl: './father-son.component.html',
  styleUrls: ['./father-son.component.scss']
})
export class FatherSonComponent {

  @Input() client?: ClientI;
  @Output() onDeleteClient = new EventEmitter();
  @Output() onClientUpdated = new EventEmitter<ClientI>();

  onDelete() {
    this.client = undefined;
    this.onDeleteClient.emit();
  }

  onChange(id: number) {
    if (!this.client) return;
    //this.client.id = newId; // no usar
    this.client = {... this.client, id} // usamos desustruración
    this.onClientUpdated.emit({... this.client})
  }
}
