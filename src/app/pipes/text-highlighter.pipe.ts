import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textHighlighter'
})
export class TextHighlighterPipe implements PipeTransform {


  transform(value: any, args: any): any {
    if (!args) {return value;}
    var re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
    // return value.replace(re, "<mark>$&</mark>");
    return value.replace(re, '<span class="highlighted-text">$&</span>');
}

}
