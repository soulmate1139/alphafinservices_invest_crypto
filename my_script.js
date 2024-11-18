if (localStorage.getItem("user_details_holder") == null) {
  localStorage.clear();
  window.location = "auth/trade/login.html";
}
var temp_json = localStorage.getItem("user_details_holder");
var user_details_holder = convert_json_toObject(temp_json);

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

var current_show_status = "hide";
function hide_acct_settings() {
  if (current_show_status == "hide") {
    document.getElementById("collapseExample").classList.add("show");
    current_show_status = "show";
  } else {
    document.getElementById("collapseExample").classList.remove("show");
    current_show_status = "hide";
  }
}

var current_invest_show_status = "hide";
function hide_invest_dropdown() {
  if (current_invest_show_status == "hide") {
    document.getElementById("mpack").classList.add("show");
    current_invest_show_status = "show";
  } else {
    document.getElementById("mpack").classList.remove("show");
    current_invest_show_status = "hide";
  }
}

var current_bg_color = "begin";
if (localStorage.getItem("bg_color") == null) {
  current_bg_color = "light";
  if (document.getElementById("iframe_second") == undefined) {
  } else {
    document.getElementById("iframe_second").src =
      "https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22BTC%22%2C%22ETH%22%2C%22LTC%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22light%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22utm_source%22%3A%22fxprostreamtrade.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%7D";
  }
  document.getElementById("style").checked = false;
} else {
  set_bg_color();
}
function toggle_dark_mode() {
  if (
    (current_bg_color == "light" || current_bg_color == "begin") &&
    localStorage.getItem("bg_color") !== "dark"
  ) {
    localStorage.setItem("bg_color", "dark");
    current_bg_color = "dark";
    set_bg_color();
    if (document.getElementById("iframe_second") == undefined) {
    } else {
      document.getElementById("iframe_second").src =
        "https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22BTC%22%2C%22ETH%22%2C%22LTC%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22utm_source%22%3A%22fxprostreamtrade.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%7D";
    }
  } else {
    localStorage.setItem("bg_color", "light");
    current_bg_color = "light";
    set_bg_color();
    if (document.getElementById("iframe_second") == undefined) {
    } else {
      document.getElementById("iframe_second").src =
        "https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22BTC%22%2C%22ETH%22%2C%22LTC%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22light%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22utm_source%22%3A%22fxprostreamtrade.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%7D";
    }
  }
  location.reload();
}
function set_bg_color() {
  let get_stored_theme = localStorage.getItem("bg_color");
  if (get_stored_theme == "dark") {
    // SET THEME TO DARK
    var bg_lights = document.getElementsByClassName("bg-light");
    for (var bg_light of bg_lights) {
      bg_light.classList.add("bg-dark");
    }

    var bg_darks = document.getElementsByClassName("bg-dark");
    for (var bg_dark of bg_darks) {
      bg_dark.classList.remove("bg-light");
    }

    var text_lights = document.getElementsByClassName("text-dark");
    for (var text_light of text_lights) {
      text_light.classList.add("text-light");
    }
    var text_lights = document.getElementsByClassName("text-light");
    for (var text_light of text_lights) {
      text_light.classList.remove("text-dark");
    }

    document.getElementById("style").checked = true;
    document.getElementsByClassName("logo-header")[0].dataset.backgroundColor =
      "dark";
    document.getElementsByClassName("sidebar")[0].dataset.backgroundColor =
      "dark";
    document.getElementsByClassName(
      "navbar-expand-lg"
    )[0].dataset.backgroundColor = "dark";
    if (document.getElementById("iframe_second") == undefined) {
    } else {
      document.getElementById("iframe_second").src =
        "https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22BTC%22%2C%22ETH%22%2C%22LTC%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22utm_source%22%3A%22fxprostreamtrade.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%7D";
    }
    if (document.getElementsByTagName("iframe") == undefined) {
    } else {
      document.getElementsByTagName("iframe")[0].src =
        "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_c6a09&symbol=COINBASE%3ABTCUSD&interval=1&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=BB%40tv-basicstudies&theme=dark&style=9&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=fxprostreamtrade.com&utm_medium=widget_new&utm_campaign=chart&utm_term=COINBASE%3ABTCUSD";
    }
    //}else {

    //}
  } else if (get_stored_theme == "light") {
    // SET THEME TO LIGHT
    var bg_lights = document.getElementsByClassName("bg-dark");
    for (var bg_light of bg_lights) {
      bg_light.classList.add("bg-light");
    }

    var bg_darks = document.getElementsByClassName("bg-light");
    for (var bg_dark of bg_darks) {
      bg_dark.classList.remove("bg-dark");
    }

    var text_lights = document.getElementsByClassName("text-light");
    for (var text_light of text_lights) {
      text_light.classList.add("text-dark");
    }
    var text_lights = document.getElementsByClassName("text-dark");
    for (var text_light of text_lights) {
      text_light.classList.remove("text-light");
    }

    document.getElementById("style").checked = false;
    document.getElementsByClassName("logo-header")[0].dataset.backgroundColor =
      "blue";
    document.getElementsByClassName("sidebar")[0].dataset.backgroundColor =
      "light";
    document.getElementsByClassName(
      "navbar-expand-lg"
    )[0].dataset.backgroundColor = "blue";

    if (document.getElementById("iframe_second") == undefined) {
    } else {
      document.getElementById("iframe_second").src =
        "https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22BTC%22%2C%22ETH%22%2C%22LTC%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22light%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22utm_source%22%3A%22fxprostreamtrade.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%7D";
    }
    if (document.getElementsByTagName("iframe").length > 2) {
      document.getElementsByTagName("iframe")[0].src =
        "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_eff2d&symbol=COINBASE%3ABTCUSD&interval=1&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=BB%40tv-basicstudies&theme=light&style=9&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=&utm_medium=widget_new&utm_campaign=chart&utm_term=COINBASE%3ABTCUSD";
    }
  } else {
    // DO NOTHING
  }
}
function request_withdraw(id) {
  window.location = "payment_options" + "/" + id + ".html";
}
function join_plan(id) {
  // CHECK IF BALANCE IS ENOUGH FAST
  var amount = document.getElementById("join_plan_" + id).value;
  let remove_dollar_from_price =
        user_details_holder.dashboard.account_balance.replace("$", "");
      let remove_coma_from_price = remove_dollar_from_price.replace(",", "");
      let convert_string_to_int = parseFloat(remove_coma_from_price);

  console.log(amount);
  if (convert_string_to_int < amount) {
    swal("Insufficient balance").then(() => {
      window.location = "account/deposit/fund_page.html"
    });
  } else {
    swal("You currently have an active package!");

    //add to plans
  }
  //document.getElementById("join_plan_" + id).submit();
}

