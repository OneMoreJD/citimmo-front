import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rooms'
})
export class RoomsPipe implements PipeTransform {

  transform(rooms: number, bedrooms: number): string {

    let roomsString: string;
    switch (rooms) {
      case 0:
        return '';
      case 1:
        roomsString = rooms + ' pièce';
        break;
      default:
        roomsString = rooms + ' pièces';
        break;
    }

    let bedroomsString: string;
    switch (bedrooms) {
      case 0:
        bedroomsString = '';
        break;
      case 1:
        bedroomsString = ' dont ' + bedrooms + ' chambre';
        break;
      default:
        bedroomsString = ' dont ' + bedrooms + ' chambres';
    }

    return roomsString + bedroomsString;
  }
}
