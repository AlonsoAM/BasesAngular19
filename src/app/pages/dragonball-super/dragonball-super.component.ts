import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballSuperComponent {
  characters = signal<Character[]>([]);

  addCharacter(character: Character) {
    this.characters.update((chars) => [...chars, character]);
  }
}
