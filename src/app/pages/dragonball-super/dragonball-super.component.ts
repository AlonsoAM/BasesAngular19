import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { Character } from '../../interfaces/character.interface';
import { DragonballSuperService } from '../../services/dragonball-super.service';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballSuperComponent {
  dragonballSuperService = inject(DragonballSuperService);
}
