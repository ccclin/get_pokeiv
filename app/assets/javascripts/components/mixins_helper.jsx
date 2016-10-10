var LoadPage = {
  loadPage(url) {
    $.get(url, function(result) {
      var getResult = result;
      if (this.isMounted()) {
        this.setState(getResult);
      }
    }.bind(this));
  }
};
