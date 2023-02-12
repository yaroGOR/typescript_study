const someElement = document.querySelector(".foo")

console.log("someElement", someElement )
const target = event.target as HTMLInputElement
someElement.addEventListener('blur', (event)=>{ console.log("event", target.value)})

