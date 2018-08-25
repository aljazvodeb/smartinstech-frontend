import { BrowserBarCodeReader } from './../../app/_modules/zxing-scanner/browser-barcode-reader';
import { BaggageData } from '../_models/baggageData';
import { BrowserQRCodeReader } from './../../app/_modules/zxing-scanner/browser-qr-code-reader';
import { ZXingScannerComponent } from './../../app/_modules/zxing-scanner/zxing-scanner.component';
import { AfterViewInit, Component, Input, OnInit, VERSION, ViewChild, Output, EventEmitter } from '@angular/core';
import { Result } from '@zxing/library';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: 'barCodeScanner.component.html',
  styleUrls: ['./barCodeScanner.component.scss']
})
export class BarcodeScannerComponent implements OnInit {
  @Input() deviceId: string;
  @Output() result = new EventEmitter<BaggageData>();
  @ViewChild('scanner') scanner: ZXingScannerComponent;

  formData: BaggageData;

  ngVersion = VERSION.full;
  showForm = false;
  showResult = true;

  hasDevices: boolean;
  hasPermission: boolean;
  barCodeResultString: string;
  barCodeResult: Result;

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.scanner.setCodeReader(new BrowserBarCodeReader());
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.availableDevices = devices;

    this.scanner.changeDevice(this.scanner.getDeviceById(this.deviceId));
    this.currentDevice = this.scanner.getDeviceById(this.deviceId);
    setTimeout(() => {
      if (this.barCodeResultString === undefined) {
        // const data = new BaggageData();
        // data.baggageNumber = '1234567890';
        this.handleResultData(this.barCodeResultString);
      }
    }, 15000);

      // selects the devices's back camera by default
      for (const device of devices) {
        if (/back|rear|environment/gi.test(device.label)) {
          this.scanner.changeDevice(device);
          this.currentDevice = device;
          setTimeout(() => {
            if (this.barCodeResultString === undefined) {
              this.handleResultData(this.barCodeResultString);
            }
          }, 15000);
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
      (result: Result) => (this.barCodeResult = result)
    );
    this.scanner.permissionResponse.subscribe(
      (perm: boolean) => (this.hasPermission = perm)
    );
  }

  displayCameras(cameras: MediaDeviceInfo[]) {
    this.availableDevices = cameras;
  }


  handleResultData(result) {
    if (result) {
      this.formData = new BaggageData();
      this.formData.baggageNumber = result;

    }
    this.result.emit(this.formData);
  }

  handleBarCodeCodeResult(resultString: string) {
    console.log('Result: ', resultString);
    this.barCodeResultString = resultString;

    setTimeout(() => {
      this.handleResultData(this.barCodeResultString);
    }, 3000);

  }

  onDeviceSelectChange(selectedValue: string) {
    console.log('Selection changed: ', selectedValue);
    this.currentDevice = this.scanner.getDeviceById(selectedValue);
    setTimeout(() => {
      if (this.barCodeResultString === undefined) {
        // console.log(this.showForm);
        // this.showForm = true;
        // // this.qrResultString = 'sinka';
        // this.showResult = false;
        this.handleResultData(this.barCodeResultString);

      }
    }, 10000);
  }

  onSubmit() {
    console.log(this.formData.baggageNumber);
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
