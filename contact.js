document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("comment");
  const counter = document.getElementById("charCount");

  textarea.addEventListener("input", function (e) {
    const target = e.target;
    const maxLength = target.getAttribute("maxlength");
    const currentLength = target.value.length;
    counter.textContent = `${currentLength}/${maxLength}`;
  });
});