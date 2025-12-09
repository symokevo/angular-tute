import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToKsh'
})
export class ConvertToKshPipe implements PipeTransform {

  conversionFactor = 128.5; // Example conversion factor from USD to KSH
  transform(value: number, digits: number): number {
    const convertedValue = value * this.conversionFactor;
    return parseFloat(convertedValue.toFixed(digits));
  }

}
