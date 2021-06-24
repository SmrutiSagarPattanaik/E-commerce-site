import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItemCategories'
})
export class FilterItemCategoriesPipe implements PipeTransform {
  transform(categoryList: string[], searchTerm: string): any {
    if (!categoryList || !searchTerm) {
      return categoryList;
    }

    let result = categoryList.filter(
      (category) =>
        category.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );

    if (result.length) {
      return result;
    }
    alert('Enter valid value');
    return categoryList;
  }
}
