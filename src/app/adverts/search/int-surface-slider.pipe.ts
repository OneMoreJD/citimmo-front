import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intSurfaceSlider'
})
export class IntSurfaceSliderPipe implements PipeTransform {

  transform(max: number, ceil: number, min: number, floor: number): string {
    if (min === floor && max === ceil) {
      return `${max} m² et +`;
    }

    if (min === floor && max < ceil) {
      return `jusqu'à ${max} m²`;
    }

    if (min > floor && max === ceil) {
      return `à partir de ${min} m²`;
    }

    if (min > floor && max < ceil) {
      return `de ${min} à ${max} m²`;
    }
  }
}
