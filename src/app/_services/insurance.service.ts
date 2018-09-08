import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';

const Web3 = require('web3');

declare let require: any;
declare let window: any;

let abi = require('./smartinstech-abi.json');

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  private _account: string = null;
  private _web3: any;

  private _insuranceContract: any;
  private _insuranceContractAddress: string = '0x51bd98a68e6cd2cc8b5779c65ce00fbae7a88204';
  private alertService: AlertService;

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(window.web3.currentProvider);

    } else {
      console.warn(
        'Please use a dapp browser like mist or install MetaMask plugin for chrome'
      );
    }
    this._insuranceContract = this._web3.eth.contract(abi).at(this._insuranceContractAddress);
  }

  private async getAccount(): Promise<string> {
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }
          if (accs.length === 0) {
            alert(
              'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            );
            return;
          }
          resolve(accs[0]);
        })
      }) as string;

      this._web3.eth.defaultAccount = this._account;
    }
    return Promise.resolve(this._account);
  }

  public async createInsurance(_baggageId: number[], _dateTimeOfFirstPayout: number, _pricePerBaggage: number,
    _maxPayoutPerBaggage: number, _apiUrl: string, _pathToData: string, _selfPayout: boolean) {
    let account = await this.getAccount();
    console.log("Account: " + account);

    return this._insuranceContract.createInsurance.sendTransaction(
      _baggageId,
      _dateTimeOfFirstPayout,
      _pricePerBaggage,
      _maxPayoutPerBaggage,
      _apiUrl,
      _pathToData,
      _selfPayout,
      { from: account, gas: 4665270, value: this._web3.toWei(_pricePerBaggage, "ether") }, function (err, transactionHash) {
        if (!err) {
          console.log('Transaction ' + transactionHash + "successful!");
          //this.alertService.success('Transaction ' + transactionHash + "successful!", false);
        } else {
          console.log(err);
          //this.alertService.error(err, false);
        }
      });
  }

  public async checkBaggage(_baggageId: number) {
    let account = await this.getAccount();
    console.log("Account: " + account);

    this._insuranceContract.checkBaggage.sendTransaction(_baggageId, { from: account }, function (err, transactionHash) {
      if (!err) {
        console.log('Transaction ' + transactionHash + "successful!");
        //this.alertService.success('Transaction ' + transactionHash + "successful!", false);
      } else {
        console.log(err);
        //this.alertService.error(err, false);
      }
    });
  }

  public async getInsurance(_baggageId: number) {
    let account = await this.getAccount();
    console.log("Account: " + account);

    this._insuranceContract.getInsurance.sendTransaction(_baggageId, { from: account }, function (err, transactionHash) {
      if (!err) {
        console.log('Transaction ' + transactionHash + "successful!");
        //this.alertService.success('Transaction ' + transactionHash + "successful!", false);
      } else {
        console.log(err);
        //this.alertService.error(err, false);
      }
    });

  }

}
