const listingsContainer = document.getElementById("listingscontainer");

const getListings = async function() {
  try {
    const listings = await fetch("https://64ec4b1af9b2b70f2bfa0da0.mockapi.io/listings", {
      method: "GET"
    });
    const parsedListings = await listings.json();
    //sorting listings according to price
    parsedListings.sort((a, b) => a.price - b.price);


    parsedListings.forEach(listing =>{
      const listingCard = document.createElement("a");
      listingCard.setAttribute("class", "listing");
      listingCard.href = "listing.html";
      listingCard.addEventListener("click", function() {
        localStorage.setItem("listingId", listing.id);
      });

      const listingImage = document.createElement("img");
      listingImage.src = listing.img_url;

      const listingData = document.createElement("div");
      listingData.setAttribute("class", "listingdata");

      const title = document.createElement("h3");
      title.textContent = listing.title;

      const price = document.createElement("p");
      price.textContent = listing.price;

      listingData.append(title);
      listingData.append(price);

      listingCard.append(listingImage);
      listingCard.append(listingData);

      listingsContainer.appendChild(listingCard);

    });

  } catch (err) {
    console.log("Got error while fetching listings:", err);
  }
};

getListings();
