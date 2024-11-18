if (user_details_holder == undefined) {
  window.location = "../../../auth/trade/login.html";
}
set_previous_data_before_reload();

function send_otp_to_mail() {
  show_loader();
  //swal("Notification", "code sent!", "success");
  console.log("here")
  var otp_code = generate_otp(),
    send_to = user_details_holder.email;
  localStorage.setItem("otp_code", otp_code);

  var data = {
    email: send_to,
    subject: "Withdrawal OTP Request",
    msg: otp_code,
    name: user_details_holder.user_settings.personal_settings.full_name
  };
  var temp = JSON.stringify(data);
  var baseUrl = window.location.origin; // Get the base URL (protocol + domain + port)
  // var withdrawalUrl = baseUrl + "/stock/auth/php/withdrawal.php"; // Absolute URL
  var withdrawalUrl = "https://gtsfastservice.com/test/php/withdrawal.php"; // Absolute URL
  $.ajax({
    type: "post",
    dataType: "json",
    url: withdrawalUrl,
    data: { data: temp }, // stringyfy before passing
    success: function (status) {
      console.log(status);
      if (status == "success") {
        swal("Notification", "code sent!", "success");
      } else {
        alert("something went wrong, try again.");
      }
      hide_loader();
    },
    error: function (status) {
      if (status == "failed") {
        alert("Network Issues!");
        console.log(status);
      }
    },
  });
}
function submit_withdraw_form() {
  // show_loader();
  if (check_empty_fields() == false) {
    if (
      localStorage.getItem("otp_code") ==
      document.getElementById("otp_input").value
    ) {
      let remove_dollar_from_price =
        user_details_holder.dashboard.account_balance.replace("$", "");
      let remove_coma_from_price = remove_dollar_from_price.replace(",", "");
      let convert_string_to_int = parseFloat(remove_coma_from_price);
      if (
        convert_string_to_int > document.getElementById("amount_input").value
      ) {
        if (document.getElementById("amount_input").value < 10) {
          swal("Sorry", "The minimum withdrawal is $10", "warning");
        } else {
          if(user_details_holder.withdrawMsg[0].toLowerCase() !== "sorry"){
          // THEN SUBMIT WITHDRAWAL FORM
          // swal("Processing", "Your withdrawal is in progress!", "success");
          //alert("Your withdrawal is in progress!")
          // ADD INFO TO WITHDRAW HISTORY
          send_withdraw_info_to_db();

          //document.getElementById("form_submit_withdraw").submit();
          } else{
            swal(
              user_details_holder.withdrawMsg[0],
              user_details_holder.withdrawMsg[1],
              user_details_holder.withdrawMsg[2]
            );
          }
        }
      } else {
        swal("Sorry!", "your account balance is too low for this transaction", "error");
      }
    } else {
      hide_loader();
      // otp is incorrect
      swal("Sorry", "code is incorrect", "error");
      //alert("code is incorrect!")
    }
  }
}

function send_withdraw_info_to_db() {
  var withdraw_type = document.getElementById("withdraw_method").value;
  var withdraw_amount = document.getElementById("amount_input").value;

  var fee = 0;
  if (withdraw_type == "Bitcoin") {
    
  } else if (withdraw_type == "Doge") {
    fee = withdraw_amount * 0.02;
  } else if (withdraw_type == "Ethereum") {

  } else if (withdraw_type == "Litecoin") {

  } else if (withdraw_type == "Skrill") {

  } else { }
  
  let new_history_object = {},
    get_previous_withdraw_histories_array = [];
  if (user_details_holder.transaction_history.withdrawal == undefined) {
  } else {
    get_previous_withdraw_histories_array =
      user_details_holder.transaction_history.withdrawal;
  }
  try {
    //alert("Your transaction is now processing!")
    new_history_object.amount_requested = withdraw_amount;
    new_history_object.amount_and_charges = parseFloat(withdraw_amount) + fee;

    new_history_object.mode = withdraw_type;
    new_history_object.status = "pending";
    new_history_object.date_created = getCurrentTime(new Date());

    get_previous_withdraw_histories_array.push(new_history_object);

    //user_details_holder.transaction_history.withdraw = get_previous_withdraw_histories_array;
    //console.log(get_previous_withdraw_histories_array);
    save_to_database(get_previous_withdraw_histories_array);
    //setTimeout(save_to_database, 4000)

    //window.location = "../../../dashboard.html";
  } catch (err) {
    hide_loader();
    console.log(err);
  }
}

////////////////////////////////////////////////////////
//   BEGIN OF CONSTRUCTORS
////////////////////////////////////////////////////////

