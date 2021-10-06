import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extSurfaceSlider'
})
export class ExtSurfaceSliderPipe implements PipeTransform {

  transform(max: number, ceil: number, floor: number): string {
    if (max === floor) {
      return `Pas d'extérieur`;
    } else if (max === ceil) {
      return `${max} m² et +`;
    } else {
      return `Moins de ${max}`;
    }
  }
}
