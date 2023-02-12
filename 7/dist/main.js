var someElement = document.querySelector(".foo");
console.log("someElement", someElement);
var target = event.target;
someElement.addEventListener('blur', function (event) { console.log("event", target.value); });
