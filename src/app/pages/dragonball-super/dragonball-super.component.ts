import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent],
  templateUrl: './dragonball-super.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballSuperComponent {
  name = signal<string>('');
  power = signal<number>(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  addCharacter() {
    if (!this.name() || this.power() === 0 || this.power() < 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((chars) => [...chars, newCharacter]);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
