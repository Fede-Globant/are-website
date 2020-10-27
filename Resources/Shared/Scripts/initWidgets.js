function loadWidgets() {
        jQuery.getScript($dnn.baseResourcesUrl + "Shared/Scripts/widgets.js");
}

if (typeof ($dnn) === "undefined") {
    $dnn = new Object();
    $dnn.pageScripts = document.getElementsByTagName("script");
    $dnn.scriptUrl = $dnn.pageScripts[$dnn.pageScripts.length - 1].src;
    $dnn.hostUrl = (typeof ($dnn.hostUrl) == "undefined" ? $dnn.scriptUrl.toLowerCase().replace("resources/shared/scripts/initwidgets.js", "") : $dnn.hostUrl);
    if (!$dnn.hostUrl.endsWith("/")) $dnn.hostUrl += "/";
    $dnn.baseDnnScriptUrl = $dnn.hostUrl + "Resources/Shared/Scripts/";
    $dnn.baseResourcesUrl = $dnn.hostUrl + "Resources/";
}

// jQuery dependency
// if (typeof (Sys) === "undefined")
//     jQuery.getScript($dnn.baseDnnScriptUrl + "MSAJAX/MicrosoftAjax.js", loadWidgets());
// else
    loadWidgets();