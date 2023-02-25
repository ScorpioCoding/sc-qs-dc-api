import EasyHTTP from "../vendor/EasyHTTP.js";
const http = new EasyHTTP();

window.getMovies = () => {
  const table = document.getElementById("listMovies");
  table.style.display = "block";
  http
    .get("http://localhost:6082/api/readall/movies")
    .then((data) => {
      let output = `
        <thead>
          <tr>
            <th style="width: 25px">id</th>
            <th style="width: 200px">title</th>
            <th style="width: auto">description</th>
          </tr>
        </thead>
        <tbody>
      `;
      data.forEach((movie) => {
        output += `
          <tr>
            <td>${movie.id}</td>
            <td>${movie.title}</td>
            <td>${movie.description}</td>
          </tr>
        `;
      });
      output += `</tbody>`;
      table.innerHTML = output;
    })
    .catch((err) => console.log(err));
};
