const navigation = ["Home", "About", "Gallery", "Contact"]
const pages = ["index.html", "about.html", "gallery.html", "contact.html"]

let navtext = "<ul>"

for (let i=0; i < navigation.length; i++){
  navtext += '<li><a href="' + pages[i] + '">' + navigation[i] + "</a></li>";
}

navtext += "</ul>";
document.getElementById("navigation").innerHTML = navtext;