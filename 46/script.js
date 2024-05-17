// console.log(document.head)
// console.log(document.documentElement)
// console.log(document.body.childNodes)
// console.log(document.body.firstChild) // 1
// console.log(document.body.firstElementChild) // 2
// console.log(document.body.lastChild)


// console.log(document.querySelector('#current').parentNode.parentNode) // 1
// console.log(document.querySelector('#current').parentElement) // 2

// console.log(document.querySelector('[data-current="3"]').nextElementSibling)

for (let node of document.body.childNodes){
    if(node.nodeName == '#text'){
        continue;
    }
    console.log(node)
}