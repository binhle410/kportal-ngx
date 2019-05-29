import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx';
  constructor(private http: HttpClient){}

  onChange(event){
    alert('hi '+event.target.value);
    this.http.get('http://event.api.trivesg.com/events')
    .subscribe((data) => {console.log(data)});
    
  }
}
