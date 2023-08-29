console.log(localStorage.getItem("listingId"));


const getSelectedListing = async function(){
    const selectedListing = await fetch("https://64ec4b1af9b2b70f2bfa0da0.mockapi.io/listings/" + localStorage.getItem("listingId"));
    const parsedListing = await selectedListing.json();
    alert(parsedListing.price);
}

getSelectedListing(); 

