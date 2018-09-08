import { Injectable } from '@angular/core';
import * as Web3 from 'web3';

declare let require: any;
declare let window: any;

let sitAbi = require('./smartinstech-abi.json'); 

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
    private _account: string = null;
    private _web3: any;

    private _sitContract: any;
    private _sitContractAddress: string = "0x51bd98a68e6cd2cc8b5779c65ce00fbae7a88204";

    constructor() {
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this._web3 = new Web3(window.web3.currentProvider);

            if (this._web3.version.network !== '3') {
                alert('Please connect to the Ropsten network');
            }
        } else {
            console.warn(
                'Web3 not supported - please install MetaMask plugin to continue.'
            );
        }

        this._sitContract = this._web3.eth.contract(sitAbi).at(this._sitContractAddress);
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

    public async getUserBalance(): Promise<number> {
        let account = await this.getAccount();

        return new Promise((resolve, reject) => {
            let _web3 = this._web3;
            this._sitContract.balanceOf.call(account, function (err, result) {
                if (err != null) {
                    reject(err);
                }

                resolve(_web3.fromWei(result));
            });
        }) as Promise<number>;
    }

    public async getInsuranceStatus(): Promise<string> {
        let account = await this.getAccount();

        return new Promise((resolve, reject) => {
            let _web3 = this._web3;
            this._sitContract.balanceOf.call(account, function (err, result) {
                if (err != null) {
                    reject(err);
                }

                resolve(_web3.fromWei(result));
            });
        }) as Promise<string>;
    }

    public async createInsurance(): Promise<string> {
        let account = await this.getAccount();

        return new Promise((resolve, reject) => {
            let _web3 = this._web3;
            this._sitContract.balanceOf.call(account, function (err, result) {
                if (err != null) {
                    reject(err);
                }

                resolve(_web3.fromWei(result));
            });
        }) as Promise<string>;
    }
}
