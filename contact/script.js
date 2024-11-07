// email
let name = document.querySelector("#name").value;
let email = document.querySelector("#email").value;
let message = document.querySelector("#message").value;

submitBtn.addEventListener("click", () => {
  name = document.querySelector("#name").value;
  message = document.querySelector("#message").value.replaceAll("\n", "%0D%0A");
  email = document.querySelector("#email").value;
  submit.href = `mailto:ibadurrohmannn@gmail.com?subject=${name}&body=${message}%0D%0A%0D%0AContact me:%0D%0AEmail: ${email}`;
});
