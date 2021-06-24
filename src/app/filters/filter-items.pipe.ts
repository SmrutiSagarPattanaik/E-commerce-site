import { Pipe, PipeTransform } from '@angular/core';

interface item {
  imageUrl: string;
  id: string;
  name: string;
  description: string;
  price: number;
  category:string;
}

@Pipe({
  name: 'filterItems',
})
export class FilterItemsPipe implements PipeTransform {

  transform(listOfItems: item[], searchTerm: string): any {
    if (!listOfItems || !searchTerm) {
      return listOfItems;
    }

    let result = listOfItems.filter(
      (item) => item.category.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );

    return result;
  }

}
