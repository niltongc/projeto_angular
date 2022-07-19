import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';


@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {

  livros: Array<any> = [];
  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getList();
  }
  
  getList(){
    this.listService.getList('mongodb').subscribe(books => {
      this.livros = books.books;
      console.log(this.livros)
    })
  }
  
}
