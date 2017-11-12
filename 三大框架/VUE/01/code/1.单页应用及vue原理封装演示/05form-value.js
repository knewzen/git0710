function DataBind(options) {
    var obj = options.data();
    var oInputs = document.querySelectorAll('[v-model]');
    for (var i = 0; i < oInputs.length; i++) {
        var oInput = oInputs[i];
        var attrVal = oInput.getAttribute('v-model');
        oInput.value = obj[attrVal];
    }
}