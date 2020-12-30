import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'exponentialStrength' })
export class ExponentialStrengthPipe implements PipeTransform {
    transform(value: number, exponent?: number): number {
        console.log(value);
        return Math.pow(value, isNaN(exponent) ? 1 : exponent);
    }
}