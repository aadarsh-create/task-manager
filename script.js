function thmeTgle() {
  let body = document.body;
  body.classList.toggle("dark");
}

function fchck(ele) {
  let task = ele.parentElement;
  task.classList.toggle("chk");
  let icon = task.querySelector(".icon");

  if (task.classList.contains("chk")) {
    icon.textContent = "✔️";
  } else {
    icon.textContent = "❌";
  }
}

function fremove(btn) {
  let task = btn.parentElement;
  task.remove();
}

function fadd() {
  let inp = document.getElementById("inp");
  let txt = inp.value;

  if (txt.trim() === "") {
    return;
  }
  inp.value = "";

  let div = document.createElement("div");
  div.classList.add("task");

  div.innerHTML = `
            <p class="icon" onclick="fchck(this)">❌</p>
            <p class="txt" onclick="fchck(this)">${txt}</p>
            <button onclick="fremove(this)">Remove</button>
        `;
  document.querySelector(".tasks").appendChild(div);
}
