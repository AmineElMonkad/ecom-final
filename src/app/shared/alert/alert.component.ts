import {Component, Input, OnChanges, ViewContainerRef} from '@angular/core';
import {CommonService} from "../../util/common-service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  providers: [CommonService]
})
export class AlertComponent implements OnChanges {
  @Input() type: String;
  @Input() message: String;
  staffSuccess: boolean;
  staffError: boolean;
  staffWarning: boolean;

  constructor( public _communService: CommonService) {
  }


  ngOnChanges() {
    if (! this._communService.isEmptyObject(this.message)) {
      switch (this.type) {
        case 'succes': {this.staffError = false;
          this.staffSuccess = true;
          this.staffWarning = false;
          break; }

        case  'erreur': {
          this.staffError = true;
          this.staffSuccess = false;
          this.staffWarning = false; break; }

        case  'warning': {this.staffError = false;
          this.staffSuccess = false;
          this.staffWarning = true; break; }
        default : {
          this.staffError = false;
          this.staffSuccess = false;
          this.staffWarning = false;
        }

      }
    } else {
      this.staffError = false;
      this.staffSuccess = false;
      this.staffWarning = false;
    }
  }

  /*showSuccess(message: String) {
    this.toastr.success('' + message , 'Success!');
  }

  showError(message: String) {
    this.toastr.error('' + message , 'Oops!');
  }

  showWarning(message: String) {
    this.toastr.warning('' + message , 'Atention!');
  }

  showInfo(message: String) {
    this.toastr.info('' + message );
  }

  showCustom() {
    this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
  }
*/
}
