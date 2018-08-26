import { BaggageData } from '../_models/baggageData';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Result } from '@zxing/library';

@Component({
  selector: 'app-baggage-component',
  templateUrl: 'baggageScann.component.html',
  styleUrls: ['./baggageScann.component.scss']
})
export class BaggageScannComponent implements OnInit {
  currentDevice: string;
  formData = new BaggageData();
  show = false;
  text: string;
  errorText: string;

  constructor(public router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('cameraId'));
    this.currentDevice = this.route.snapshot.paramMap.get('cameraId');
  }

  onSubmit() {
    if (this.formData.baggageNumber === undefined) {
      this.errorText = '*Pease write your baggage number';
    } else if (this.formData.baggageNumber.length < 10) {
      this.errorText = '*Baggage number has to be 10 digits';
    } else {
      this.errorText = undefined;
      console.log('Baggage Number: ' + this.formData.baggageNumber);
      this.router.navigate(['/insure']);
    }
  }

  clicked() {
    this.show = !this.show;
  }

  handleResult(result) {
    console.log(result);
    if (result) {
      this.formData = result;
    } else {
      this.text = 'Unable to scan, please enter your Baggage number';
    }

    this.clicked();
  }
}
