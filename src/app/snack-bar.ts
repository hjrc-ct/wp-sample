import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


/**
 * @title Basic snack-bar
 */
 @Component({
  selector: "snack-bar-overview-example",
  templateUrl: "snack-bar.html",
  styleUrls: ["snack-bar.css"]
})


export class SnackBarOverviewExample {
    constructor(private _snackBar: MatSnackBar) {}
  
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 2000,
      });
    }
  }
  