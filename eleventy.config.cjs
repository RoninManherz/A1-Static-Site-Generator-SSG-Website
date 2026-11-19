module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_src/style.css");
  eleventyConfig.addPassthroughCopy("_src/FlipPhone.jpg");
  eleventyConfig.addPassthroughCopy("_src/F1Pro.png");
};
