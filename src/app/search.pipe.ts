import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any): any { return
    if(!value) return null;
    if(!args.length) return value;

    args = args.toLowerCase();
    
    return value.filter((item:any)=>{
      return JSON.stringify(item).toLocaleLowerCase().includes(args);
      }

    )
  }

}
