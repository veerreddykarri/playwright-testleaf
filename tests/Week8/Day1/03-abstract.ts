import { RBIRegulations } from "./02-interface";

export abstract class BaseBank {
    validateKYC(): void {}

    abstract interestRatePolicy(): void;

}

class SBI extends BaseBank implements RBIRegulations {
    validateKYC(): void {
        console.log("SBI KYC Validation: Document verification in progress");
    }

    depositMoney(): void {
        console.log("Money deposited to SBI Account");
    }

    openAccount(): void {
        console.log("SBI Account Opened");
    }

    withdrawMoney(): void {
        console.log("Withdrawn Money from SBI Account");
    }

    interestRatePolicy(): void {
        console.log("SBI Interest Rate is 6.5%");
    }
};

const sbiBank = new SBI();
sbiBank.validateKYC();
sbiBank.openAccount();
sbiBank.depositMoney();
sbiBank.withdrawMoney();
sbiBank.interestRatePolicy();