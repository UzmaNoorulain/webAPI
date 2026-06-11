let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     let fact = data.fact;
//     document.getElementById("cat-fact-1").innerText = "Fact 1: " + fact;
//     return fetch(url);
//   })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     let fact = data.fact;
//     document.getElementById("cat-fact-2").innerText = "Fact 2: " + fact;
//   })
//   .catch((error) => console.error("Error fetching data:", error));

// async function fetchCatFacts() {
//   try {
//     let response1 = await fetch(url);
//     let data1 = await response1.json();
//     console.log(data1);
//     let fact1 = data1.fact;
//     document.getElementById("cat-fact-1").innerText = "Fact 1: " + fact1;
//     let response2 = await fetch(url);
//     let data2 = await response2.json();
//     console.log(data2);
//     let fact2 = data2.fact;
//     document.getElementById("cat-fact-2").innerText = "Fact 2: " + fact2;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchCatFacts();
let btn = document.getElementById("fetch-cat-facts");
btn.addEventListener("click", async () => {
  let fact = await fetchCatFacts();

  document.getElementById("cat-facts").innerText = "Fact : " + fact;
});

async function fetchCatFacts() {
  try {
    let response = await axios.get(url);
    // console.log(response.data.fact);
    return response.data.fact;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchCatFacts();

let url2 = "https://dog.ceo/api/breeds/image/random";

let btn2 = document.getElementById("fetch-dog-images");
btn2.addEventListener("click", async () => {
  let imgUrl = await fetchDogImage();
  //   document.getElementById("dog-images").innerHTML =
  //     `<img src="${imgUrl}" alt="Dog Image">`;
  let img = document.querySelector("#dog-images");
  img.setAttribute("src", imgUrl);
});

async function fetchDogImage() {
  try {
    let response = await axios.get(url2);
    // console.log(response.data.message);
    return response.data.message;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

let url3 = "http://universities.hipolabs.com/search?country=";
let btn3 = document.getElementById("search-colleges");
btn3.addEventListener("click", async () => {
  let country = document.getElementById("search").value;
  let colleges = await fetchColleges(country);
  console.log(colleges);
  // console.log(colleges[0].name);
  // console.log(colleges[1].name);
  // console.log(colleges[2].name);
  // console.log(colleges[3].name);
  // console.log(colleges[4].name);

  let collegesList = document.getElementById("colleges-list");
  collegesList.innerHTML = "";
  colleges.forEach((college) => {
    let li = document.createElement("li");
    li.innerText = college.name;
    collegesList.appendChild(li);
  });
});

async function fetchColleges(country) {
  try {
    let response = await axios.get(url3 + country);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

let url4 =
  "http://universities.hipolabs.com/search?country=india&state-province=";
let btn4 = document.getElementById("search-colleges-state");
btn4.addEventListener("click", async () => {
  let state = document.getElementById("search-state").value;
  let colleges = await fetchCollegesByState(state);
  console.log(colleges);

  let collegesList = document.getElementById("colleges-list-state");
  collegesList.innerHTML = "";
  colleges.forEach((college) => {
    let li = document.createElement("li");
    li.innerText = college.name;
    collegesList.appendChild(li);
  });
});

async function fetchCollegesByState(state) {
  try {
    let response = await axios.get(url4 + state);

    // return response.data;

    return response.data.filter((college) => {
      return (
        college["state-province"] &&
        college["state-province"].toLowerCase() === state.toLowerCase()
      );
    });

    // console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
