document.getElementById('khodamForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const birthDate = document.getElementById('birthDate').value;

  fetch('/cek-khodam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, birthDate }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('result').innerText = `Hasil: ${data.result}`;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
