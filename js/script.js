const prdtArray = new Array();
var formDtls = document.forms.form;


handleSubmit = (event) => {
  event.preventDefault();
  const formObj = new Object();
  var formDtls = document.forms.form;
  formObj.code = formDtls.elements["code"].value;
  formObj.category = formDtls.elements["category"].value;
  formObj.name = formDtls.elements["name"].value;
  formObj.quantity = formDtls.elements["quantity"].value;
  formObj.rate = formDtls.elements["rate"].value;

  console.log(JSON.stringify(formObj));

  prdtArray.push(formObj);
  console.log(prdtArray);

  // console.log(table.rows.length)

  productIteration();

  tableHeadAdding();
  formDtls.reset();
};

handleDelete = (n) => {
  var cofm = confirm("Want to delete?");
  if (cofm == true) {
    prdtArray.splice(n, 1);

    productIteration();

    tableHeadAdding();
  } else {
    return false;
  }
};

handleEdit = (n) => {
  document.getElementById("update").style.display = "block";
  document.getElementById("add").style.display = "none";
  document.getElementById("head-btn").style.display = "block";
  document.getElementById("head-lbl").style.display = "none";
  document.getElementById("update-head").innerHTML = "Update Product";

  document.getElementById("code").value = prdtArray[n].code;
  document.getElementById("category").value = prdtArray[n].category;
  document.getElementById("name").value = prdtArray[n].name;
  document.getElementById("quantity").value = prdtArray[n].quantity;
  document.getElementById("rate").value = prdtArray[n].rate;
  document
    .getElementsByTagName("BUTTON")[4]
    .setAttribute(`onclick`, `handleUpdate(${n})`);
};

handleUpdate = (n) => {
    
  prdtArray[n].code = document.getElementById("code").value;
  prdtArray[n].category = document.getElementById("category").value;
  prdtArray[n].name = document.getElementById("name").value;
  prdtArray[n].quantity = document.getElementById("quantity").value;
  prdtArray[n].rate = document.getElementById("rate").value;

  productIteration();
  tableHeadAdding();
  var formDtls = document.forms.form;
  formDtls.reset();

  showAddbtn()

};

//table head adding
tableHeadAdding = () => {
  var header = table.createTHead();
  var row = header.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell1.innerHTML = "<b>Code</b>";
  cell2.innerHTML = "<b>Category</b>";
  cell3.innerHTML = "<b>Name</b>";
  cell4.innerHTML = "<b>Quantity</b>";
  cell5.innerHTML = "<b>Rate</b>";
  cell6.innerHTML = "<b></b>";
};




//product looping
productIteration = () => {
  while (table.rows.length != 0) {
    table.deleteRow(0);
  }
  n = 0;
  prdtArray.forEach((x) => {
    console.log("add");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = x.code;
    cell2.innerHTML = x.category;
    cell3.innerHTML = x.name;
    cell4.innerHTML = x.quantity;
    cell5.innerHTML = x.rate;
    cell6.innerHTML = `<button type='button' class="btn btn-primary" onclick="handleEdit(${n})" ><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
  </button>
     <button type='button' class="btn btn-danger" onclick="return(handleDelete(${n}))" ><i class="fa fa-trash" aria-hidden="true"></i>
    </button>`;
    n = n + 1;
  });
};



showAddbtn=()=>{
    document.getElementById("update-head").innerHTML = "Add Product";
    document.getElementById("update").style.display = "none";
    document.getElementById("add").style.display = "block";
    document.getElementById("head-btn").style.display = "none";
    document.getElementById("head-lbl").style.display = "block";
}