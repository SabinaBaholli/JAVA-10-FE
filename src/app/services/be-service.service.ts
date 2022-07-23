import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeService {

  test = 'SDA';

  printHello() {
    console.log('HELLO');
  }

  constructor() { }

}
