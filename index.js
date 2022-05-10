let str =
  '```{r price-shape-quiz-1, ffr= kjhfrf,mark=10}\r\nquiz(\r\n  caption = "",\r\n  question("Which of the following describes the shape of the distribution of nightly rates of Airbnb edibnb in Edinburgh? Check all that apply.",\r\n           answer("Right skewed",\r\n                  correct = TRUE),\r\n           answer("Left skewed",\r\n                  message = "Skew is on the side of the longer tail"),\r\n           answer("Symmetric",\r\n                  message = "If you were to draw a vertical line down the middle of the x-axis, would the left and right sides of the distribution look like mirror images?"),\r\n           answer("Unimodal",\r\n                  correct = TRUE),\r\n           answer("Bimodal",\r\n                  message = "How many prominent peaks, or modes, do you see? (recall \\"bi\\" means \\"two\\")"),\r\n           answer("Multimodal",\r\n                  message = "A distribution is said to be multimodal if there are three or more prominent peaks. How many prominent peaks, or modes, do you see?"),\r\n           allow_retry = TRUE),\r\n  question("Which of the following is false?",\r\n           answer("There are no listings with a nightly rate above \u00A31,250."),\r\n           answer("More than 50% of listings have a nightly rate below \u00A3250."),\r\n           answer("More than 25% of listings have a nightly rate above \u00A3500.",\r\n                  correct = TRUE),\r\n           answer("It is possible that some of the listings have a nightly rate of \u00A30."),\r\n           allow_retry = TRUE)\r\n)\r\n```\r\n\r\n\r\n### Faceted histograms\r\n\r\nCreate a faceted histogram where each facet represents a neighbourhood and displays the distribution of Airbnb prices in that neighbourhood. Sample code is provided below, but you will need to fill in the blanks.\r\n\r\n```{r faceted-histo, exercise=TRUE}\r\nggplot(data = ___, mapping = aes(x = ___)) +\r\n  geom_histogram() +\r\n  facet_wrap(~___) +\r\n  labs(\r\n    x = "Airbnb listing price, in \u00A3",\r\n    y = "Frequency",\r\n    title = "Distribution of Airbnb nightly rates in Edinburgh",\r\n    subtitle = "By neighbourhood"\r\n  )\r\n```\r\n\r\n```{r faceted-histo-hint-1}\r\nggplot(data = edibnb, mapping = aes(x = ___)) +\r\n  geom_histogram() +\r\n  facet_wrap(~___) +\r\n  labs(\r\n    x = "Airbnb listing price, in \u00A3",\r\n    y = "Frequency",\r\n    title = "Distribution of Airbnb nightly rates in Edinburgh",\r\n    subtitle = "By neighbourhood"\r\n  )\r\n```';

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

console.log(getMarkOption("price-shfrfrape-quiz-1", str));
