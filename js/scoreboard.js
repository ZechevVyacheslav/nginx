const resultsRoot = document.querySelector('#resultsRoot');
const results = localStorage.getItem('results');

const list = document.createElement('ol');

for (let i = 0; i < results.length; i++) {
  const li = document.createElement('li');
  li.innerHTML = `${i + 1} Game - ${results[i]} points`;
  list.appendChild(li);
}

resultsRoot.appendChild(list);
