// ==UserScript==
// @name         New Userscript
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://public.tableau.com/*
// ==/UserScript==

(function () {
    'use strict';

    if (window.location.href === 'https://public.tableau.com/profile/icci.unap#!/vizhome/test2_15967532395400/Hoja1') {
        setTimeout(function(){

            var parentE = document.querySelector("body > div.l-page.has-no-sidebars > div.canvas-content > section > div > div.vizhub-view > section.viz-metadata.clearfix.can-edit > div > figcaption > div.viz-workbook__details > div > div.extended > dl > div:nth-child(1)");

            if (parentE != null) {
                if (parentE.getAttribute("class") == "attribute-row clearfix") {
                    document.querySelector("body > div.l-page.has-no-sidebars > div.canvas-content > section > div > div.vizhub-view > section.viz-metadata.clearfix.can-edit > div > figcaption > div.viz-workbook__details > div > div.extended > dl > div:nth-child(1) > dd > button").click();
                }
            } else {
                document.querySelector("#block-menu-block-1 > div > ul > li.last.leaf.menu-mlid-387 > a").click();
                setTimeout(login(), 2000);
            }
        }, 3000);
    }
})();

function login() {
    alert("asd")
    document.querySelector("#login-email").click();
    document.querySelector("#login-email").value = "ICCI_COVID19@inf.unap.cl"
    document.querySelector("#login-password").click();
    document.querySelector("#login-password").value = "ICCICovid192348#"
    setTimeout(function() {
        document.querySelector("#signin-submit").click();
    }, 2000);
    
};