function constructor_dashboard() {
  firebase_initializer();
  var email = user_details_holder.email,
    password = user_details_holder.word;
  auth
    .signInWithEmailAndPassword(email, "Keephopealive123haha")
    .then(function () {
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
      });
      setTimeout(fill_dashboard_data, 3000);
    })
    .catch(function (error) {
      swal("Notification!", error, "error");
      //alert(error)
    });
}
function constructor_transaction_history() {
  firebase_initializer();
  var email = user_details_holder.email,
    password = user_details_holder.word;
  auth
    .signInWithEmailAndPassword(email, "Keephopealive123haha")
    .then(function () {
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
      });
      setTimeout(null, 3000);
    })
    .catch(function (error) {
      swal("Notification!", error, "error");
      //alert(error)
    });
}

function fill_dashboard_data() {
  if (user_details_holder.verify_status !== "verified" && localStorage.getItem("isverified") !== "true") {
    window.location.href = "auth/trade/verify.html";
  }
  document.getElementsByClassName("username_data")[0].innerHTML =
    user_details_holder.dashboard.full_name;
  document.getElementsByClassName("username_data")[1].innerHTML =
    user_details_holder.dashboard.full_name;
  document.getElementsByClassName("username_data")[2].innerHTML =
    user_details_holder.dashboard.full_name;

  document.getElementById("account_balance").innerHTML =
    user_details_holder.dashboard.account_balance;
  document.getElementById("total_profit").innerHTML =
    user_details_holder.dashboard.total_profit;
  document.getElementById("total_bonus").innerHTML =
    user_details_holder.dashboard.total_bonus;
  document.getElementById("total_referral_bonus").innerHTML =
    user_details_holder.dashboard.total_referral_bonus;

  document.getElementById("total_investment_plan").innerHTML =
    user_details_holder.dashboard.total_investment_plan;
  document.getElementById("total_active_investment_plan").innerHTML =
    user_details_holder.dashboard.total_active_investment_plan;
  document.getElementById("total_deposit").innerHTML =
    user_details_holder.dashboard.total_deposit;
  document.getElementById("total_withdraw").innerHTML =
    user_details_holder.dashboard.total_withdrawal;
  document.getElementById("email_data").innerHTML = user_details_holder.email;
}

