module.exports = async function (context, req) {
  context.res = {
    // status: 200, /* Defaults to 200 */
    // Don't mind this crappy code, you should imagine some fancy database calling code here and format objects to JSON. You get the idea.
    body: { text: '{    "gifts": {      "Xbox": {          "Name": "Xbox",          "Notes": "The new one with the X!",          "Store": "Microsoft Store"      },      "OLED": {          "Name": "LG OLED UHD",          "Notes": "65 inch monster!",          "Store": "Big TV store"      },      "Ori": {          "Name": "Ori and the Will of the Wisps",          "Notes": "Best platformer on Xbox!",          "Store": "Video game store"      }    }  }  ' },
  };
};
