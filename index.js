function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget()  {
  return document.querySelector('div#nested div div div div')
}

function increaseRankBy(n) {
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML)+n
  }
}

function deepestChild() {
  var list = document.getElementById('grand-node')
  var next = []
  while (list || list === 0) {
    return list
  }
  if (list) {
    for (let i = 0; i < list.length; i++) {
      next.push(list[i])
    }
  }
  return next
}