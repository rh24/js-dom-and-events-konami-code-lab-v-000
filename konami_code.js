const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', (e) => {
    const key = parseInt(e.detail || e.which);

    if (code.includes(key)) {
      alert('You did it!')
    }
  })
}
