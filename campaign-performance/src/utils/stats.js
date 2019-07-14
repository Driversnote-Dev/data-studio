const chiSquaredTest = require('chi-squared-test')

module.exports = {
  expected: function(rowTotal, columnTotal, grandTotal) {
    return ((rowTotal * columnTotal) / grandTotal).toFixed(1)
  },

  notClicked: function(clicked, impressions) {
    return impressions - clicked
  },

  rowTotal: function(clicked, notClicked) {
    return clicked + notClicked
  },

  pValue: function(observed, expected, reduction) {
    const { probability } = chiSquaredTest(observed, expected, reduction)
    return probability
  },
}