function fill_profit_record() {
  set_name();
  let temp_record = "";
  if (user_details_holder.roi_history == undefined) {
    temp_record = `<tr class="odd">
            <td valign="top" colspan="4" class="dataTables_empty">No data available in table</td>
        </tr>`;
  } else {
    var get_roi_list_from_db = user_details_holder.roi_history;
    for (var i = 0; i < get_roi_list_from_db.length; i++) {
      temp_record += `<tr role="row" class=${i % 2 == 0 ? "odd" : "even"}>
                    <td>${get_roi_list_from_db[i].plan}</td> 
                    <td>${get_roi_list_from_db[i].amount}</td> 
                    <td>${get_roi_list_from_db[i].type}</td> 
                    <td>${get_roi_list_from_db[i].date_created}</td> 
                </tr>`;
    }
  }
  document.getElementById("profit_record_tbody").innerHTML = temp_record;
}

function fill_transaction_history() {
  set_name();
  var get_withdraw = user_details_holder.transaction_history.withdrawal;
  var get_deposit = user_details_holder.transaction_history.deposit;
  var get_others = user_details_holder.transaction_history.others;

  // FOR DEPOSIT JOINER
  var joiner_deposit = ``;
  if (get_deposit == undefined) {
    joiner_deposit = `<tr class="odd">
            <td valign="top" colspan="4" class="dataTables_empty">No data available in table</td>
            </tr>`;
  } else {
    for (var i = 0; i < get_deposit.length; i++) {
      let badge = "";
      if (get_deposit[i].status == "success") {
        badge = "badge-success";
      } else if (get_deposit[i].status == "pending") {
        badge = "badge-warning";
      } else {
        badge = "badge-danger";
      }

      joiner_deposit += `<tr class="odd"><td class="sorting_1">${get_deposit[i].amount}</td> 
                <td>${get_deposit[i].payment_mode}</td> 
                <td>
                    <span class="badge ${badge}">${get_deposit[i].status}</span>
                </td>
                <td>${get_deposit[i].date_created}</td> </tr>`;
    }
  }
  document.getElementById("transaction_history_deposit_tbody").innerHTML =
    joiner_deposit;
  // FOR DEPOSIT JOINER

  // FOR WITHDRAW JOINER
  var joiner_withdraw = ``;
  if (get_withdraw == undefined) {
    joiner_withdraw = `<tr class="odd">
            <td valign="top" colspan="4" class="dataTables_empty">No data available in table</td>
            </tr>`;
  } else {
    for (var i = 0; i < get_withdraw.length; i++) {
      let badge = "";
      if (get_withdraw[i].status == "success") {
        badge = "badge-success";
      } else if (get_withdraw[i].status == "pending") {
        badge = "badge-warning";
      } else {
        badge = "badge-danger";
      }

      joiner_withdraw += `<tr class="odd"><td>${get_withdraw[i].amount_requested}</td> 
                <td>${get_withdraw[i].amount_and_charges}</td> 
                <td>${get_withdraw[i].mode}</td>
                <td>
                    <span class="badge ${badge}">${get_withdraw[i].status}</span>
                </td>
                <td>${get_withdraw[i].date_created}</td> </tr>`;
    }
  }
  document.getElementById("transaction_history_withdraw_tbody").innerHTML =
    joiner_withdraw;
  // FOR WITHDRAW JOINER

  // FOR OTHERS JOINER
  var joiner_others = ``;
  if (get_others == undefined) {
    joiner_others = `<tr class="odd">
            <td valign="top" colspan="4" class="dataTables_empty">No data available in table</td>
            </tr>`;
  } else {
    for (var i = 0; i < get_others.length; i++) {
      joiner_others += `<tr class="odd"><td class="sorting_1">${get_others[i].amount}</td> 
                <td>${get_others[i].type}</td> 
                <td>${get_others[i].plan}</td>
                <td>${get_others[i].date_created}</td> </tr>`;
    }
  }
  document.getElementById("transaction_history_other_tbody").innerHTML =
    joiner_others;
  // FOR OTHERS JOINER
}

