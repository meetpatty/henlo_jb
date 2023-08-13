function getQueryParams() {
  const queryString = window.location.search;
  const params = {};
  if (queryString) {
    const paramArr = queryString.slice(queryString.indexOf('?') + 1).split('&');
    for (var i = 0; i < paramArr.length; i++) {
      const keyVal = paramArr[i].split('=');
      if (keyVal.length == 2 && keyVal[0]) {
        params[keyVal[0]] = decodeURIComponent(keyVal[1]);
      }
    }
  }
  return params;
}

function getMode() {
  const urlParams = getQueryParams();
  var mode = urlParams.mode;
  if (!mode) {
    mode = 'release';
  }
  if (mode !== 'development' && mode !== 'release') {
    mode = 'release';
  }
  return mode;
}