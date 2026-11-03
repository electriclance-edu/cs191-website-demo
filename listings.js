// These functions are very stupid and should be redone
function generate_listings() {
    generate_listing(
        "res/placeholder/scical.jpg",
        "Science calculator",
        "₱10/day",
        "avemariyariya"
    );
    generate_listing(
        "res/placeholder/bike.jpg",
        "1985 Yamaha folding bike",
        "₱3500",
        "rideme2themoon"
    );
    generate_listing(
        "res/placeholder/bluebook.jpg",
        "35pcs leftover bluebook",
        "₱200",
        "joseph.erlinda"
    );
    generate_listing(
        "res/placeholder/electronics.JPG",
        "Assorted components",
        "For lending",
        "robotika"
    );
    generate_listing(
        "res/placeholder/jacket.jpg",
        "Crochet jacket",
        "TBD",
        "Mayor Joy"
    );
    generate_listing(
        "res/placeholder/pens.webp",
        "Assorted pens",
        "For free",
        "plumapluma"
    );
}
function closeListingPopup() {
    document.getElementById("Overlay").style.display = "none";
}
function openListingPopup() {
    document.getElementById("Overlay").style.display = "flex";
}
function generate_listing(img_url, title_data, price_data, user_data) {
    var listing = elem("div","listing");
    listing.classList.add("shadowed");
    listing.onclick = openListingPopup;

    var img = elem("div", "listing-img");
    img.style.setProperty(
        "background-image",
        `url(${img_url})`
    );
    
    var info = elem("p", "listing-info");
    var name = elem("p", "listing-name");
    name.innerHTML = title_data;

    var price = elem("p", "listing-price");
    price.innerHTML = price_data;

    var tags = elem("p", "listing-tags");
    var user = elem("span", "listing-tag");
    user.innerHTML = user_data;

    listing.appendChild(img);
    info.appendChild(name);
    info.appendChild(price);
    info.appendChild(tags);
    tags.appendChild(user);
    listing.appendChild(info);

    document.getElementById("ListingGrid").appendChild(listing);
}
function elem(tag, initialClass) {
    var e = document.createElement(tag);
    e.classList.add(initialClass);
    return e;
}