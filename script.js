document.addEventListener('DOMContentLoaded', function () {
  const getJokeButton = document.getElementById('get-joke');
  const jokeText = document.getElementById('joke');

  getJokeButton.addEventListener('click', function () {
    fetch('https://icanhazdadjoke.com/slack', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      jokeText.textContent = data.attachments[0].text;
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
      jokeText.textContent = 'Oops! An error occurred while fetching a joke.';
    });
  });
});
