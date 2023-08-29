const listingsContainer = document.getElementById("listingscontainer");


const getListings = async function(){
    const listings = await fetch("https://64ec4b1af9b2b70f2bfa0da0.mockapi.io/listings",
    {
        Method: "GET"
    });
    const parsedListings = await listings.json();

    //sorting listings
    parsedListings.sort((a, b) => a.price - b.price);
    

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
        
        const listingData = document.createElement("div");
        listingData.setAttribute("class", "listingdata");

        const title = document.createElement("h3");
        title.textContent = listing.title;

        const price = document.createElement("p");
        price.textContent = listing.price;

        //APPENDING
        listingData.append(title);
        listingData.append(price);
        
        listingCard.append(listingImage);
        listingCard.append(listingData);
        
        
        listingsContainer.append(listingCard);
        
    });
    
}

getListings();