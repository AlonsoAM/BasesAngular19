import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballComponent {
  name = signal<string>('');
  power = signal<number>(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Gohan', power: 7000 },
    { id: 4, name: 'Yamcha', power: 500 },
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

  // powerClasses = computed(() => {
  //   return this.characters().map((character) => {
  //     return {
  //       'text-success': character.power > 8000,
  //       'text-warning': character.power <= 8000 && character.power > 7000,
  //       'text-danger': character.power <= 7000,
  //     };
  //   });
  // });
}
