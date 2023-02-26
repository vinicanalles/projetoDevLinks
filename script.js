function toogleMode() {
  const html = document.documentElement

  // pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    html.classList.add("light")
    img.setAttribute("src", "./assets/avatar.png")
  }
}
