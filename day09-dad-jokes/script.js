const jokeElement = document.getElementById('joke');
const getJoke = document.getElementById('jokeBtn').addEventListener('click', generateJoke)

const config = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

generateJoke();

async function generateJoke() {
  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  jokeElement.innerText = data.joke;
}