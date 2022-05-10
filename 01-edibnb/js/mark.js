function getMarkOption(name, str) {
  //regex that get the content inside curly braces, where it contains the name of the option of the str
  const regex = new RegExp(`\{(.*?)${name}(.*?)\}`, "g");

  //parse the string and get the mark
  let options = regex.exec(str);

  //not found
  if (!options) {
    return false;
  }

  //found
  options = options[0].split(",");

  for (var i = 0; i < options.length; i++) {
    item = options[i];
    if (item.includes("mark")) {
      let mark = item.match(/\d/g);
      mark = mark.join("");
      if (mark) {
        return mark;
      }
    }
  }

  //no mark option found
  return false;
  //return options[1];
}
