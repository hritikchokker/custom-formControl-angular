import {
  Component,
  OnInit
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {

  quantityControl: FormControl = new FormControl(0, [Validators.required, Validators.max(10)]);
  constructor() {
  }

  ngOnInit(): void {
  }
}
