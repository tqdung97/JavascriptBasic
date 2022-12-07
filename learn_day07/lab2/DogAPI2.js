const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('breed-list');

function getBreedList() {
    let res = axios.get("https://dog.ceo/api/breeds/list/all");
    res
        .then(res => {
            renderBreed(res.data.message); 
        })
        .catch(error => {
            console.log(error);
        })
}
function renderBreed(breeds) {
    Object.keys(breeds).forEach(breed => {
        let tagOption = document.createElement("option");
        tagOption.innerHTML = breed;
        tagOption.value = breed;
        select.appendChild(tagOption);
    });
}
getBreedList();

function getImage() {
    let requestURL = "".concat(
        document.querySelectorAll("p")[0].innerText,
        document.getElementById("breed-list").value,
        document.querySelectorAll("p")[1].innerText
    );
    let res = axios.get(requestURL);
    res
        .then(res => {
            image.src = res.data.message;
        })
        .catch(error => {
            console.log(error);
        })
}
// Bat su kien 
btn.addEventListener("click", function () {
    getImage();
})

