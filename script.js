const button = document.getElementById("button");
const radiusInput = document.getElementById("radius");
const latInput = document.getElementById("lat");
const longInput = document.getElementById("long");

//Function that should GET the restaurant values --> push into a JSON and put it into the HTML

function showRestaurant() {



  // let xhr = new XMLHttpRequest();

  let radius = radiusInput.value;
  let lat = latInput.value;
  let long = longInput.value;

  let url = `http://dev.findit.com.pl/api/gastronomy?radius=${radius}&lat=${lat}&long=${long}`;

  // fetch(url)
  //   .then(response => console.log(response))


  fetch(url)
    .then((response) => {
      if (response.ok) {
        console.log(response)
        return response.json()
      } else {
        return Promise.reject(`Http error: ${response.status}`)
      }
    })
    .then((restaurants) => {
      
      console.log("success")
      console.log(restaurants)

      restaurants.forEach((element) => {
          const restaurantName = document.createElement("div");
          restaurantName.innerHTML = element.name;
          document.getElementById("name").appendChild(restaurantName);
        });

      restaurants.forEach((element) => {
          const type = document.createElement("div");
          type.innerHTML = element.type;
          document.getElementById("code").appendChild(type);
        })
    })
    .catch(error => console.log("Error ", error))


//   xhr.open("GET", url, true);

//   xhr.onload = function () {
//     if (xhr.status == 200) {
//       console.log("success");
//       let restaurants = JSON.parse(this.response);
//       console.log(restaurants);

//       restaurants.forEach((element) => {
//         const restaurantName = document.createElement("div");
//         restaurantName.innerHTML = element.name;
//         document.getElementById("name").appendChild(restaurantName);
//       });

//       restaurants.forEach((element) => {
//         const type = document.createElement("div");
//         type.innerHTML = element.type;
//         document.getElementById("code").appendChild(type);
//       });
//     } else if (xhr.status == 400) {
//       console.log("zjebales");
//     }
//   };

//   xhr.send();
// 
}

const codeBox = document.getElementById("code");
const nameBox = document.getElementById("name");

function isEmpty() {
  if (codeBox.childNodes.length === 0 && nameBox.childNodes.length === 0) {
    console.log("is empty");
  } else {
    console.log("is not empty");
    codeBox.innerHTML = "";
    nameBox.innerHTML = "";
  }
}

button.addEventListener("click", isEmpty);
button.addEventListener("click", showRestaurant); 

//let radius = 10000
//let lat = 50.3776
//let long = 18.0000
