function pressEnter(event) {
  const lastname = document.getElementById('lastname').value;
  if (window.event.keyCode == 13) {
    alert('Nom : ' + lastname);
  }
}
