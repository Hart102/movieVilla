document.addEventListener("DOMContentLoaded", () => {
  const selector = (element) => document.querySelector(element);

  const movieTemplate = (movie) => {
    return `<article>
        <main class="w-42 h-44 lg:w-50 lg:h-56 mb-4">
          <img src="./images/${movie.image}" alt="img" class="w-full h-full" />
        </main>
        <div class="flex flex-col gap-2 capitalize px-3">
          <p class="text-neutral-500">${movie.date}</p>
          <b class="text-lg">${movie.title}</b>
          <p class="text-neutral-500">${movie.type}</p>
        </div>
      </article>`;
  };

  // Render latest Movies
  latest.map(
    (movie) => (selector("#latest").innerHTML += movieTemplate(movie))
  );

  // Render bollywood
  bollywood.map(
    (movie) => (selector("#bollywood").innerHTML += movieTemplate(movie))
  );

  // Render bollywood
  hollywood.map(
    (movie) => (selector("#hollywood").innerHTML += movieTemplate(movie))
  );

  // Render web series
  webSeries.map(
    (movie) => (selector("#webSeries").innerHTML += movieTemplate(movie))
  );

  // Render anime
  anime.map((movie) => (selector("#anime").innerHTML += movieTemplate(movie)));
});
