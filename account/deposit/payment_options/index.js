if (user_details_holder == undefined) {
  window.location = "../../../auth/trade/login.html";
}

var deposit_amount = localStorage.getItem("deposit_amount");
if (document.getElementById("deposit_amount") !== undefined) {
  document.getElementById("deposit_amount").innerHTML = "$" + deposit_amount;
}

function fund_page_constructor() {
  set_names();
}
function skrill_constructor() {
  set_names();
  document.getElementById("skrill_address").value =
    user_details_holder.fund_account.skrill_address;
}
function bitcoin_constructor() {
  set_names();
  document.getElementById("myInput").value =
    user_details_holder.fund_account.deposit_btc_address;
}
function ethereum_constructor() {
  set_names();
  document.getElementById("myInput").value =
    user_details_holder.fund_account.deposit_eth_address;
}
function litcoin_constructor() {
  set_names();
  document.getElementById("myInput").value =
    user_details_holder.fund_account.deposit_lit_address;
}

function usdt_constructor() {
  set_names();
  document.getElementById("myInput").value =
    user_details_holder.fund_account.deposit_usdt_address;
}
function solana_constructor() {
  set_names();
  document.getElementById("myInput").value =
    user_details_holder.fund_account.deposit_solana_address;
}

function bnb_constructor() {
  set_names();
  document.getElementById("myInput").value =
    user_details_holder.fund_account.deposit_bnb_address;
}
function bch_constructor() {
  set_names();
  document.getElementById("myInput").value =
    user_details_holder.fund_account.deposit_bch_address;
}

function doge_constructor() {
  set_names();
  document.getElementById("myInput").value =
    user_details_holder.fund_account.deposit_doge_address;
}
function paypal_constructor() {
  set_names();
  document.getElementById("myInput").value =
    user_details_holder.fund_account.paypal_address;
}

function bank_transfer_constructor() {
  set_names();
  document.getElementById("myInput").value =
    user_details_holder.fund_account.bch_address;
  // document.getElementById("deposit_bank_name").value =
  //   user_details_holder.fund_account.bank_transfer.bank_name;
  // document.getElementById("deposit_account_name").value =
  //   user_details_holder.fund_account.bank_transfer.account_name;
  // document.getElementById("deposit_account_no").value =
  //   user_details_holder.fund_account.bank_transfer.account_no;
  // document.getElementById("swift_code").value =
  //   user_details_holder.fund_account.bank_transfer.swift_code;
  // document.getElementById("userName").value = 
  //   user_details_holder.dashboard.full_name;
  // document.getElementById("callback").value =
  //   window.location.href;
}
function stripe_constructor() {
  set_names();
}
function paystack_constructor() {
  set_names();
}

function btn_submit_deposit() {
  show_loader();
  var deposit_type = document.getElementById("payment_method").value;
  var deposit_amount = document.getElementById("deposit_amount").innerHTML;
  var deposit_proof = document.getElementById("deposit_proof").files.length;

  let new_history_object = {},
    get_previous_deposit_histories_array = [];
  if (user_details_holder.transaction_history.deposit == undefined) {
  } else {
    get_previous_deposit_histories_array =
      user_details_holder.transaction_history.deposit;
  }
  if (deposit_proof == 0) {
    hide_loader();
    swal(
      "Notification!",
      "Kindly upload a proof of your transaction",
      "warning"
    );
    //alert("Kindly upload a proof of your transaction")
  } else {
    try {
      //swal("Notification!", "Your transaction is now processing!", "success");
      //alert("Your transaction is now processing!")
      new_history_object.amount = deposit_amount;
      new_history_object.payment_mode = deposit_type;
      new_history_object.status = "pending";
      new_history_object.date_created = getCurrentTime(new Date());

      get_previous_deposit_histories_array.push(new_history_object);

      //user_details_holder.transaction_history.deposit = get_previous_deposit_histories_array;
      save_to_database(get_previous_deposit_histories_array);
      //setTimeout(save_to_database, 4000)

      //document.getElementById("form_send_deposit").submit();
      //window.location = "../../../dashboard.html";
    } catch (err) {
      hide_loader();
      console.log(err);
    }
  }
}

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
function save_to_database(deposit_history) {

  //console.log(deposit_history)
  let withdraw_history = user_details_holder.transaction_history.withdrawal,
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
          deposit: deposit_history,
          withdrawal: withdraw_history == undefined ? [] : withdraw_history,
          others: other_history == undefined ? [] : other_history,
        },
      };
      // Push to Firebase Database
      database_ref.child("users/" + user.uid).update(user_data);
      // setTimeout(deposit_done, 4000);
      deposit_done();
    })
    .catch(function (error) {
      //var error_code = error.code;
      hide_loader();
      var error_message = error.message;
      swal("Notification!", error_message, "error");
      //alert(error_message)
    });
}

function deposit_done() {
  hide_loader();
  swal(
    "Notification",
    "Please wait while your request is being processed.",
    "info"
  ).then((err) => {
    show_loader();
    document.getElementById("amount").value = deposit_amount;
    document.getElementById("userName").value = user_details_holder.user_settings.personal_settings.full_name;
    document.getElementById("form_send_deposit").action =
      "../../../auth/php/send_receipt.php";
    // "../../../dashboard.html";
    document.getElementById("form_send_deposit").submit();
    //window.location = "../../../dashboard.html";
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

function set_names() {
  if (deposit_amount > 200000) {
    swal({
      title: `Hello ${user_details_holder.dashboard.full_name},`,
      text: "To make a deposit above 200,000 USD, you need to verify your account. Would you like to proceed to the KYC section now?",
      icon: "info",
      buttons: {
        cancel: {
          text: "Cancel",
          value: null,
          visible: true,
          className: "",
          closeModal: true,
        },
        confirm: {
          text: "Proceed to KYC",
          value: true,
          visible: true,
          className: "",
          closeModal: true,
        }
      }
    }).then((willProceed) => {
      if (willProceed) {
        window.location = "../../../KYC/index.html";
      }
    });

  }

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
