import { Component , OnInit , Input } from '@angular/core';
import { Contact } from './model/contact';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  
constructor () {
  this.contact = new Contact();
 }
 ngOnInit(): void {
 
}
save(f: NgForm){
  console.log(f.value['nom']);
  //console.log(f.value['email']);
  //console.log(f.value['msg']);
}
}