function fill_crypto_exchange() {
  if (document.getElementsByTagName("iframe") == undefined) {
  } else {
    if (localStorage.getItem("bg_color") == "dark") {
      document.getElementsByTagName("iframe")[0].src =
        "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_757c3&symbol=BINANCE%3ABTCUSD&interval=1&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=9&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=fxprostreamtrade.com&utm_medium=widget_new&utm_campaign=chart&utm_term=BINANCE%3ABTCUSD";
    }
  }
  set_name();

  document.getElementById("account_balance").innerHTML =
    user_details_holder.crypto_exchange.account_balance;
  document.getElementById("btc_balance").innerHTML =
    user_details_holder.crypto_exchange.btc + " BTC";
  document.getElementById("eth_balance").innerHTML =
    user_details_holder.crypto_exchange.eth + " ETH";
  document.getElementById("ltc_balance").innerHTML =
    user_details_holder.crypto_exchange.ltc + " LTC";

  document.getElementById("link_balance").innerHTML =
    user_details_holder.crypto_exchange.link + " LINK";
  document.getElementById("bnb_balance").innerHTML =
    user_details_holder.crypto_exchange.bnb + " BNB";
  document.getElementById("ada_balance").innerHTML =
    user_details_holder.crypto_exchange.ada + " ADA";
  document.getElementById("aave_balance").innerHTML =
    user_details_holder.crypto_exchange.aave + " AAVE";

  document.getElementById("usdt_balance").innerHTML =
    user_details_holder.crypto_exchange.usdt + " USDT";
  document.getElementById("bch_balance").innerHTML =
    user_details_holder.crypto_exchange.bch + " BCH";
  document.getElementById("xrp_balance").innerHTML =
    user_details_holder.crypto_exchange.xrp + " XRP";
  document.getElementById("xlm_balance").innerHTML =
    user_details_holder.crypto_exchange.xlm + " XLM";
}

function fill_my_invest() {
  set_name();
  if (user_details_holder.my_investments == undefined) {
  } else {
    window.location = "invest_exist.html";
  }
}
function fill_subscribe_plan() {
  set_name();
}

// FOR INVEST_EXIST JOINER
function fill_invest_exist() {
  set_name();
  var get_invest_exist = user_details_holder.my_investments;
  var joiner_invest_exist = ``;
  if (get_invest_exist == undefined) {
    swal(
      "Notification",
      "You do not have a package at the moment",
      "warning"
    ).then((willDelete) => {
      //window.location = "account/deposit/fund_page.html";
    });
    joiner_invest_exist = `<tr class="odd">
        <td valign="top" colspan="4" class="dataTables_empty">No data available in table</td>
        </tr>`;
  } else {
    for (var i = 0; i < get_invest_exist.length; i++) {
      joiner_invest_exist += `<tr class="odd"><td>${get_invest_exist[i].plan}</td> 
            <td>${get_invest_exist[i].amount}</td> 
            <td>
                <span>${get_invest_exist[i].type}</span>
            </td>
            <td>${get_invest_exist[i].date_created}</td> </tr>`;
    }
  }
  document.getElementById("investment_exists_tbody").innerHTML =
    joiner_invest_exist;
  // FOR INVEST_EXIST JOINER
}
function fill_refer_page() {
  set_name();

  document.getElementById("username_data").innerHTML =
    user_details_holder.refer.username;
  document.getElementById("ref_by").innerHTML = user_details_holder.ref_by;
  document.getElementById("show_referal_link").value =
    window.location.origin + "/ref?id=" + user_details_holder.refer.username;

  let temp_refered_list = "";
  if (user_details_holder.refer.refered_list == undefined) {
    temp_refered_list = `<tr class="odd">
            <td valign="top" colspan="4" class="dataTables_empty">No data available in table</td>
        </tr>`;
  } else {
    var get_refered_list_from_db = user_details_holder.refer.refered_list;
    for (var i = 0; i < get_refered_list_from_db.length; i++) {
      temp_refered_list += `<tr role="row" class=${i % 2 == 0 ? "odd" : "even"}>
                    <td>${get_refered_list_from_db[i].client_name}</td> 
                    <td>${get_refered_list_from_db[i].client_status}</td> 
                    <td>${get_refered_list_from_db[i].deposit_bonus}</td> 
                </tr>`;
    }
  }
  document.getElementById("ref_tbody").innerHTML = temp_refered_list;
}
function fill_help_page() {
  set_name();
}

