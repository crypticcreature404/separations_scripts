// CheckScreenPrintFile.js
//
// This Adobe Illustrator script file can be used as a check or review when working on
// creating the Print File for a separation. When run, it will check things like
// - if the metadata set correctly?
// - is the alignment set correctly?
// - are fine details printable?
//
// These will be pop-up questions.

// Load the active document
if (app.documents.length > 0) {
  var doc = app.activeDocument;

  // Regular expression to find the 'title' within the Dublin Core (dc) XMP metadata
  var titleRegex =
    /<dc:title>[\s\S]*?<rdf:li[^>]*>([\s\S]*?)<\/rdf:li>[\s\S]*?<\/dc:title>/;
  var match = doc.XMPString.match(titleRegex);

  if (match && match[1]) {
    var docTitle = match[1];

    // Check if the title is 'standard output template'
    if (
      docTitle.toLowerCase() === "standard output template" ||
      docTitle.toLowerCase() === "single output template"
    ) {
      alert(
        "The document title matches: " +
          docTitle +
          ". Remember to do a 'Save As' on this file.",
      );
    } else {
      alert("No File Info issues found with the metadata: " + docTitle);
    }
  } else {
    // Optional: Alert if no title is found in metadata at all
    // alert("No File Info issues: " + docTitle);
  }

  alert("Remember to check alignment - center vs offset (ex. LC).");
  alert("Remember to check small stroke widths will be printable.");
  alert("Is Overprint turned on when appropriate?");
  alert("Did you check for ghosts?");
  alert("Is base filled/choked correctly? No base under dark colors");
} else {
  alert("No active document found.");
}
