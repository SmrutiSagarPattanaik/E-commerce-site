import { Pipe, PipeTransform } from '@angular/core';

interface item {
  imageUrl: string;
  id: string;
  name: string;
  description: string;
  price: number;
}

@Pipe({
  name: 'filterItems',
})
export class FilterItemsPipe implements PipeTransform {

  transform(listOfItems: item[], searchTerm: string): any {
    if (!listOfItems || !searchTerm) {
      return listOfItems;
    }

    //replace() is used to remove space from item name.
    //This enables to search for the item even if the user forgets to enter space in item name during searching the item.

    let result = listOfItems.filter(
      (item) => item.name.toLowerCase().replace(' ', '').indexOf(searchTerm.toLowerCase().replace(' ', '')) !== -1
    );

    return result;
  }

}
