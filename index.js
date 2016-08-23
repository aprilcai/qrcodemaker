chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    new QRCode(document.getElementById('container'), {
        text: tablink,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        center: false,
        correctLevel: QRCode.CorrectLevel.H
    })
});

