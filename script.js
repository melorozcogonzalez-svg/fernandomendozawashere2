fetch("stats.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("stats").innerHTML = `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Games:</strong> ${data.games}</p>
      <p><strong>Goals:</strong> ${data.goals}</p>
      <p><strong>Assists:</strong> ${data.assists}</p>
    `;
  });