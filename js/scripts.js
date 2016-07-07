// business logic

function BankAccount(first, last, initialDeposit) {
  this.firstName = first;
  this.lastName = last;
  this.balance = initialDeposit;
}

BankAccount.prototype.addDeposit = function(deposit) {
  return this.balance += deposit;
}

BankAccount.prototype.withdrawl = function(withdrawl) {
  return this.balance -= withdrawl;
}

function resetFields() {
  $("#withdrawl").val("");
  $("#additional-deposit").val("");
}

// user interface logic
$(document).ready(function() {
  $("form#create-account").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedFirstDeposit = parseInt($("input#initial-deposit").val());

    var newAccount = new BankAccount(inputtedFirstName, inputtedLastName, inputtedFirstDeposit);

    $("#firstName").text(newAccount.firstName);
    $("#running-balance").text(newAccount.balance);

    $("#account").hide();
    $("#balance").removeClass("col-md-8").addClass("col-md-12");


    // deposit or withdrawl

    $("#deposit-withdrawl").click(function() {

      var withdrawl = parseInt($("#withdrawl").val());
      var deposit = parseInt($("#additional-deposit").val());

      if(!withdrawl) {
        $("#running-balance").text(newAccount.addDeposit(deposit));
      }
      else {
        $("#running-balance").text(newAccount.withdrawl(withdrawl));
      }
      resetFields();
    });

  });

});
