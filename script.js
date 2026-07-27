let data = [];
let ascending = true;

fetch("data.json")
  .then(function(res) {
    return res.json();
  })
  .then(function(json) {
    data = json;
    showData(data);
  });

function showData(list) {
  let table = document.getElementById("tableBody");
  table.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    let item = list[i];

    table.innerHTML += "<tr>" +
      "<td>" + item.fault_id + "</td>" +
      "<td>" + item.street + "</td>" +
      "<td>" + (item.ward || "N/A") + "</td>" +
      "<td>" + item.status + "</td>" +
      "<td>" + (item.technician || "Not Assigned") + "</td>" +
      "</tr>";
  }

  document.getElementById("count").innerText = "Total: " + list.length;
}

function searchData() {
  let text = document.getElementById("search").value.toLowerCase();
  let statusValue = document.getElementById("filter").value;
  let wardValue = document.getElementById("wardFilter").value;

  let result = [];

  for (let i = 0; i < data.length; i++) {
    let item = data[i];

    let searchMatch = item.street.toLowerCase().includes(text);
    let statusMatch = (statusValue === "all" || item.status === statusValue);
    let wardMatch = (wardValue === "all" || item.ward === wardValue);

    if (searchMatch && statusMatch && wardMatch) {
      result.push(item);
    }
  }

  showData(result);
}

function filterData() {
  let text = document.getElementById("search").value.toLowerCase();
  let statusValue = document.getElementById("filter").value;
  let wardValue = document.getElementById("wardFilter").value;

  let result = [];

  for (let i = 0; i < data.length; i++) {
    let item = data[i];

    let searchMatch = item.street.toLowerCase().includes(text);
    let statusMatch = (statusValue === "all" || item.status === statusValue);
    let wardMatch = (wardValue === "all" || item.ward === wardValue);

    if (searchMatch && statusMatch && wardMatch) {
      result.push(item);
    }
  }

  showData(result);
}

function sortTable(column) {
  ascending = !ascending;

  data.sort(function(a, b) {
    let A = a[column] || "";
    let B = b[column] || "";

    if (A < B) return ascending ? -1 : 1;
    if (A > B) return ascending ? 1 : -1;
    return 0;
  });

  filterData();
}