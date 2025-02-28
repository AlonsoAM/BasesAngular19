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
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Gohan', power: 7000 },
    { id: 4, name: 'Yamcha', power: 500 },
  ]);

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
