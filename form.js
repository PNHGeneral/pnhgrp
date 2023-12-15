

function ajaxpost () {
    // (A) GET FORM DATA
    var data = new FormData(document.getElementById("myForm"));
   
    // (B) AJAX REQUEST
    // (B1) POST DATA TO SERVER, RETURN RESPONSE AS TEXT
    fetch("1c-server.html", { method:"POST", body:data })
    .then(res => res.text())
   
    // (B2) SHOW MESSAGE ON SERVER RESPONSE
    .then(response => {
      console.log(response);
      if (response == "OK") { alert("SUCCESSFUL!"); }
      else { alert("FAILURE!"); }
    } )
}