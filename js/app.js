//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// Add image to overlay
$overlay.append($image);

// Add a caption to overlay
$overlay.append($caption);

// Add overlay to html body (also see CSS)
$('body').append($overlay);

//Capture the click event on a link to an image

$("#imageGallery a").click(function(event) {

// Prevent browser from opening image in new window as default
  event.preventDefault();

// Access the HREF attribute of selected image
  var href = $(this).attr("href");

// Update overlay with the image linked in the link
$image.attr("src", href);

//Show the overlay
  $overlay.show()

// Get child's alt attribute and set caption
  // Traverseing the document to get the child.

var captionText = $(this).children("img").attr("alt");
$caption.text(captionText)

});


$($overlay).click(function() {
  $(this).hide();
});










