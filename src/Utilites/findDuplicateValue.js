
const findDuplicateValue = (arr) => {
    var frequency = {};
    arr.forEach(function(item) {
      frequency[item] = (frequency[item] || 0) + 1;
    });
    return Object.entries(frequency).filter(function([item, count]) {
      return count > 1;
    }).map(function([item, count]) {
      return { item, count };
    });
  

};
export default findDuplicateValue;