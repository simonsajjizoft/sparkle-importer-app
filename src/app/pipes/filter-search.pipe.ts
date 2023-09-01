import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(list: any[], searchText: string,elementKey:string,elementKey2:string): any[] {
    if (!list) return [];
    if (!searchText || typeof searchText !== 'string') return list;
    searchText = searchText.toLowerCase();
    return list.filter(item => {
      let element;
      if(!elementKey2) element = item[elementKey].toLowerCase();
      if(elementKey2) element = item[elementKey]?.toLowerCase() + ' ' + item[elementKey2]?.toLowerCase();
      return element.includes(searchText);
    });
  }

}
