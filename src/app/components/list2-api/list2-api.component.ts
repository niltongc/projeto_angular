import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list2-api',
  templateUrl: './list2-api.component.html',
  styleUrls: ['./list2-api.component.css']
})
export class List2ApiComponent implements OnInit {

  livros: Array<any> = [];
  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.listService.getList('mysql').subscribe(books => {
      this.livros = books.books;
      console.log(this.livros)
    })
  }

}
