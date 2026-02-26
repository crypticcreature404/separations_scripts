//printBigSmallProductionPages.jsx
//
// This use this script (along with a call from Adobe Illustrator Actions) to handle printing a U.S. Letter
// and a Tabloid size version of the Production board paperwork to keep in production packets.
//
// You need presets for the US Letter and Tabloid dimension paperwork. If you need to, change the
// printPreset values below to your local machine.

var doc = app.activeDocument;

var optionsSm = new PrintOptions();

optionsSm.printPreset = "[PRESET 1]"; // my US Letter preset
// Send to printer
doc.print(optionsSm);

var optionsBg = new PrintOptions();

optionsBg.printPreset = "[PRESET 2]"; // my Tabloid size preset

// Send to printer
doc.print(optionsBg);
