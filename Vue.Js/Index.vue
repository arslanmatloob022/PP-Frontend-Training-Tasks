<template>
  <div id="app">
    <div>
      <label for="goal">Goal</label>
      <input type="text" id="goal" />
      <button>Add Goal</button>
    </div>
    <ul></ul>
  </div>
</template>

<script>
const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement("li");
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = "";
}

buttonEl.addEventListener("click", addGoal);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

#app {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

label,
input {
  margin-bottom: 0.5rem;
  display: block;
  width: 100%;
}

label {
  font-weight: bold;
}

ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
}
</style>
