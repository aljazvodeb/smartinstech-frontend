import { BrowserQRCodeReader } from './../../app/_modules/zxing-scanner/browser-qr-code-reader';
import { ZXingScannerComponent } from './../../app/_modules/zxing-scanner/zxing-scanner.component';
import { Component, OnInit, VERSION, ViewChild, Output, EventEmitter} from '@angular/core';
import { Result } from '@zxing/library';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BoardPassData } from '../_models/boardPassData';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: 'QRScanner.component.html',
  styleUrls: ['./QRScanner.component.scss']
})
export class QRScannerComponent implements OnInit {
  @Output() boardPassData = new EventEmitter<BoardPassData>();
  @Output() currentDeviceId = new EventEmitter<string>();

  @ViewChild('scanner') scanner: ZXingScannerComponent;

  ngVersion = VERSION.full;

  formData: BoardPassData;

  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;
  qrResult: Result;

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.scanner.setCodeReader(new BrowserQRCodeReader());
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.availableDevices = devices;

      // selects the devices's back camera by default
      for (const device of devices) {
        if (/back|rear|environment/gi.test(device.label)) {
          this.scanner.changeDevice(device);
          this.currentDevice = device;
          setTimeout(() => {
            if (this.qrResultString === undefined) {
              // this.boardPassData.emit(this.formData);
              this.handleResultData(this.qrResultString);
            }
          }, 20000);
          break;
        }
      }
    });

    this.scanner.camerasFound.subscribe(
      (devices: MediaDeviceInfo[]) => (this.availableDevices = devices)
    );
    this.scanner.hasDevices.subscribe(
      (has: boolean) => (this.hasDevices = has)
    );
    this.scanner.scanComplete.subscribe(
      (result: Result) => (this.qrResult = result)
    );
    this.scanner.permissionResponse.subscribe(
      (perm: boolean) => (this.hasPermission = perm)
    );
  }

  displayCameras(cameras: MediaDeviceInfo[]) {
    console.log('Devices: ', cameras);
    this.availableDevices = cameras;
  }

  handleResultData(result) {
    const match = /([\s\S]{2})([\s\S]*)\/([\S]*)([\s\S]{9})([\s\S]{6})([\s\S]{7})(\s)([\s\S]{3})([\s\S]*)([\S]{3})([\S]{3})([\s\S]{7})([\S]{3})([\s\S]*)/.exec(
      result
    );
    if (match) {
      this.formData = new BoardPassData();
      this.formData.name = match[2];
      this.formData.surname = match[3];
      this.formData.fromAirport = match[5][0] + match[5][1] + match[5][2];
      this.formData.toAirport = match[5][3] + match[5][4] + match[5][5];
      this.formData.flightNumber = match[6];
    }

    // this.handleJulianDate(Number(match[8]));
    this.boardPassData.emit(this.formData);
    this.currentDeviceId.emit(this.currentDevice.deviceId);

  }

  // handleJulianDate(date) {
  //   const numberOfDaysInMounth = new Array<number>(31, 28 , 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 );
  //   const N = date;
  //   const y = 2017;
  //   const z = 365 * y + (y / 4) - (y / 100) + (y / 400);
  //   const d = N - z;

  //   console.log('D: ' + d);
  //   let tmp = d;
  //   let cnt = 0;
  //   while (tmp > 0) {
  //     tmp -= numberOfDaysInMounth[cnt];
  //     cnt++;
  //   }

  //   console.log('MM: ' + cnt);


  // }

  handleQrCodeResult(resultString: string) {
    console.log('Result: ', resultString);
    this.qrResultString = resultString;
    setTimeout(() => {
      this.handleResultData(resultString);
    }, 3000);
  }

  onDeviceSelectChange(selectedValue: string) {
    console.log('Selection changed: ', selectedValue);
    this.currentDevice = this.scanner.getDeviceById(selectedValue);
    setTimeout(() => {
      if (this.qrResultString === undefined) {
        this.handleResultData(this.qrResultString);
      }
    }, 20000);
  }

  onSubmit() {
    console.log(
      this.formData.name +
        ' ' +
        this.formData.surname +
        this.formData.flightNumber
    );
    this.router.navigate(['/baggage', this.currentDevice.deviceId]);
  }

  stateToEmoji(state: boolean): string {
    const states = {
      // not checked
      undefined: '❔',
      // failed to check
      null: '⭕',
      // success
      true: '✔',
      // can't touch that
      false: '❌'
    };

    return states['' + state];
  }
}
