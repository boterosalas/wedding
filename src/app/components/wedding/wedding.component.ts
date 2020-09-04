import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestService } from '../../services/guest.service'

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss']
})
export class WeddingComponent implements OnInit {
  
  public guestName: string

  constructor(
    private _router: Router,
    private _guestService: GuestService
  ) {
    this.guestName = this._guestService.getGuestName()
  }

  ngOnInit(): void {
    
  }



}
