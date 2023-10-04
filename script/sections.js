const selector = (element) => document.querySelector(element);

const movieTemplate = (movie) => {
  return `<article>
      <main class="w-42 h-44 lg:w-50 lg:h-56 mb-4">
        <img src=${movie.image} alt="img" class="w-full h-full" />
      </main>
      <div class="flex flex-col gap-2 capitalize px-3">
        <p class="text-neutral-500">${movie.date}</p>
        <b class="text-lg">${movie.title}</b>
        <p class="text-neutral-500">${movie.type}</p>
      </div>
    </article>`;
};

// Render latest Movies
latest.map((movie) => (selector("#latest").innerHTML += movieTemplate(movie)));

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

// const sections = [
//   { title: "latest and trending", href: "" },
//   { title: "Bollywood", href: "" },
//   { title: "Hollywood", href: "" },
//   { title: "Web series", href: "" },
//   { title: "Anime", href: "" },
// ];

// const movies = [
//   [
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2016-current",
//       title: "stranger things",
//       type: "action, adventure, horror",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2016-current",
//       title: "batman begin",
//       type: "action thriller",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2016-current",
//       title: "spide-man into the spider verse",
//       type: "action thriller",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2020",
//       title: "shang-chi legend of the ten rign",
//       type: "action",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2021",
//       title: "Dune",
//       type: "action, thriller",
//     },
//   ],
//   [
//     {
//       image: "../images/bolly1.png",
//       date: "india, 2020",
//       title: "satyamev jayate",
//       type: "action, adventure",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "india, 2018-current",
//       title: "raees",
//       type: "action thriller",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "india, 2020-current",
//       title: "bajirao mastani",
//       type: "action",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "india, 2020-current",
//       title: "drishyam",
//       type: "adventure thriller",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "india, 2020-current",
//       title: "kabir singh",
//       type: "adventure action",
//     },
//   ],
//   [
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2016-current",
//       title: "stranger things",
//       type: "action, adventure, horror",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2016-current",
//       title: "batman begin",
//       type: "action thriller",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2016-current",
//       title: "spide-man into the spider verse",
//       type: "action thriller",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2020",
//       title: "shang-chi legend of the ten rign",
//       type: "action",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2021",
//       title: "Dune",
//       type: "action, thriller",
//     },
//   ],
//   [
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2016-current",
//       title: "stranger things",
//       type: "action, adventure, horror",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2016-current",
//       title: "batman begin",
//       type: "action thriller",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2016-current",
//       title: "spide-man into the spider verse",
//       type: "action thriller",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2020",
//       title: "shang-chi legend of the ten rign",
//       type: "action",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2021",
//       title: "Dune",
//       type: "action, thriller",
//     },
//   ],
//   [
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2016-current",
//       title: "stranger things",
//       type: "action, adventure, horror",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2016-current",
//       title: "batman begin",
//       type: "action thriller",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2016-current",
//       title: "spide-man into the spider verse",
//       type: "action thriller",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2020",
//       title: "shang-chi legend of the ten rign",
//       type: "action",
//     },
//     {
//       image: "../images/latest1.png",
//       date: "usa, 2021",
//       title: "Dune",
//       type: "action, thriller",
//     },
//   ],
// ];

// movies.map((movie) => {
//   selector("#articles").append(`<article>
//                       <main class="w-42 h-44 lg:w-52 lg:h-56 mb-4">
//                         <img src=${movie.image} alt="img" class="w-full h-full" />
//                       </main>
//                       <div class="flex flex-col gap-2 capitalize px-3">
//                         <p class="text-neutral-500">${movie.data}</p>
//                         <b class="text-2xl">${movie.title}</b>
//                         <p class="text-neutral-500">${movie.type}</p>
//                       </div>
//                     </article>`);
// });
// // sections.map((section) => {
// //   selector("#section-container").innerHTML += `
// //       <div class="flex flex-col gap-10 pb-20">
// //         <div class="flex justify-between items-center">
// //           <p class="font-bold lg:text-3xl">${section.title}</p>
// //           <a href=${section.href} class="text-xs">View all</a>
// //         </div>
// //         <div class="articles grid grid-cols-2 gap-10 lg:gap-20 lg:grid-cols-5">

// //         </div>
// //       </div>
// //    `;
// // });

// // sections.map((section, index) => {
// //   movies.map((movie, movieIndex) => {
// //     if (index == movieIndex) {
// //       movie.map((movies) => {
// //         selector(".articles").innerHTML += ` <article>
// //                      <main class="w-42 h-44 lg:w-52 lg:h-56 mb-4">
// //                        <img src=${movies.image} alt="img" class="w-full h-full" />
// //                      </main>
// //                      <div class="flex flex-col gap-2 capitalize px-3">
// //                        <p class="text-neutral-500">${movies.data}</p>
// //                        <b class="text-2xl">${movies.title}</b>
// //                        <p class="text-neutral-500">${movies.type}</p>
// //                      </div>
// //                    </article>`;
// //       });
// //     }
// //   });
// // });

// // console.log(selector(".articles"));

// // <section class="container mx-auto text-white text-sm px-5 py-10 lg:p-20">
// //       <div class="flex flex-col gap-10 pb-20">
// //         <div class="flex justify-between items-center">
// //           <p class="font-bold lg:text-3xl">latest and trending</p>
// //           <p class="text-xs">View all</p>
// //         </div>
// //         <!-- Render movies here -->
// //         <div class="grid grid-cols-2 gap-10 lg:gap-20 lg:grid-cols-5">
// //           <article>
// //             <main class="w-42 h-44 lg:w-52 lg:h-56 mb-4">
// //               <img src="./images/latest1.png" alt="img" class="w-full h-full" />
// //             </main>
// //             <div class="flex flex-col gap-2 capitalize px-3">
// //               <p class="text-neutral-500">USA, 2016-current</p>
// //               <b class="text-2xl">stranger things</b>
// //               <p class="text-neutral-500">action, adventure, horror</p>
// //             </div>
// //           </article>
// //         </div>
// //       </div>
// //     </section>
