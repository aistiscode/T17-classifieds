const titleInput = document.getElementById("title");
const priceInput = document.getElementById("price");
const imgUrlInput = document.getElementById("imgurl");
const descriptionInput = document.getElementById("description");
const locationInput = document.getElementById("location");
const submitBtn = document.querySelector("button");

const getListingObject = ()=>{
  return {
    title: titleInput.value,
    price: priceInput.value,
    img_url: imgUrlInput.value,
    description: descriptionInput.value,
    location: locationInput.value
  };
};

const addListing = async ()=>{
  try{
    await fetch("https://64ec4b1af9b2b70f2bfa0da0.mockapi.io/listings", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(getListingObject())
    });
  } catch (err){
    console.log("Encountered error while adding listing:", err);
  }
};

submitBtn.addEventListener("click", addListing);