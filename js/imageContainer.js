
const data = [
  {
    imageSrc: "https://res.cloudinary.com/wow-club/image/upload/c_scale,dpr_1.25,f_auto,q_auto:eco,w_400/v1561963927/su3bmvdji9hrl6mfnkdo.jpg",
    trip_type: "DELUXE",
    destination: "High on Bali",
    price: "₹59,000",
    date: "21 May, 2023",
    duration: "6 Nights",
    flights: "",
    tags: ["active"]
  },
  {
    imageSrc: "https://res.cloudinary.com/wow-club/image/upload/c_scale,dpr_1.25,f_auto,q_auto:eco,w_400/v1681453366/nltzib7vcamb0vgkymps.jpg",
    trip_type: "COMFORT",
    destination: "Mysteries of Borneo",
    price: "1,77,000",
    date: " 20 August, 2023",
    duration: "6 Nights",
    flights: "",
    tags: ["active", "adventure & wildlife"]
  },
  {
    imageSrc: "https://res.cloudinary.com/wow-club/image/upload/c_scale,dpr_1.25,f_auto,q_auto:eco,w_400/v1644925574/knr90g2twjnpbs8oanvn.jpg",
    trip_type: "COMFORT",
    destination: "Spellbound In Ladakh",
    price: "₹65,000",
    date: "27 May, 2023",
    duration: "7 Nights",
    flights: "Flights",
    tags: ["active", "culture & heritage", "leisure"]
  },
  {
    imageSrc: "https://res.cloudinary.com/wow-club/image/upload/c_scale,dpr_1.25,f_auto,q_auto:eco,w_400/v1546951400/nevtkezfosknezii8noz.jpg",
    trip_type: "LUXURY",
    destination: "Ladakh: The Great Escape",
    price: "₹94,000",
    date: "10 June, 2023",
    duration: "7 Nights",
    flights: "Flights",
    tags: ["leisure", "wellness"]
  }, {
    imageSrc: "https://res.cloudinary.com/wow-club/image/upload/c_scale,dpr_1.25,f_auto,q_auto:eco,w_400/v1681386691/l6tf2w1cetdhavaixken.webp",
    trip_type: "DELUXE",
    destination: "Tracking Gorillas in Uganda",
    price: "₹4,35,000",
    date: " 27 August, 2023",
    duration: "5 Nights",
    flights: "",
    tags: ["adventure & wildlife", "culture & heritage"]
  }, {
    imageSrc: "https://res.cloudinary.com/wow-club/image/upload/c_scale,dpr_1.25,f_auto,q_auto:eco,w_400/v1554973684/bfwtwcjy5uuuswdyi6fm.jpg",
    trip_type: "COMFORT",
    destination: "Turkish Delight",
    price: "₹1,93,000",
    date: "2 September, 2023",
    duration: "8 Nights",
    flights: "",
    tags: ["culture & heritage"]
  }, {
    imageSrc: "https://res.cloudinary.com/wow-club/image/upload/c_scale,dpr_1.25,f_auto,q_auto:eco,w_400/v1553252217/mkjmgb5m2jyfewwpxgd5.jpg",
    trip_type: "LUXURY",
    destination: "Spiti - Driving Holiday",
    price: "₹87,000",
    date: "24 June, 2023",
    duration: "9 Nights",
    flights: "",
    tags: ["active"]
  }, {
    imageSrc: "https://res.cloudinary.com/wow-club/image/upload/c_scale,dpr_1.25,f_auto,q_auto:eco,w_400/v1549532295/mbuutbozn0qgtcijk8hi.jpg",
    trip_type: "DELUXE",
    destination: "WOW Wellness @ SwaSwara",
    price: "₹67,000",
    date: "3 July, 2023",
    duration: "7 Nights",
    flights: "Flights",
    tags: ["leisure", "wellness"]
  }, {
    imageSrc: "https://res.cloudinary.com/wow-club/image/upload/c_scale,dpr_1.25,f_auto,q_auto:eco,w_400/v1644925574/knr90g2twjnpbs8oanvn.jpg",
    trip_type: "COMFORT",
    destination: "Spellbound In Ladakh",
    price: "₹65,000",
    date: "27 May, 2023",
    duration: "7 Nights",
    flights: "Flights",
    tags: ["active", "culture & heritage", "leisure"]
  }, {
    imageSrc: "https://res.cloudinary.com/wow-club/image/upload/c_scale,dpr_1.25,f_auto,q_auto:eco,w_400/v1673253513/zvxrpd8obt6jktxjs8kq.webp",
    trip_type: "LUXURY",
    destination: "Fall Foliage in Japan",
    price: "₹3,22,000",
    date: "14 November, 2023",
    duration: "8 Nights",
    flights: "",
    tags: ["culture & heritage"]
  },
  {
    imageSrc: "https://res.cloudinary.com/wow-club/image/upload/c_scale,dpr_1.25,f_auto,q_auto:eco,w_400/v1546951400/nevtkezfosknezii8noz.jpg",
    trip_type: "DELUXE",
    destination: "Ladakh: The Great Escape",
    price: "₹94,000",
    date: "10 June, 2023",
    duration: "7 Nights",
    flights: "Flights",
    tags: ["leisure", "wellness"]
  }
];
const container = document.getElementById("image-component-items");
let bool = true;
const changeTag = (element, option) => {
  const tag = document.querySelectorAll(".trip-tags a");
  tag.forEach((a) => {
    if (a.classList.contains("selected")) {
      a.classList.remove("selected");
    }
  });
  element.classList.toggle("selected");
  newContainer.forEach((container) => container.remove());
  console.log(newContainer);
  imageContainer(option);
};
let newContainer;
const imageContainer = (option) =>{
    data.map(({ imageSrc, trip_type, destination, price, date, duration, flights, tags}) => {
      if(tags.includes(option) || option === 'all'){
        newContainer = container.cloneNode(true);
        newContainer.querySelector(".image-container img").src = imageSrc;
        newContainer.querySelector(".trip-type p").innerHTML = trip_type;
        newContainer.querySelector(".trip-destination h3").innerHTML = destination;
        newContainer.querySelector(".trip-price").innerHTML = price;
        newContainer.querySelector(".trip-date .date").insertAdjacentHTML('beforeend', date);
        newContainer.querySelector(".trip-date .duration").insertAdjacentHTML('beforeend', duration);
        if (flights) {
          newContainer.querySelector(".trip-date .flights").insertAdjacentHTML('beforeend', flights);
        } else {
          newContainer.querySelector(".trip-date .flights").style.display = 'none';
        }
        tags.forEach(tag => {
          const span = document.createElement("span");
          span.innerHTML = tag;
          newContainer.querySelector(".tags").appendChild(span);
        });
        container.insertAdjacentElement('beforebegin', newContainer); 
      } 
    })
    container.remove();
}




