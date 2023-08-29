
const submitBtn = document.querySelector("button");

const addListing = function(){
const titleInput = document.getElementById("title").value;
const priceInput = document.getElementById("price").value;
const imgUrlInput = document.getElementById("imgurl").value;
const descriptionInput = document.getElementById("description").value;
const locationInput = document.getElementById("location").value;

    fetch("https://64ec4b1af9b2b70f2bfa0da0.mockapi.io/listings",
    {
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: titleInput,
            price: priceInput,
            img_url: imgUrlInput,
            description: descriptionInput,
            location: locationInput
        })
    });
}


submitBtn.addEventListener("click", addListing);