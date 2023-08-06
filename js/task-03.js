const gallery = document.querySelector(".gallery");
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const markup = images
  .map(
    ({ url, alt }) =>
      `<li><img src="${url}" alt = "${alt}" width="252px" height="142px" /></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
gallery.insertAdjacentHTML("beforebegin", "<h2>Beautifull Gallery</h2>");

const header = document.querySelector("h2");
header.style.color = "#f5cb42";
header.style.textAlign = "center";

const pictures = document.querySelector(".gallery");
pictures.style.display = "flex";
pictures.style.flexFlow = "row wrap";
pictures.style.gap = "30px";
pictures.style.justifyContent = "center";
pictures.style.listStyle = "none";
