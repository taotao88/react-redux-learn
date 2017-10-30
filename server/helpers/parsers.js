/*
 * Parse host from given url string
 */
exports.parseHost = url => {
  if (url === null) {
    return 'null';
  }
  let hostname;
  if (url.indexOf("://") > -1) {
    hostname = url.split('/')[2];
  } else {
    hostname = url.split('/')[0];
  }
  hostname = hostname.split(':')[0];
  return hostname;
} 

/*
 * Convert hash into the format Charts can accept.
 */
exports.parseBars = result => {
  let labels = result.map(item => this.parseHost(item._id));
  let data = result.map(item => item.count);
  return {
    labels: labels,
    datasets: [
      {
        label: 'Test dataset',
        fillColor: '#0094D6',
        strokeColor: '#0094D6',
        highlightFill: 'rgba(151,187,205,0.75)',
        highlightStroke: 'rgba(151,187,205,1)',
        data: data,
      },
    ]
  };
};

