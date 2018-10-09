var desc = document.getElementById('desc');
var intervalTime = 70; // milliseconds between character deletion/insertion
var initialPause = 500; // give the person viewing the website some time to view our site
var callbackPause = 500; // how long we'll wait before we go to the next type-text
var d1 = "Competitive programmer.";
var d2 = "Software engineer.";
var d3 = "Ramblin' Wreck."

function setOpacity(opacity) {
    desc.style.opacity = opacity / 100;
    desc.style.filter = 'alpha(opacity=' + opacity + ')';
}

function deleteContent(callback) {
    for (var i = 1; i <= 100; i++) {
        setTimeout((function(x) {
            return function() {
                setOpacity((100 - x));
            };
        })(i), i * 4);
    }
    if (callback) {
        setTimeout(callback, callbackPause);
    }
}

function typeAddText(contentToAdd, callback) {
    var currentIndex = 1;
    var intervalId = setInterval(function() {
        if (currentIndex == contentToAdd.length) {
            clearInterval(intervalId);
            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }
        setOpacity(100);
        desc.innerHTML = contentToAdd.substring(0, currentIndex);
        currentIndex++;
    }, intervalTime);
}

function finalAddText(contentToAdd) {
    desc.innerHTML = contentToAdd;
    for (var i = 1; i <= 100; i++) {
        setTimeout((function(x) {
            return function() {
                setOpacity(x);
            };
        })(i), i * 4);
    }
}

setTimeout(function() {
    typeAddText(d1, function() {
        deleteContent(function() {
            typeAddText(d2, function() {
                deleteContent(function() {
                    typeAddText(d3, function() {
                        deleteContent(function() {
                            finalAddText(d1 + " " + d2 + " " + d3);
                        });
                    });
                });
            });
        });
    });
}, initialPause);