// business logic

function BankAccount(first, last, initialDeposit) {
  this.firstName = first;
  this.lastName = last;
  this.balance = initialDeposit;
}

BankAccount.prototype.addDeposit = function(deposit) {
  return this.balance += deposit;
}

// user interface logic
$(document).ready(function() {
  $("form#create-account").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedFirstDeposit = parseInt($("input#initial-deposit").val());

    var newAccount = new BankAccount(inputtedFirstName, inputtedLastName, inputtedFirstDeposit);

    $("#running-balance").text(newAccount.balance);

    // deposit or withdrawl

    $("#deposit-withdrawl").click(function() {

      var withdrawl = parseInt($("#withdrawl").val());
      var deposit = parseInt($("#additional-deposit").val());

      $("#running-balance").text(newAccount.addDeposit(deposit));
    });
  });

});
