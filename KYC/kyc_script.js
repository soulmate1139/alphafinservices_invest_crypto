

document.getElementById('id_front_file').onchange = function () {
    document.getElementById('id_front_label').innerHTML = this.files[0].name;
};

document.getElementById('id_back_file').onchange = function () {
    document.getElementById('id_back_label').innerHTML = this.files[0].name;
};

function submit_file() {
    var frontFile = document.getElementById("id_front_file");
    var backFile = document.getElementById("id_back_file");

    if (frontFile.files.length === 0 || backFile.files.length === 0) {
        swal("Error!", "Please select the front and back picture of your ID.", "error");
        return;
    }
    

    swal("Uploading...", "Please wait while your file is being uploaded.", "info").then(() => {
        show_loader();
        document.getElementById("kyc_form").submit();
        swal("Upload Successful!",
            "Your request is being reviewed, and you should receive an email reply within 48 hours.", "success");
    });
}


function hide_loader() {
    document.getElementById("divElement").style.display = "none";
    //document.getElementById("app").style.visibility = "visible";
}
function show_loader() {
    document.getElementById("divElement").style.display = "block";
    //document.getElementById("app").style.visibility = "hidden";
}