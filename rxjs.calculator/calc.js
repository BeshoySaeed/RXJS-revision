const { fromEvent, combineLatest } = rxjs;
const { pluck, map, filter } = rxjs.operators;

function calculateMortgage(interest, loanAmount, loanLength) {
  const calculatedInterest = interest / 100 / 12;
  const total =
    (loanAmount * calculatedInterest) /
    (1 - Math.pow(1 / (1 + calculatedInterest), loanLength * 12));
  return total.toFixed(2);
}

const loanAmount = document.getElementById("amount");
const interest = document.getElementById("interest");
const loanLength = document.querySelectorAll(".length");
const displayLabel = document.getElementsByClassName("label-display")[0];

const helper = (ele) => {
  return fromEvent(ele, "input").pipe(pluck("target", "value"));
};

const loanAmount$ = helper(loanAmount);
const interest$ = helper(interest);
const loanLength$ = helper(loanLength);

combineLatest(loanAmount$, interest$, loanLength$)
  .pipe(
    map(([loanAmount, interest, loanLength]) => {
      return calculateMortgage(
        parseFloat(interest),
        parseFloat(loanAmount),
        parseFloat(loanLength)
      );
    }),
    filter((amount) => !isNaN(amount))
  )
  .subscribe((res) => {
    displayLabel.innerHTML = res;
  });
