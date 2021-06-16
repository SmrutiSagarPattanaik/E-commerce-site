import { Pipe, PipeTransform } from '@angular/core';

interface item {
  imageUrl: string;
  id: string;
  name: string;
  description: string;
  price: number;
};

@Pipe({
  name: 'filterItemDetails'
})
export class FilterItemDetailsPipe implements PipeTransform {

  transform(listOfItems: item[], searchTerm: string): any {
    if (!listOfItems || !searchTerm) {
      return listOfItems;
    }

    let result = listOfItems.filter(
      (item) => item.id.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );

    return result;
  }

}
