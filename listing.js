//CONSIDER IF THIS SHOULD BE ADDED INTO getSelectedListing
const listingContainer = document.getElementById("listingcontainer");

const getSelectedListing = async function(){
  try{
    const response = await fetch("https://64ec4b1af9b2b70f2bfa0da0.mockapi.io/listings/" + localStorage.getItem("listingId"));
    const listingData = await response.json();

    const image = document.createElement("img");
    image.src = listingData.img_url;
    image.alt = "Image of listed product";
    listingContainer.append(image);

    const listingInfoContainer = document.createElement("div");
    listingInfoContainer.setAttribute("id", "listinginfocontainer");
    

    const title = document.createElement("h1");
    title.textContent = listingData.title;
    listingInfoContainer.append(title);

    const description = document.createElement("p");
    description.textContent = listingData.description;
    listingInfoContainer.append(description);

    const price = document.createElement("p");
    price.textContent = listingData.price;
    listingInfoContainer.append(price);

    const location = document.createElement("p");
    location.textContent = listingData.location;
    listingInfoContainer.append(location);

    listingContainer.append(listingInfoContainer);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "deletebtn");
    deleteBtn.textContent = "DELETE";
    deleteBtn.addEventListener("click", async ()=>{
      try{
        await fetch("https://64ec4b1af9b2b70f2bfa0da0.mockapi.io/listings/" + localStorage.getItem("listingId"), {
          method: "DELETE"
        });
        listingContainer.textContent = "LISTING HAS BEEN REMOVED.";
      } catch(error){
        console.error("Error deleting listing:", error);
      }
    });

    listingInfoContainer.append(deleteBtn);
  } catch(error){
    console.error("Error fetching selected listing:", error);
  }
};

getSelectedListing();