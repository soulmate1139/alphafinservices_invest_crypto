"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[25597],{88035:(e,_,t)=>{var i;t.d(_,{BillingCycle:()=>i}),function(e){e.Monthly="m",e.ThreeMonths="3m",e.OneYear="y",e.TwoYears="2y"}(i||(i={}))},9965:(e,_,t)=>{var i,r,n;t.d(_,{ProPlans:()=>i,BrokerPlansIds:()=>n}),function(e){e.Free="free",e.Pro="pro",e.ProTrial="pro_trial",e.ProRealtime="pro_realtime",e.ProRealtimeTrial="pro_realtime_trial",e.ProPremium="pro_premium",e.ProPremiumTrial="pro_premium_trial",e.ProMiniAlerts="pro_mini_alerts",e.ProMiniAds="pro_mini_ads",e.ProMiniLayouts="pro_mini_layouts",e.ProEdu="pro_edu"}(i||(i={})),function(e){e.Platinum="platinum",e.Gold="gold",e.Silver="silver",e.Free="free"}(r||(r={})),function(e){e[e.Platinum=3]="Platinum",e[e.Gold=2]="Gold",e[e.Silver=1]="Silver",e[e.Free=0]="Free"}(n||(n={}))},34405:(e,_,t)=>{t.r(_),t.d(_,{TRIAL_SUFFIX:()=>a,EA_SUFFIX:()=>o,CUSTOM_SUFFIX:()=>l,billingCycleToTimeUnit:()=>T,getReadableCycle:()=>S,getReadableNumericCycle:()=>E,billingPeriodText:()=>s,isEarlyAccess:()=>A,isTrialProduct:()=>R,getProductForTrial:()=>u,getDiscountFromEarlyAccess:()=>d,toEarlyAccess:()=>I,humanizeProPlan:()=>c,humanizeCardPlan:()=>m,getAmountOfDaysForBillingCycle:()=>L,countDiscountByBillingCycle:()=>O,billingCycleToMonth:()=>C,round2:()=>N,round0:()=>P,floor0:()=>g,round2or0:()=>D,round1or0:()=>f,roundMinimal:()=>p,getPlanName:()=>b});t(97116);var i=t(87236),r=t(9965),n=t(88035);const a="_trial",o="_discount",l="_custom";function T(e){return{y:(0,i.t)("year",{plural:"years",count:1}),m:(0,i.t)("month",{plural:"months",count:1}),"3m":(0,i.t)("three months"),"2y":(0,i.t)("two years")}[e]}function S(e){return{m:(0,i.t)("monthly"),y:(0,i.t)("annually"),"3m":(0,i.t)("3 months"),"2y":(0,i.t)("2-year")}[e]||""}function E(e){return{[n.BillingCycle.Monthly]:(0,i.t)("monthly"),[n.BillingCycle.OneYear]:(0,i.t)("1 year"),[n.BillingCycle.ThreeMonths]:(0,i.t)("3 months"),[n.BillingCycle.TwoYears]:(0,i.t)("2 years")}[e]||""}function s(e){var _;return null!==(_={y:(0,i.t)("Billed every year."),m:(0,i.t)("Billed every month."),"2y":(0,i.t)("Billed every two years.")}[e])&&void 0!==_?_:""}function A(e){return/\d{0,2}_discount$/.test(e)}function R(e){return new RegExp(a+"$").test(e)}function u(e){return e.split(a)[0]}function d(e){const _=e.match(new RegExp("^(d{0,2})"+o+"$"));return _?+_[1]||50:0}function I(e,_){return`${e}_${_}${o}`}function c(e,_){let t=e;switch(e){case r.ProPlans.Pro:t="Pro";break;case r.ProPlans.ProRealtime:t="Pro+";break;case r.ProPlans.ProPremium:t="Premium";break;case r.ProPlans.ProMiniAds:case r.ProPlans.ProMiniLayouts:case r.ProPlans.ProMiniAlerts:t=(0,i.t)("1-feature");break;case r.ProPlans.ProEdu:t=(0,i.t)("Rookie")}return _&&(t+=" "+(0,i.t)("trial")),t}function m(e){let _=e;switch(e){case r.ProPlans.Pro:_="Pro";break;case r.ProPlans.ProRealtime:_="Pro+";break;case r.ProPlans.ProPremium:_="Premium";break;case r.ProPlans.Free:_="Basic"}return _}function L(e){switch(e){case n.BillingCycle.TwoYears:return 730;case n.BillingCycle.OneYear:return 365
;case n.BillingCycle.ThreeMonths:return 90;case n.BillingCycle.Monthly:return 30;default:return 1}}function O(e,_,t){return Math.round((_-e)*C(t))}function C(e){switch(e){case n.BillingCycle.TwoYears:return 24;case n.BillingCycle.OneYear:return 12;default:return 1}}function N(e){return(Math.round(100*e)/100).toFixed(2)}function P(e){const _=Math.round(100*e)/100;return Math.round(_).toFixed(0)}function g(e){return Math.floor(e).toString()}function D(e){const _=Math.round(100*e)/100,t=Math.round(_);return Math.abs(_-t)>0?_.toFixed(2):t.toFixed(0)}function f(e){return Number.isInteger(e)?e.toFixed(0):(Math.round(10*e)/10).toFixed(1)}function p(e){const _=Math.round(100*e)/100,t=Math.round(10*e)/10,i=Math.round(_);return Math.abs(_-i)>0?Math.abs(_-t)>0?_.toFixed(2):t.toFixed(1):i.toFixed(0)}function b(e){const _=(0,i.t)("{proPlanName} Trial");if(R(e)){const t=c(u(e));return _.format({proPlanName:t})}return c(e)}},66974:(e,_,t)=>{function i(e=location.host){return-1!==["i18n.tradingview.com","partial.tradingview.com","www.tradingview.com","wwwcn.tradingview.com"].indexOf(e)||-1!==["d33t3vvu2t2yu5.cloudfront.net","dwq4do82y8xi7.cloudfront.net","s.tradingview.com","s3.tradingview.com"].indexOf(e)||e.match(/^[a-z]{2}\.tradingview\.com/)||e.match(/prod-[^.]+.tradingview.com/)?"battle":e.includes("tradingview.com")||e.includes("staging")?"staging":e.match(/webcharts/)?"staging_local":(e.match(/^localhost(:\d+)?$/),"local")}function r(){return"local"===i()}function n(){return"battle"===i()}function a(){return!n()}t.r(_),t.d(_,{environment:()=>i,isLocal:()=>r,isProd:()=>n,isDebug:()=>a})},60507:(e,_,t)=>{t.d(_,{enabled:()=>l,getConfig:()=>T})
;const i=JSON.parse('{"free":{"CHART_STORAGE":{"limit":1},"MULTIPLE_CHARTS":{"limit":1},"INDICATORS_ON_CHART":{"limit":3},"HISTORICAL_BARS":{"limit":5},"STUDY_ON_STUDY":{"limit":270,"child_limit":1},"SERVER_SIDE_ALERTS":{"limit":1},"SCREENER_ALERTS":{"limit":1},"SCREENER_INTERVALS":{"interval":["1D","1W","1M"]},"STUDY_TEMPLATES":{"limit":1},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]}},"__legacy_pro":{"CHART_STORAGE":{"limit":99999},"MULTIPLE_CHARTS":{"limit":8},"CUSTOM_INTERVALS":{},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"INDICATORS_ON_CHART":{"limit":99999},"HISTORICAL_BARS":{"limit":10},"TV_VOLUMEBYPRICE":{"study_packages":["tv-volumebyprice"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":99999},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":20},"SCREENER_ALERTS":{"limit":99999},"SCREENER_AUTO_REFRESH":{},"SCREENER_EXPORT_DATA":{},"SCREENER_INTERVALS":{"interval":["1m","5m","15m","30m","1h","2h","4h","1D","1W","1M"]},"NO_SPONSORED_ADS":{},"STUDY_TEMPLATES":{"limit":99999},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"IDC_AVAILABLE_DELAY":{},"STATUS":{"disable_on_trial":true},"MULTIFLAGGED_SYMBOLS_LISTS":{},"BAR_REPLAY_INTRADAY":{},"SHOWS":{"disable_on_trial":true},"ALERTS_WEBHOOK":{},"DEEP_FUNDAMENTALS_HISTORY":{},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram"],"disable_on_trial":true},"MULTI_MONITOR":{},"PUBLISH_PROTECTED_SCRIPTS":{"disable_on_trial":true}},"__legacy_pro_realtime":{"extends":"__legacy_pro","TV_PROSTUDIES":{"study_packages":["tv-prostudies"]},"SERVER_SIDE_ALERTS":{"limit":1000},"CAN_EDIT_PUBLIC_CHATS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"CUSTOM_FORMULAS":{},"INTRADAY_EXOTIC_CHARTS":{}},"__legacy_pro_premium":{"extends":"__legacy_pro_realtime","HISTORICAL_BARS":{"limit":20},"IDEA_SIGNATURE":{"disable_on_trial":true},"PROFILE_WEBSITE_FIELD":{"disable_on_trial":true},"ALERTS_NO_EXPIRATION":{},"PUBLISH_INVITE_ONLY_SCRIPTS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"DEEP_HISTORY_BACKTEST":{"disable_on_trial":true},"ALERTS_ON_SECONDS":{},"PERMANENT_STREAM_RECORDS":{},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram","Website"],"disable_on_trial":true},"SECONDS_INTERVALS":{}},"pro":{"CHART_STORAGE":{"limit":5},"MULTIPLE_CHARTS":{"limit":2},"CUSTOM_INTERVALS":{},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"INDICATORS_ON_CHART":{"limit":5},"HISTORICAL_BARS":{"limit":10},"TV_VOLUMEBYPRICE":{"study_packages":["tv-volumebyprice"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":1},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":20},"SCREENER_ALERTS":{"limit":99999},"SCREENER_AUTO_REFRESH":{},"SCREENER_EXPORT_DATA":{},"SCREENER_INTERVALS":{"interval":["1m","5m","15m","30m","1h","2h","4h","1D","1W","1M"]},"NO_SPONSORED_ADS":{},"STUDY_TEMPLATES":{"limit":99999},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"IDC_AVAILABLE_DELAY":{},"STATUS":{"disable_on_trial":true},"BAR_REPLAY_INTRADAY":{},"MULTIFLAGGED_SYMBOLS_LISTS":{},"SHOWS":{"disable_on_trial":true},"ALERTS_WEBHOOK":{},"DEEP_FUNDAMENTALS_HISTORY":{},"PUBLISH_PROTECTED_SCRIPTS":{"disable_on_trial":true},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram"],"disable_on_trial":true},"MULTI_MONITOR":{}},"pro_realtime":{"extends":"pro","CHART_STORAGE":{"limit":10},"MULTIPLE_CHARTS":{"limit":4},"INDICATORS_ON_CHART":{"limit":10},"TV_PROSTUDIES":{"study_packages":["tv-prostudies"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":9},"SERVER_SIDE_ALERTS":{"limit":100},"CAN_EDIT_PUBLIC_CHATS":{"disable_on_trial":true},"SIMULTANEOUS_CONNECTIONS":{"limit":2},"EXPORT_CHART_DATA":{},"CUSTOM_FORMULAS":{},"INTRADAY_EXOTIC_CHARTS":{}},"pro_premium":{"extends":"pro_realtime","CHART_STORAGE":{"limit":99999},"MULTIPLE_CHARTS":{"limit":8},"INDICATORS_ON_CHART":{"limit":25},"HISTORICAL_BARS":{"limit":20},"STUDY_ON_STUDY":{"limit":270,"child_limit":24},"SERVER_SIDE_ALERTS":{"limit":400},"SIMULTANEOUS_CONNECTIONS":{"limit":5},"IDEA_SIGNATURE":{"disable_on_trial":true},"PROFILE_WEBSITE_FIELD":{"disable_on_trial":true},"ALERTS_NO_EXPIRATION":{},"PUBLISH_INVITE_ONLY_SCRIPTS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"DEEP_HISTORY_BACKTEST":{"disable_on_trial":true},"ALERTS_ON_SECONDS":{},"PERMANENT_STREAM_RECORDS":{},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram","Website"],"disable_on_trial":true},"SECONDS_INTERVALS":{}},"pro_mini_alerts":{"extends":"free","SERVER_SIDE_ALERTS":{"limit":30},"SCREENER_ALERTS":{"limit":99999},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}},"pro_mini_ads":{"extends":"free","NO_SPONSORED_ADS":{},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}},"pro_mini_layouts":{"extends":"free","MULTIPLE_CHARTS":{"limit":8},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}},"pro_edu":{"extends":"free","CHART_STORAGE":{"limit":3},"MULTIPLE_CHARTS":{"limit":2},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":5},"SCREENER_ALERTS":{"limit":99999},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}}}'),r=JSON.parse('{"cme":{"INDICATORS_ON_CHART":{"limit":99999}},"bovespa":{"INDICATORS_ON_CHART":{"limit":99999}},"qecomqa":{"INDICATORS_ON_CHART":{"limit":99999}}}')
;var n=t(33813),a=t(9965),o=t(34405);function l(e,_,t){let i=window.user;t&&(i=t);const r=T(e,_,i);return!!r&&!(r[n.ProductFeatures.DISABLE_ON_TRIAL]&&(!i||i.is_trial))}function T(e,_,t){var n;let l=function e(_){const t=i[_];return t?t.extends?Object.assign({},e(t.extends),t):t:null}(_||function(e){let _=window.user;e&&(_=e);let t=(null==_?void 0:_.pro_plan)||a.ProPlans.Free;const i=t!==a.ProPlans.Free&&!(0,o.isTrialProduct)(t);return i||(t=(0,o.getProductForTrial)(t)),i&&_&&!_.is_pro_limited&&!_.new_pro_product_line&&(t="__legacy_"+t),t}(t));if(!l)return null;const T=null===(n=window.TradingView)||void 0===n?void 0:n.widgetCustomer;return T&&r[T]&&(l=Object.assign({},l,r[T])),l&&l[e]||null}},33813:(e,_,t)=>{var i;t.d(_,{ProductFeatures:()=>i}),function(e){e.DISABLE_ON_TRIAL="disable_on_trial",e.CUSTOM_INTERVALS="CUSTOM_INTERVALS",e.CHART_STORAGE="CHART_STORAGE",e.MULTIPLE_CHARTS="MULTIPLE_CHARTS",e.MULTIPLE_WATCHLISTS="MULTIPLE_WATCHLISTS",e.IMPORT_WATCHLISTS="IMPORT_WATCHLISTS",e.EXPORT_WATCHLISTS="EXPORT_WATCHLISTS",e.INDICATORS_ON_CHART="INDICATORS_ON_CHART",e.STUDY_ON_STUDY="STUDY_ON_STUDY",e.TICK_BY_TICK_PUSH_DATA="TICK_BY_TICK_PUSH_DATA",e.SERVER_SIDE_ALERTS="SERVER_SIDE_ALERTS",e.PUBLISH_INVITE_ONLY_SCRIPTS="PUBLISH_INVITE_ONLY_SCRIPTS",e.PUBLISH_PROTECTED_SCRIPTS="PUBLISH_PROTECTED_SCRIPTS",e.SCREENER_ALERTS="SCREENER_ALERTS",e.SCREENER_AUTO_REFRESH="SCREENER_AUTO_REFRESH",e.SCREENER_EXPORT_DATA="SCREENER_EXPORT_DATA",e.SCREENER_INTERVALS="SCREENER_INTERVALS",e.SIMULTANEOUS_CONNECTIONS="SIMULTANEOUS_CONNECTIONS",e.STUDY_TEMPLATES="STUDY_TEMPLATES",e.CAN_EDIT_PUBLIC_CHATS="CAN_EDIT_PUBLIC_CHATS",e.NO_SPONSORED_ADS="NO_SPONSORED_ADS",e.IDC_AVAILABLE_DELAY="IDC_AVAILABLE_DELAY",e.STATUS="STATUS",e.ALERTS_NO_EXPIRATION="ALERTS_NO_EXPIRATION",e.MULTIFLAGGED_SYMBOLS_LISTS="MULTIFLAGGED_SYMBOLS_LISTS",e.BAR_REPLAY_INTRADAY="BAR_REPLAY_INTRADAY",e.TV_VOLUMEBYPRICE="TV_VOLUMEBYPRICE",e.ALERTS_WEBHOOK="ALERTS_WEBHOOK",e.DEEP_FUNDAMENTALS_HISTORY="DEEP_FUNDAMENTALS_HISTORY",e.EXPORT_CHART_DATA="EXPORT_CHART_DATA",e.ALERTS_ON_SECONDS="ALERTS_ON_SECONDS",e.PERMANENT_STREAM_RECORDS="PERMANENT_STREAM_RECORDS",e.IDEA_SOCIAL_LINKS="IDEA_SOCIAL_LINKS",e.EXTENDED_SOCIAL_LINKS="EXTENDED_SOCIAL_LINKS",e.DEEP_HISTORY_BACKTEST="DEEP_HISTORY_BACKTEST"}(i||(i={}))},25226:(e,_,t)=>{var i=t(49437).TVLocalStorage,r=t(97639),n=t(55385);t(38456);var a=new r;TradingView.FeatureToggle={force_prefix:"forcefeaturetoggle.",onChanged:new r,enableFeature:function(e){i.setItem(this.force_prefix+e,"true"),a.fire(e)},disableFeature:function(e){i.setItem(this.force_prefix+e,"false"),a.fire(e)},resetFeature:function(e){i.removeItem(this.force_prefix+e),a.fire(e)},onFeaturesStateChanged:function(){return a}},TradingView.isFeatureEnabled=function(e){function _(e){try{var _=n(e+function(){if(window.user&&window.user.id)return window.user.id;var e=i.getItem("featuretoggle_seed");return null!==e||(e=Math.floor(1e6*Math.random()),i.setItem("featuretoggle_seed",e)),e}());return new DataView(_).getUint32(0,!0)/4294967296}catch(e){return.5}}function r(t){
return!("local"!==window.environment||!function(e){var _=new RegExp("broker_[A-Z]+[a-zA-Z0-9_]+_dev","g"),t=new RegExp("hide_[A-Z]+[a-zA-Z0-9_]+_on_ios","g"),i=new RegExp("hide_[A-Z]+[a-zA-Z0-9_]+_on_android","g"),r=new RegExp("hide_[A-Z]+[a-zA-Z0-9_]+_on_mobile_web","g");return-1===["broker_FXCM_token_v2","broker_TRADESTATION_V3","broker_TRADOVATE_dev","black_friday_mainpage","black_friday_popup","datawindow","trading-fast-renew-oauth-token","switching_trial_year_to_month_disabled","switching_year_to_month_disabled","default_year_billing_cycle_switcher","marketing-analytics","google-ads","visible_address_fields_by_default","slow-support-warning","hide-trading-floating-toolbar","tvcoins_donations","save-short-streams","details_disable_bid_ask","vat_disabled","pro_plan_upgrades_disabled","pro_plan_downgrades_disabled","unit_conversion","disable_recaptcha_on_signup","braintree-order-one-click-dropdown","braintree-trial-implementation","braintree-gopro-in-order-dialog","braintree-apple-pay","braintree-google-pay","braintree-apple-pay-trial","braintree-google-pay-trial","hide_gopro_popup_upgrade_button","yandex_metric_enabled","broker_id_session","remove_line_tools_from_content","do_not_save_shared_line_tools_to_charts","save_shared_line_tools","remove_drawings_sync_layout","chart_storage_with_broker_name","do_not_invalidate_chart_on_changing_line_tools","log_removing_line_tools_group","oanda-european-accounts-warning","mobile_show_bottom_panel","disable_save_settings","desktop_version_notification_enabled","paperrest_2fa","paperrest_preview","favorites-in-broker-dropdown","streams_stats_profile","hide_ecomonic_events","aggregating_page_pings","mobile_trading_web","mobile_trading_ios","mobile_trading_android","hide_real_brokers_on_mobile","enable_trading_server_logger","percentage_values_for_percentage_scale","hide_ranges_label_colors","disable_user_specific_encryption","remove_scale_settings_from_menu","enable_deep_history_backtesting","show_checkbox_of_house_rules_to_idea_and_script","allow_resizing_charts_in_layout","disable_phone_verification_sms","no_overlap_mode_enabled","test_minds_connections","watchlist_chart_type_buttons","enable_date_range_sync","hide_ideas_on_chart"].indexOf(e)&&-1===e.indexOf("-maintenance")&&!1===_.test(e)&&!1===t.test(e)&&!1===i.test(e)&&!1===r.test(e)}(t))||(!e[t]||-1!==e[t])&&(!!("true"===i.getItem(TradingView.FeatureToggle.force_prefix+t)||window.is_authenticated&&"undefined"!=typeof user&&user.settings&&"true"===user.settings[TradingView.FeatureToggle.force_prefix+t])||!("false"===i.getItem(TradingView.FeatureToggle.force_prefix+t)||window.is_authenticated&&"undefined"!=typeof user&&user.settings&&"false"===user.settings[TradingView.FeatureToggle.force_prefix+t])&&(!!e[t]&&(1===e[t]||_(t)<=e[t])))}return TradingView.onWidget()||Promise.all([t.e(1867),t.e(34604)]).then(t.t.bind(t,1867,23)).then(_=>{_.on("featuretoggle",(function(_){var t=r(_.name);e[_.name]=_.state,t!==r(_.name)&&a.fire(_.name)}))}),r}(window.featureToggleState||{}),_.FeatureToggle=TradingView.FeatureToggle,
_.isFeatureEnabled=TradingView.isFeatureEnabled,_.onFeaturesStateChanged=TradingView.FeatureToggle.onFeaturesStateChanged.bind(TradingView.FeatureToggle)},79923:(e,_,t)=>{async function i(e,_){const i=await Promise.all([t.e(69129),t.e(82888),t.e(48463),t.e(25113),t.e(34956),t.e(15998),t.e(69875),t.e(8879),t.e(66333),t.e(50279),t.e(34634),t.e(87995),t.e(27582),t.e(38890)]).then(t.bind(t,94185));return i.showSimpleDialog(e,i.renameModule,_)}async function r(e,_){const i=await Promise.all([t.e(69129),t.e(82888),t.e(48463),t.e(25113),t.e(34956),t.e(15998),t.e(69875),t.e(8879),t.e(66333),t.e(50279),t.e(34634),t.e(87995),t.e(27582),t.e(38890)]).then(t.bind(t,94185));return i.showSimpleDialog(e,i.confirmModule,_)}async function n(e,_){const i=await Promise.all([t.e(69129),t.e(82888),t.e(48463),t.e(25113),t.e(34956),t.e(15998),t.e(69875),t.e(8879),t.e(66333),t.e(50279),t.e(34634),t.e(87995),t.e(27582),t.e(38890)]).then(t.bind(t,94185));return i.showSimpleDialog(e,i.warningModule,_)}t.r(_),t.d(_,{showRename:()=>i,showConfirm:()=>r,showWarning:()=>n})}}]);