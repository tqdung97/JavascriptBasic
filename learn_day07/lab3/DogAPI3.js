const select = document.getElementById('breed-list');

// Kết nối với địa chỉ API
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
// Thêm thẻ mới vào
function renderBreed(breeds) {
    Object.keys(breeds).forEach(breed => {
        let tagOption = document.createElement("li");
        tagOption.innerHTML = breed;
        select.appendChild(tagOption);
    });
}
getBreedList();

