class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }
  //     balance() - This method does not take any input, and returns the current balance on the account. The balance is computed by summing up the amounts in the transactions array.
  // deposit(amt) - This method takes in a single input, the deposit amount. This method should create a new transaction representing the deposit, and add it to the transactions array.
  //   charge(payee, amt) - This method takes in the payee and amount, creates a new transaction with the payee and amount, and adds the transaction to the transaction array.
  // NOTE: You should not be able to charge an amount that would make your balance dip below 0

  balance() {
    let balance = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      balance = this.transactions[i].amount + balance;
    }
    return balance;
  }
  deposit(amt) {
    let transaction = new Transaction(amt);
    // console.log(transaction)
    if (amt < 0) {
      return;
    } else {
      this.transactions.push(transaction);
    }
}
charge(payee, amt) {
    // let chargeAmount = -amt;
    // console.log(chargeAmount);
    if (this.balance() - amt < 0) {
        return "no overdraft";
    } else {
        let transaction = new Transaction(-amt, payee);
        this.transactions.push(transaction);
    }
  }
}

class Transaction {
  constructor(amount, payee) {
    this.amount = amount;
    this.payee = payee;
    this.date = new Date();
  }
}
let newAccount = new BankAccount(001, "Daniel");

console.log(newAccount);
console.log(newAccount.deposit(10));
console.log(newAccount.deposit(8));
console.log(newAccount.balance());
console.log(newAccount.charge("pizza", 15));
console.log(newAccount.balance());