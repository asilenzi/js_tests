import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
  pure: false})
export class SortPipe implements PipeTransform {
  transform(value: any, key: string) {
    if (value.sort === null) {
      return value;
    }
    return value.sort(
      (a ,b) => {
        if (a[key] < b[key]) {
          return -1;
        } else if (a[key] == b[key]) {
          return 0;
        } else {
          return 1;
        }
      });
  }
}