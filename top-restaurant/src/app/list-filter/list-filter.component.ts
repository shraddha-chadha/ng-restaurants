import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css']
})
export class ListFilterComponent implements OnInit {
  public years: number[];
  quarters = [
    {
      "name": "First",
      "value": "1"
    },
    {
      "name": "Second",
      "value": "2"
    },
    {
      "name": "Third",
      "value": "3"
    },
    {
      "name": "Fourth",
      "value": "4"
    }
  ];
  selectedQuarter = 1;
  selectedYear = 2017;

  @Input() zipCode: string;

  constructor() {
    let yearsList = [];
    for (let i = 2018; i >= 1900; i--) {
      yearsList.push(i);
    }
    this.years = yearsList;
  }

  ngOnInit() {

  }

  search() {
    console.log("year", this.selectedYear);
    console.log("quarter", this.selectedQuarter);
    console.log("zipCode", this.zipCode);
  }

}
