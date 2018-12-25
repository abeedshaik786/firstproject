let selectedRow = null
function onFormSubmit() {
    let formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}

function readFormData() {
    let formData = {};
    formData["username"] = document.getElementById("username").value;
    formData["number"] = document.getElementById("number").value;
    formData["money"] = document.getElementById("money").value;
    formData["from"] = document.getElementById("from").value;
    formData["section"] = document.getElementById("section").value;
    return formData;

}

function insertNewRecord(data) {
    let table = document.getElementById('employeelist').getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.username;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.number;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.money;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.from;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.section;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = '<a onclick="Edite(this)" class="text-center text-white btn">Edite</a>';
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = '<a onclick="onDelete(this)" class="text-center text-white btn">delete</a>';
    selectedRow = null;
}

function resetForm() {
    document.getElementById('username').value = '';
    document.getElementById('number').value = '';
    document.getElementById('money').value = '';
    document.getElementById('from').value = '';
    document.getElementById('section').value = '';
    selectedRow = null;
}

function Edite(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('username').value = selectedRow.cells[0].innerHTML;
    document.getElementById('number').value = selectedRow.cells[1].innerHTML;
    document.getElementById('money').value = selectedRow.cells[2].innerHTML;
    document.getElementById('from').value = selectedRow.cells[3].innerHTML;
    document.getElementById('section').value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.username;
    selectedRow.cells[1].innerHTML = formData.number;
    selectedRow.cells[2].innerHTML = formData.money;
    selectedRow.cells[3].innerHTML = formData.from;
    selectedRow.cells[4].innerHTML = formData.section;
}

function onDelete(td) {
    if (confirm('are you sure delete this row?..')) {
        row = td.parentElement.parentElement;
        document.getElementById('employeelist').deleteRow(row.rowIndex);
        resetForm();
    }

}


