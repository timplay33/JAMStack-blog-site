const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });
  eleventyConfig.addPassthroughCopy({ 'src/_includes/assets/css/global.css': './global.css' });
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  })
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};