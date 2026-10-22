"use strict";
const stack = [];
const boxName = document.getElementById("boxName");
const boxQuantity = document.getElementById("boxQuantity");
const boxList = document.getElementById("boxList");
const stackVisual = document.getElementById("stackVisual");
const emptyState = document.getElementById("emptyState");
const stackLayout = document.getElementById("stackLayout");
const count = document.getElementById("count");
const log = document.getElementById("log");

function addLog(message, type = "info") {
  const empty = log.querySelector(".empty");
  if (empty) empty.remove();
  const row = document.createElement("div");
  row.className = "log-entry";
  const dot = document.createElement("span");
  dot.className = "dot " + type;
  const msg = document.createElement("span");
  msg.textContent = message;
  const time = document.createElement("span");
  time.className = "time";
  time.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  row.append(dot, msg, time);
  log.prepend(row);
}

function render() {
  count.textContent = stack.length + (stack.length === 1 ? " box" : " boxes");
  emptyState.hidden = stack.length > 0;
  stackLayout.hidden = stack.length === 0;
  boxList.replaceChildren();
  stackVisual.replaceChildren();

  for (let i = stack.length - 1; i >= 0; i--) {
    const item = document.createElement("div");
    item.className = "box-item" + (i === stack.length - 1 ? " top" : "");
    const info = document.createElement("div");
    const name = document.createElement("div");
    name.className = "box-name";
    name.textContent = stack[i];
    const meta = document.createElement("div");
    meta.className = "box-meta";
    meta.textContent = "Stack position: " + (stack.length - i);
    info.append(name, meta);
    item.append(info);
    if (i === stack.length - 1) {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = "Top · Next out";
      item.append(tag);
    }
    boxList.append(item);

    const crate = document.createElement("div");
    crate.className = "crate";
    crate.title = stack[i];
    crate.setAttribute("aria-label", "Box " + stack[i]);
    stackVisual.append(crate);
  }
}

function loadBox(name) {
  stack.push(name);
  addLog("Loaded box: " + name, "add");
  render();
}

document.getElementById("addBtn").addEventListener("click", () => {
  const name = boxName.value.trim();
  const quantity = Number(boxQuantity.value);
  if (!name) { alert("Please enter a box ID or name."); boxName.focus(); return; }
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 999) {
    alert("Please enter a quantity between 1 and 999."); boxQuantity.focus(); return;
  }
  for (let i = 0; i < quantity; i++) loadBox(quantity === 1 ? name : name + " (" + (i + 1) + ")");
  boxName.value = "";
  boxQuantity.value = "1";
  boxName.focus();
});
boxName.addEventListener("keydown", event => {
  if (event.key === "Enter") document.getElementById("addBtn").click();
});
document.querySelectorAll(".quick-add").forEach(button => {
  button.addEventListener("click", () => { boxName.value = button.dataset.name; boxName.focus(); });
});
document.getElementById("popBtn").addEventListener("click", () => {
  if (!stack.length) { addLog("Unload failed: warehouse is empty.", "clear"); alert("The warehouse is empty. There is no box to unload."); return; }
  addLog("Unloaded box: " + stack.pop(), "remove");
  render();
});
document.getElementById("peekBtn").addEventListener("click", () => {
  if (!stack.length) { addLog("Peek requested, but warehouse is empty."); alert("The warehouse is empty."); return; }
  addLog("Top box is: " + stack[stack.length - 1]);
});
document.getElementById("clearBtn").addEventListener("click", () => {
  if (!stack.length) { addLog("Clear requested: warehouse was already empty."); return; }
  const removed = stack.length;
  stack.length = 0;
  addLog("Warehouse cleared. Removed " + removed + " box(es).", "clear");
  render();
});
document.getElementById("demoBtn").addEventListener("click", () => {
  ["BOX-101", "Electronics", "Food Supplies", "Medical Box", "Fragile Box", "BOX-106"].forEach(loadBox);
});
document.getElementById("allBtn").addEventListener("click", () => {
  if (!stack.length) { addLog("Unload all requested, but warehouse is empty."); alert("The warehouse is already empty."); return; }
  while (stack.length) addLog("Unloaded box: " + stack.pop(), "remove");
  render();
});
document.getElementById("clearLogBtn").addEventListener("click", () => {
  log.replaceChildren();
  const empty = document.createElement("div");
  empty.className = "empty";
  empty.textContent = "Your warehouse activity will appear here.";
  log.append(empty);
});
render();