/////////////////////////////////////////////////////////////////////////////
// BEGIN PROFILE INFORMATION PAGE
/////////////////////////////////////////////////////////////////////////////

function fill_profile_settings() {
  document.getElementById("current_password").value = "";
  set_name();

  // GET PERSONAL INFO
  document.getElementById("fullname_input").value =
    user_details_holder.user_settings.personal_settings.full_name;
  document.getElementById("email_input").value =
    user_details_holder.user_settings.personal_settings.email;
  document.getElementById("phone_input").value =
    user_details_holder.user_settings.personal_settings.phone;
  document.getElementById("dob_input").value =
    user_details_holder.user_settings.personal_settings.dob;
  document.getElementById("country_input").value =
    user_details_holder.user_settings.personal_settings.country;
  //withdrawal_info();
  crypto_info();
}
function withdrawal_info() {
  // GET BANK INFO
  document.getElementById("bank_name").value =
    user_details_holder.user_settings.withdraw_settings.bank_transfer.bank_name;
  document.getElementById("account_name").value =
    user_details_holder.user_settings.withdraw_settings.bank_transfer.account_name;
  document.getElementById("account_no").value =
    user_details_holder.user_settings.withdraw_settings.bank_transfer.account_no;
  document.getElementById("swift_code").value =
    user_details_holder.user_settings.withdraw_settings.bank_transfer.swift_code;
}
function crypto_info() {
  // GET CRYPTO INFO
  console.log(user_details_holder);
  document.getElementById("bnb_address").value =
    user_details_holder.user_settings.withdraw_settings.withdraw_crypto_wallets.withdraw_bnb_wallet ?? "";
  document.getElementById("bch_address").value =
    user_details_holder.user_settings.withdraw_settings.withdraw_crypto_wallets.withdraw_bch_wallet ?? "";
  document.getElementById("usdt_address").value =
    user_details_holder.user_settings.withdraw_settings.withdraw_crypto_wallets.withdraw_usdt_wallet ?? "";
  document.getElementById("solana_address").value =
    user_details_holder.user_settings.withdraw_settings.withdraw_crypto_wallets.withdraw_solana_wallet ?? "";
  document.getElementById("doge_address").value =
    user_details_holder.user_settings.withdraw_settings.withdraw_crypto_wallets.withdraw_doge_wallet ?? "";
  
  document.getElementById("btc_address").value =
    user_details_holder.user_settings.withdraw_settings.withdraw_crypto_wallets.withdraw_btc_wallet ?? "";
  document.getElementById("eth_address").value =
    user_details_holder.user_settings.withdraw_settings.withdraw_crypto_wallets.withdraw_eth_wallet ?? "";
  document.getElementById("ltc_address").value =
    user_details_holder.user_settings.withdraw_settings.withdraw_crypto_wallets.withdraw_ltc_wallet ?? "";
}

