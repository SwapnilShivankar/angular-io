import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'square'})
export class SquarePipe implements PipeTransform{
    transform(value: number, ...args: number[]) {
        return value * args[0];
    }
}