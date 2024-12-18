/*!
 * Charts - ICOCrypto v1.6.0 by Softnio.
 **/
NioApp = function(a, t, o) {
    "use strict";
    var n = t(".chart-data"),
        e = t(".chart-data-s2"),
        s = t(".chart-data-3");
    return a.Chart = {}, a.Chart.ChartJs = function() {
        a.Chart.ChartJs.Doughnut = function(a, o, n, e, s) {
            if (t("#" + a).length) {
                var r = document.getElementById(a).getContext("2d");
                new Chart(r, { type: "doughnut", data: { labels: o, datasets: [{ label: "949", lineTension: 0, backgroundColor: n, borderColor: s, borderWidth: 2, hoverBorderColor: s, data: e }] }, options: { legend: { display: !1, labels: { boxWidth: 10, fontColor: "#000" } }, rotation: -2, cutoutPercentage: 70, maintainAspectRatio: !1, tooltips: { callbacks: { title: function(a, t) { return t.labels[a[0].index] }, label: function(a, t) { return t.datasets[0].data[a.index] + " %" } }, backgroundColor: "#eff6ff", titleFontSize: 13, titleFontColor: "#6783b8", titleMarginBottom: 10, bodyFontColor: "#9eaecf", bodyFontSize: 14, bodySpacing: 4, yPadding: 15, xPadding: 15, footerMarginTop: 5, displayColors: !1 } } })
            }
        }, a.Chart.ChartJs.Doughnut2 = function(a, o, n, e, s) {
            if (t("#" + a).length) {
                var r = document.getElementById(a).getContext("2d");
                new Chart(r, {
                    type: "doughnut",
                    data: { labels: o, datasets: [{ label: "949", lineTension: 0, backgroundColor: n, borderColor: s, borderWidth: 3, hoverBorderColor: s, data: e }] },
                    options: {
                        legend: { display: !1, labels: { boxWidth: 10, fontColor: "#000" } },
                        rotation: -2,
                        cutoutPercentage: 40,
                        maintainAspectRatio: !1,
                        tooltips: { enabled: !1 },
                        hover: {
                            onHover: function(a, o) {
                                if (o.length) {
                                    var n = o[0]._index + 1,
                                        e = o[0]._chart.canvas.id;
                                    t('[data-canvas="' + e + '"] li').removeClass("active"), t('[data-canvas="' + e + '"] li:nth-child(' + n + ")").addClass("active")
                                } else t('[data-canvas="' + e + '"] li').removeClass("active")
                            }
                        }
                    }
                })
            }
        }, a.Chart.ChartJs.Pie = function(a, o, n, e, s, r, i) {
            if (t("#" + a).length) {
                var l = document.getElementById(a).getContext("2d");
                new Chart(l, {
                    type: "pie",
                    data: { labels: o, titles: n, datasets: [{ label: "949", lineTension: 0, backgroundColor: e, hoverBackgroundColor: s, borderColor: i, borderWidth: 2, hoverBorderColor: i, data: r, animationDuration: 400 }] },
                    options: {
                        legend: !1,
                        cutoutPercentage: 0,
                        maintainAspectRatio: !1,
                        tooltips: { callbacks: { title: function(a, t) { return t.labels[a[0].index] }, label: function(a, t) { return t.datasets[0].data[a.index] + " %" } }, backgroundColor: "transparent", titleFontSize: 11, bodyFontColor: "#fff", bodyFontSize: 14, bodyFontStyle: "bold", bodySpacing: 0, yPadding: 0, xPadding: 0, yAlign: "center", xAlign: "center", footerMarginTop: 5, displayColors: !1 },
                        hover: {
                            onHover: function(a, o) {
                                if (o.length) {
                                    var n = o[0]._index + 1,
                                        e = o[0]._chart.canvas.id;
                                    t('[data-canvas="' + e + '"] li').removeClass("active"), t('[data-canvas="' + e + '"] li:nth-child(' + n + ")").addClass("active")
                                } else t('[data-canvas="' + e + '"] li').removeClass("active")
                            }
                        }
                    }
                })
            }
        }, n.length > 0 && n.each(function() {
            var o = t(this).children("li"),
                n = t(this).data("canvas"),
                e = t(this).data("canvas-type");
            if (e = void 0 === e || "" === e ? "doughnut" : e, void 0 !== n && "" !== n) {
                var s = [],
                    r = [],
                    i = [];
                o.each(function() {
                    var a = t(this).data("title"),
                        o = t(this).data("color"),
                        n = t(this).data("amount");
                    s.push(a), r.push(o), i.push(n), t(this).html('<span class="chart-c" style="background-color: ' + o + '"></span><span class="chart-l">' + a + '</span><span class="chart-p">' + n + "%</span>")
                }), "doughnut" === e ? a.Chart.ChartJs.Doughnut(n, s, r, i) : "pie" === e ? a.Chart.ChartJs.Pie(n, s, r, i) : "linechart" === e && a.Chart.ChartJs.Doughnut(n, s, r, i)
            } else console.log("Unable to draw canvas: " + n)
        }), e.length > 0 && e.each(function() {
            var o = t(this).children("li"),
                n = t(this).data("canvas"),
                e = t(this).data("border-color") ? t(this).data("border-color") : "#fff",
                s = t(this).data("canvas-type");
            if (s = void 0 === s || "" === s ? "doughnut" : s, void 0 !== n && "" !== n) {
                var r = [],
                    i = [],
                    l = [],
                    d = [],
                    h = [];
                o.each(function() {
                    var a = t(this).data("label"),
                        o = t(this).data("title"),
                        n = t(this).data("subtitle"),
                        e = t(this).data("color"),
                        s = t(this).data("color-hover"),
                        c = t(this).data("amount");
                    r.push(a), i.push(o), l.push(e), d.push(s), h.push(c), t(this).html('<div class="chart-data-item"><span class="chart-label">' + o + '</span><span class="chart-info"><span class="chart-percent">' + c + '% </span><span class="chart-sublabel">' + n + "</span></span></div>")
                }), "doughnut" === s ? a.Chart.ChartJs.Doughnut(n, r, i, l, h, e) : "pie" === s ? a.Chart.ChartJs.Pie(n, r, i, l, d, h, e) : "linechart" === s && a.Chart.ChartJs.Doughnut(n, r, i, l, h, e)
            } else console.log("Unable to draw canvas: " + n)
        }), s.length > 0 && s.each(function() {
            var o = t(this).children("li"),
                n = t(this).data("canvas"),
                e = t(this).data("border-color") ? t(this).data("border-color") : "#122272",
                s = t(this).data("canvas-type");
            if (s = void 0 === s || "" === s ? "doughnut" : s, void 0 !== n && "" !== n) {
                var r = [],
                    i = [],
                    l = [],
                    d = [];
                o.each(function() {
                    var a = t(this).data("title"),
                        o = (t(this).data("subtitle"), t(this).data("color")),
                        n = t(this).data("color-hover"),
                        e = t(this).data("amount");
                    r.push(a), i.push(o), l.push(n), d.push(e), t(this).html('<span class="chart-l">' + a + '</span><span class="chart-p" style="background-color: ' + o + '" ><span>' + e + "%</span></span>")
                });
                for (var h = 0; h < o.length + 1; h++) o.eq(h - 1).addClass("chart-index-" + h);
                "doughnut" === s ? a.Chart.ChartJs.Doughnut2(n, r, i, d, e) : "pie" === s ? a.Chart.ChartJs.Pie(n, r, i, l, d, e) : "linechart" === s && a.Chart.ChartJs.Doughnut(n, r, i, d, e)
            } else console.log("Unable to draw canvas: " + n)
        })
    }, a.components.docReady.push(a.Chart.ChartJs), a
}(NioApp, jQuery, window);