// Funktion für den Add button.

function addToLocalStorage() {
  const key = document.getElementById("key").value;
  const value = document.getElementById("value").value;

  if (key && value) {
    localStorage.setItem(key, value);
    updateStorageTable();
  }
}
// Clear Funktion damit die Sachen im Localstorage wieder gelöscht werden.
function clearLocalStorage() {
  localStorage.clear();
  updateStorageTable();
}

// Die Tabelle wird aktualisert um werte anzuzeigen
function updateStorageTable() {
  const storageTable = document.getElementById("storageTable");
  storageTable.innerHTML = "";

  const keys = Object.keys(localStorage);
  document.getElementById("count").innerText = keys.length;

  keys.forEach((key, index) => {
    const value = localStorage.getItem(key);
    const row = `<tr>
            <td>${index + 1}</td>
            <td>${key}</td>
            <td>${value}</td>
        </tr>`;
    storageTable.innerHTML += row;
  });
}

document.addEventListener("DOMContentLoaded", updateStorageTable);

// JSON 3 Key-Value

var data = {
  name: "Robin",
  lastName: "Wübbenhorst",
  wohnort: "Niedersachsen",
};
console.log(data);
console.log("Name: " + data.name);
console.log("LastName: " + data.lastName);
console.log("Wohnort: " + data.wohnort);
// test
