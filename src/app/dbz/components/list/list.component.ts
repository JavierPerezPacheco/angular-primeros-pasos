import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  standalone: false,
  selector: 'dbz-list',
  templateUrl: 'list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character []=[]

  @Output()
    public onDelete: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id?: string):void{

    if(!id) return;

    console.log(id);
    //TODO: emitir el ID del persnaje
    this.onDelete.emit(id);
  }



 }
