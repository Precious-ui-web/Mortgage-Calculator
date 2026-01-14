const amountInput = document.getElementById("amount");
const yearsInput = document.getElementById("years");
const rateInput = document.getElementById("rate");
const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const amount = Number(amountInput.value);
  const years = Number(yearsInput.value);
  const rate = Number(rateInput.value);
  const type = document.querySelector('input[name="type"]:checked').value;

  if (!amount || !years || !rate) {
    alert("Please fill in all fields");
    return;
  }

  const monthlyRate = rate / 100 / 12;
  const months = years * 12;

  let monthlyPayment;

  if (type === "repayment") {
    monthlyPayment =
      (amount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -months));
  } else {
    monthlyPayment = amount * monthlyRate;
  }

  result.innerHTML = `
    <h3>Your results</h3>
    <p>Monthly repayment</p>
    <h1>£${monthlyPayment.toFixed(2)}</h1>
  `;
});

clearBtn.addEventListener("click", () => {
  amountInput.value = "";
  yearsInput.value = "";
  rateInput.value = "";
  result.innerHTML = `
    <h3>Results shown here</h3>
    <p>
      Complete the form and click “calculate repayments” to see what your
      monthly repayments would be.
    </p>
  `;
});