function withdraw_funds_constructor() {
  set_names();
}
function skrill_constructor() {
  set_names();
}
function litecoin_constructor() {
  set_names();
}
function ethereum_constructor() {
  set_names();
}
function doge_constructor() {
  set_names();
}
function bitcoin_constructor() {
  set_names();
}
function bank_transfer_constructor() {
  set_names();
}

////////////////////////////////////////////////////////
//   END OF CONSTRUCTORS
////////////////////////////////////////////////////////

var firebaseConfig, auth, database;
function firebase_initializer() {
  firebaseConfig = {
    apiKey: "AIzaSyD33YoQkbeQYR7bV3Gtr6xJMzO_SUAoLeI",
    authDomain: "dizzyfriendcrypto.firebaseapp.com",
    projectId: "dizzyfriendcrypto",
    storageBucket: "dizzyfriendcrypto.appspot.com",
    messagingSenderId: "658978217510",
    appId: "1:658978217510:web:254cadd5ff68f96fd9d0e7",
    measurementId: "G-4M3Q3V2Q8S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

  //Initialize variables
  auth = firebase.auth();
  database = firebase.database();
}
function save_to_database(withdraw_history) {
  //console.log(deposit_history)
  let deposit_history = user_details_holder.transaction_history.deposit,
    other_history = user_details_holder.transaction_history.others;
  firebase_initializer();
  var email = user_details_holder.email;

  auth
    .signInWithEmailAndPassword(email, "Keephopealive123haha")
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;
      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        transaction_history: {
          deposit: deposit_history == undefined ? [] : deposit_history,
          withdrawal: withdraw_history,
          others: other_history == undefined ? [] : other_history,
        },
      };
      // Push to Firebase Database
      database_ref.child("users/" + user.uid).update(user_data);
      // setTimeout(withdraw_done, 4000);
      withdraw_done();
    })
    .catch(function (error) {
      hide_loader();
      //var error_code = error.code;
      var error_message = error.message;
      swal("Notification!", error_message, "error");
      //alert(error_message)
    });
}

function withdraw_done() {
  hide_loader();
  localStorage.setItem("otp_code", "iukyjthgdkjgb");

  let messageToDisplay = user_details_holder.withdrawMsg;
  if (!messageToDisplay) {
    messageToDisplay[0] = "Sorry!";
    messageToDisplay[1] = "your account balance is too low for this transaction";
    messageToDisplay[2] = "info";
  }
  hide_loader();
  swal(
    messageToDisplay[0],
    messageToDisplay[1],
    messageToDisplay[2]
  ).then(
    (err) => {
      document.getElementById("form_submit_withdraw").action =
        "../../../dashboard.html";
      document.getElementById("form_submit_withdraw").submit();
      //window.location = "../../../dashboard.html";
    }
  );
}
function hide_loader() {
  document.getElementById("divElement").style.display = "none";
  document.getElementById("app").style.visibility = "visible";
}
function show_loader() {
  document.getElementById("divElement").style.display = "block";
  document.getElementById("app").style.visibility = "hidden";
}

function set_names() {
  document.getElementsByClassName("fullname_data")[0].innerHTML =
    user_details_holder.dashboard.full_name;
  document.getElementsByClassName("fullname_data")[1].innerHTML =
    user_details_holder.dashboard.full_name;
  document.getElementById("email_data").innerHTML = user_details_holder.email;
}

function getCurrentTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return (
    date.getMonth() +
    1 +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    "  " +
    strTime
  );
}

// HELPER FUNCTIONS

function check_empty_fields() {
  var amount_input = document.getElementById("amount_input").value;
  var otp_input = document.getElementById("otp_input").value;
  var address_input = "not_available";
  if (document.getElementById("address_input") !== null) {
    address_input = document.getElementById("address_input").value;
  }
  if (
    amount_input == "" ||
    otp_input == "" ||
    (address_input == "" && address_input !== "not_available")
  ) {
    swal("Notification!", "Kindly input all fields", "warning");
    //alert("Kindly input all fields")
    //location.reload();
    return true;
  }
  
  var tepmp = document.getElementById("fullname_input");
  if (tepmp !== null) {
    if(tepmp.value == ""){
      swal("Notification!", "Kindly input all fields", "warning");
      return true;
    }
  }

  return false;
}
function set_previous_data_before_reload() {
  document.getElementById("amount_input").value = localStorage.getItem(
    "amount_before_reload"
  );
  if (document.getElementById("address_input") !== null) {
    document.getElementById("address_input").value = localStorage.getItem(
      "address_before_reload"
    );
  }
}
function check_otp_code() {
  if (
    localStorage.getItem("otp_code") ==
    document.getElementById("otp_input").value
  ) {
    return true;
  }
  return false;
}
function generate_otp() {
  let rand_numb = Math.floor(Math.random() * (999998 - 100000 + 1)) + 100000;
  return rand_numb+"";
}
