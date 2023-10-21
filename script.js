const editableText = document.getElementById("editable-text");

if (localStorage.getItem("savedText")) {
  editableText.textContent = localStorage.getItem("savedText");
}

editableText.addEventListener("input", function () {
  localStorage.setItem("savedText", this.textContent);
});

const randomWords = fetch(
  "https://random-word-api.vercel.app/api?words=2&length=6&type=capitalized"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    editableText.textContent = data[0] + " " + data[1];
  });

// console.log("Hey! ", randomWords);
