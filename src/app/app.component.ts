import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPage:number = 0;
  

  images = [
    {
      title:'At the Beach 1',
      url:'https://images.unsplash.com/photo-1582639590011-f5a8416d1101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'At the Beach 2',
      url:'https://plus.unsplash.com/premium_photo-1679692888211-5bd145899c92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJpa2luaXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'At the Beach 3',
      url:'https://images.unsplash.com/photo-1562904665-f2b3da38ab03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJpa2luaXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'At the Beach 4',
      url:'https://images.unsplash.com/photo-1637625181340-31ed0ce2addc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJpa2luaXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'At the Beach 5',
      url:'https://images.unsplash.com/photo-1618143680080-15ac87324612?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJpa2luaXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
    }
  ];
}
