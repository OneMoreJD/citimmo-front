import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extSurfaceSlider'
})
export class ExtSurfaceSliderPipe implements PipeTransform {

  transform(max: number, ceil: number, floor: number): string {
    if (max === floor) {
      return `pas d'extérieur`;
    } else if (max === ceil) {
      return `${max} m² et +`;
    } else {
      return `moins de ${max} m²`;
    }
  }
}
