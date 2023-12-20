import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../contact/model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private configUrl = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) { }

  getContact() {
    return this.http.get<Contact[]>(this.configUrl);
  }
}