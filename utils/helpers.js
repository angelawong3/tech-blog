module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    return `${day}/${month}/${year}`;
  },
};
