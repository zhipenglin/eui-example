if (!('boxShadow' in document.body.style)) {
    document.body.setAttribute('class', 'noBoxShadow');
}

document.body.addEventListener("click", function(e) {
    var target = e.target;
    if (target.tagName === "INPUT" &&
        target.getAttribute('class').indexOf('liga') === -1) {
        target.select();
    }
});

(function() {
    var fontSize = document.getElementById('fontSize'),
        testDrive = document.getElementById('testDrive'),
        testText = document.getElementById('testText');
    function updateTest() {
        testDrive.innerHTML = testText.value || String.fromCharCode(160);
        if (window.icomoonLiga) {
            window.icomoonLiga(testDrive);
        }
    }
    function updateSize() {
        testDrive.style.fontSize = fontSize.value + 'px';
    }
    fontSize.addEventListener('change', updateSize, false);
    testText.addEventListener('input', updateTest, false);
    testText.addEventListener('change', updateTest, false);
    updateSize();
}());
(function() {function setHeight() {var devDomain = document.referrer;var script = document.createElement('script');document.body.appendChild(script);script.onload = function() {document.body.removeChild(this);};var search = location.search;search += (search ? '&' : '?') + 'h=' + document.documentElement.offsetHeight + '&e=iframeonload';script.src = devDomain + '/socket/notice' + search;}window.addEventListener('load', setHeight, false);window.addEventListener('resize', setHeight, false);})();