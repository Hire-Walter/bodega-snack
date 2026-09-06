const form = document.querySelector("#access-form");
const result = document.querySelector("#access-result");
const error = document.querySelector("#access-error");
const sendLink = document.querySelector("#send-access-request");

form.addEventListener("submit", event => {
  event.preventDefault();
  error.hidden = true;
  if (!form.checkValidity()) {
    form.reportValidity();
    error.textContent = "Please enter the client email and company name connected to the account.";
    error.hidden = false;
    return;
  }
  const data = new FormData(form);
  const email = data.get("email");
  const company = data.get("company");
  const account = data.get("account") || "Not provided";
  const subject = `Bodega Snack portal access request — ${company}`;
  const body = [
    "BODEGA SNACK CLIENT PORTAL ACCESS REQUEST",
    "",
    `Client email: ${email}`,
    `Company / account: ${company}`,
    `Client or last order number: ${account}`,
    "",
    "Please verify this account and send the secure portal access link."
  ].join("\n");
  sendLink.href = `mailto:info@hirewalter.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  result.hidden = false;
  result.scrollIntoView({ behavior: "smooth", block: "center" });
});
