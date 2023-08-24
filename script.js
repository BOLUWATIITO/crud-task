var selectedRow = null;

function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}


function clearFields(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lasttName").value = "";
    document.querySelector("#studentId").value = "";
}


document.querySelector("#student-form").addEventListener("submit",(event) =>{
     event.preventDefault();

     const firstName = document.querySelector("#firstName").value;
     const lastName = document.querySelector("#lastName").value;
     const studentId = document.querySelector("#studentId").value;

     if(firstName== "" || lastName == "" || studentId == ""){
        alert("Please fill in all fields");
     }

     else{
        if(selectedRow == null){
        const list = document.querySelector("#student-list");
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${studentId}</td>
        <td>
        <a href="#" class="btn btn-warning btn-sm edit"> Edit</a>
                                <a href="#" class="btn btn-danger btn-sm delete"> Delete</a>
        `;
        list.appendChild(row);
        selectedRow =null;
        showAlert("Student Added", "success");
     }
     else{
        selectedRow.children[0].textContent = firstName;
        selectedRow.children[1].textContent = lastName;
        selectedRow.children[2].textContent = studentId;
        selectedRow = null;
        showAlert(" Student Info Edited", "info");
     }

        clearFields();
     }
});


document.querySelector("#student-list").addEventListener("click", (event) =>{
    target = event.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
        document.querySelector("#lastName").value = selectedRow.children[1].textContent;
        document.querySelector("#studentId").value = selectedRow.children[2].textContent;
    }
});


document.querySelector("#student-list").addEventListener("click", (event) => {
    target = event.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }
});