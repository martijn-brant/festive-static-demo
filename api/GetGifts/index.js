module.exports = async function (context, req) {
  context.res = {
    // status: 200, /* Defaults to 200 */
    // Don't mind this crappy code:
    body: { text: '{   "gifts": { "Xbox": "Microsoft Store", "OLED": "Big TV store", "Ori and the Will of the Wisps": "Video game store"  } }' },
  };
};
