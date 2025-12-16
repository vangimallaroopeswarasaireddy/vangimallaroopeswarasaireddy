// Page load animation
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
  document.body.classList.add("loaded");
});

// Toast
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// Copy email
const copyBtn = document.getElementById("copyBtn");
const emailText = document.getElementById("email");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(emailText.textContent);
  showToast("Email copied");
});

// Form submit
const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const successMsg = document.getElementById("formSuccess");
const errorMsg = document.getElementById("formError");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  successMsg.style.display = "none";
  errorMsg.style.display = "none";

  submitBtn.classList.add("loading");
  submitBtn.disabled = true;

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      form.reset();
      successMsg.style.display = "block";
      showToast("Message sent");
    } else {
      errorMsg.style.display = "block";
      showToast("Submission failed");
    }
  } catch {
    errorMsg.style.display = "block";
    showToast("Network error");
  } finally {
    submitBtn.classList.remove("loading");
    submitBtn.disabled = false;
  }
});