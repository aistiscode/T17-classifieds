const listingsContainer = document.getElementById("listingscontainer");


const getListings = async function(){
    const listings = await fetch("https://64ec4b1af9b2b70f2bfa0da0.mockapi.io/listings",
    {
        Method: "GET"
    });
    const parsedListings = await listings.json();
    parsedListings.forEach(listing => {
        const listingCard = document.createElement("a");
        listingCard.setAttribute("class", "listing");
        listingCard.href = "listing.html";
        listingCard.addEventListener("click", function(){
            localStorage.setItem("listingId", listing.id);
        })
        
        /*
        //SEE IF I NEED AN IMAGE CONTAINER:
        const imageContainer = document.createElement("div");
        listingCard.append(imageContainer);
        */

        //IMAGE
        
        const listingImage = document.createElement("img");
        listingImage.src = "https://m.media-amazon.com/images/I/91AswJPf5TL.jpg";
        
        const title = document.createElement("p");
        title.textContent = listing.title;

        const price = document.createElement("p");
        price.textContent = listing.price;

        //APPENDING
        listingCard.append(listingImage);
        listingCard.append(title);
        listingCard.append(price);
        
        listingsContainer.append(listingCard);
        
    });
    
}

getListings();