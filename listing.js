console.log(localStorage.getItem("listingId"));
const listingContainer = document.getElementById("listingcontainer");

const getSelectedListing = async function(){
    const response = await fetch("https://64ec4b1af9b2b70f2bfa0da0.mockapi.io/listings/" + localStorage.getItem("listingId"));
    const listingData = await response.json();
    
    const image = document.createElement("img");
    image.src = listingData.img_url;
    image.alt = "Image of listed product";
    listingContainer.append(image);
    
    const title = document.createElement("h1");
    title.textContent = listingData.title;
    listingContainer.append(title);

    const description = document.createElement("p");
    description.textContent = listingData.description;
    listingContainer.append(description);


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    
    listingContainer.append(deleteBtn);
    console.log(listingData);
}

getSelectedListing(); 

