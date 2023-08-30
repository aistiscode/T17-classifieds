console.log(localStorage.getItem("listingId"));
const listingContainer = document.getElementById("listingcontainer");

const getSelectedListing = async function(){
  try{
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

    listingContainer.append(deleteBtn);
  } catch(error){
    console.error("Error fetching selected listing:", error);
  }
};

getSelectedListing();