import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  constructor() { }
  public form = [
    { val: 'Pepperoni', isChecked: true, color: 'danger', disabled: true },
    { val: 'Sausage', isChecked: false, color: 'light', disabled: false },
    { val: 'Mushroom', isChecked: false, color: 'tertiary', disabled: true },
    { val: 'Mushroom', isChecked: false, color: 'success', disabled: false } 
  ];

  ngOnInit() {
  }

  onClick(check) {
    console.log(check);
  }

}
