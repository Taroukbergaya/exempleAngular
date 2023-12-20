import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../contact/model/contact';
import { interval } from 'rxjs';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
  public listContact: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContact().subscribe(
      (data: Contact[]) => {
        console.log(data); // Log the data to the console
        this.listContact = data;
      }
    );
  }
}