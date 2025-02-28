import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DragonballSuperService {
  characters = signal<Character[]>([]);

  addCharacter(character: Character) {
    this.characters.update((chars) => [...chars, character]);
  }
}
