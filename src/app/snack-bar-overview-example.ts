import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


/**
 * @title Basic snack-bar
 */
 @Component({
  selector: "snack-bar-overview-example",
  templateUrl: "snack-bar-overview-example.html",
  styleUrls: ["snack-bar-overview-example.css"]
})


export class SnackBarOverviewExample  implements OnInit  {
    constructor(private _snackBar: MatSnackBar) {}

    ngOnInit(){
      console.log("SnackBarOverviewExample class - on init invoked - success");
    }
  
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 2000,
      });
    }
  }
  