function save_personal_info() {
  document.getElementById("app").style.visibility = "hidden";
  document.getElementById("divElement").style.display = "block";
  let temp_personal_obj = {};
  // UPDATE DATABASE
  if (
    document.getElementById("fullname_input").value == "" ||
    document.getElementById("email_input").value == "" ||
    document.getElementById("phone_input").value == "" ||
    document.getElementById("dob_input").value == "" ||
    document.getElementById("country_input").value == ""
  ) {
    //alert("Please input all fields")
    swal("Notification!", "Please input all fields", "warning");
  } else {
    temp_personal_obj.full_name =
      document.getElementById("fullname_input").value;
    temp_personal_obj.email = document.getElementById("email_input").value;
    temp_personal_obj.phone = document.getElementById("phone_input").value;
    temp_personal_obj.dob = document.getElementById("dob_input").value;
    temp_personal_obj.country = document.getElementById("country_input").value;

    update_info_in_db(temp_personal_obj, "personal");
  }
}
function save_withdraw_info() {
  // IF NOT EMPTY THEN SAVE
  document.getElementById("app").style.visibility = "hidden";
  document.getElementById("divElement").style.display = "block";

  var withdraw_solana_wallet = document.getElementById("solana_address").value,
    withdraw_bnb_wallet = document.getElementById("bnb_address").value,
    withdraw_bch_wallet = document.getElementById("bch_address").value,
    withdraw_usdt_wallet = document.getElementById("usdt_address").value,
    withdraw_doge_wallet = document.getElementById("doge_address").value,
    withdraw_btc_wallet = document.getElementById("btc_address").value,
    withdraw_eth_wallet = document.getElementById("eth_address").value,
    withdraw_ltc_wallet = document.getElementById("ltc_address").value;

  // var temp_bank_settings = {
  //   bank_name,
  //   account_name,
  //   account_no,
  //   swift_code,
  // };
  var temp_crypto_settings = {
    withdraw_btc_wallet,
    withdraw_eth_wallet,
    withdraw_ltc_wallet,
    withdraw_doge_wallet,
    withdraw_solana_wallet,
    withdraw_bnb_wallet,
    withdraw_bch_wallet,
    withdraw_usdt_wallet
  };
  var temp_withdraw_settings = {
    //bank_transfer: temp_bank_settings,
    withdraw_crypto_wallets: temp_crypto_settings,
  };
  user_details_holder.user_settings.withdraw_settings.withdraw_crypto_wallets = temp_crypto_settings;
  update_info_in_db(temp_withdraw_settings, "withdraw");
}
function save_password_info() {
  if (
    document.getElementById("current_password").value ==
    user_details_holder.word
  ) {
    if (
      document.getElementById("new_password1").value == "" &&
      document.getElementById("new_password2").value == ""
    ) {
      swal("Error!", "Kindly enter your new password", "warning");
    } else {
      if (
        document.getElementById("new_password1").value ==
        document.getElementById("new_password2").value
      ) {
        user_details_holder.word =
          document.getElementById("new_password1").value;
        //user_details_holder.password_settings.word = document.getElementById("new_password1").value;
        swal("Notification!", "password changed", "success");
        //alert("password changed")
        update_info_in_db("null", "password");
      } else {
        swal("Notification!", "New password not match", "warning");
      }
    }
  } else {
    swal("Notification!", "Your password is Incorrect", "error");
  }
}

//  UPDATE USER INFORMATION IN DATABASE
function update_info_in_db(data, type) {
  if (firebaseConfig == undefined) {
    firebase_initializer();
  }
  var email = user_details_holder.email;

  auth
    .signInWithEmailAndPassword(email, "Keephopealive123haha")
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;
      // Add this user to Firebase Database
      var database_ref = database.ref();

      let temp_data = user_details_holder.user_settings;
      // Create User data
      var user_data;
      if (type == "personal") {
        user_data = {
          user_settings: {
            ...temp_data,
            personal_settings: data,
          },
        };
      } else if (type == "withdraw") {
        user_data = {
          user_settings: {
            ...temp_data,
            withdraw_settings: data,
          },
        };
      } else if (type == "password") {
        user_data = user_details_holder;
      } else {
      }
      // Push to Firebase Database
      database_ref.child("users/" + user.uid).update(user_data);
      swal("Notification", "Information Updated", "success");
      document.getElementById("app").style.visibility = "visible";
      document.getElementById("divElement").style.display = "none";
    })
    .catch(function (error) {
      document.getElementById("app").style.visibility = "visible";
      document.getElementById("divElement").style.display = "none";
      //var error_code = error.code;
      var error_message = error.message;
      swal("Notification!", error_message, "error");
      //alert(error_message)
    });
}
/////////////////////////////////////////////////////////////////////////////
// END PROFILE INFORMATION PAGE
/////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// BEGIN DEPOSIT PAGE
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// END DEPOSIT PAGE
//////////////////////////////////////////////////////////////////////////////

function set_name() {
  document.getElementsByClassName("fullname_data")[0].innerHTML =
    user_details_holder.dashboard.full_name;
  document.getElementsByClassName("fullname_data")[1].innerHTML =
    user_details_holder.dashboard.full_name;
  document.getElementById("email_data").innerHTML = user_details_holder.email;
}

function convert_json_toObject(temp_json) {
  return "retrievedObject: ", JSON.parse(temp_json);
}

function onLogout() {
  localStorage.clear();
  user_details_holder = null;
  window.location.href = window.location.origin + "/auth/trade/login.html";
}


function save_others_setting() {
  swal("Notification", "Information Updated", "success");
}