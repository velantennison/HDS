function search() {

  input = document.getElementById("#input_search")

  filter = input.value.toUpperCase()

  list_items = document.getElementById("div1")
  list_items.forEach(item => {

    a = item.getElementsByTagName("a")[0];

    txt = a.textContent || a.innerText;

    if (txt.toUpperCase().indexOf(filter) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }


    if (window.getComputedStyle(item, null).getPropertyValue("display") == 'none') {
      document.getElementById(".no-result").style.display = 'block';
    } else {
      document.getElementById(".no-result").style.display = 'none';
    }
  })
}
document.getElementById("#input_search").addEventListener('input', () => search())