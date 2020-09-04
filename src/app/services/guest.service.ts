import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor() { 
    
  }

  getGuestName():string{
    return localStorage.getItem('guestName')
  }

}
