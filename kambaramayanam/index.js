function collapsible(id) {
  //console.log({ id })
  var content = document.getElementById(id)
  if (content.style.display === 'block') {
    content.style.display = 'none'
  } else {
    content.style.display = 'block'
  }
}

function getContent(nav, name) {
  console.log(name)
  var file = nav + '/' + name + '.html'
  var elmnt = document.getElementById('mid-content')
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        elmnt.innerHTML = this.responseText
      }
      if (this.status == 404) {
        elmnt.innerHTML = 'Page not found.'
      }
    }
  }
  xhttp.open('GET', file, true)
  xhttp.send()
  return
}
