var HomeIndex = React.createClass({
  mixins: [LoadPage],

  getInitialState: function () {
    return {
      google_url: '',
      get_params: {}
    };
  },

  componentDidMount: function() {
    this.loadPage(this.props.source);
    document.title = "GetPokeIV";
  },

  render: function() {
    var params = this.state.get_params;
    var url_string = Object.keys(this.state.get_params).map(function(key) {
      return key + '=' + params[key]
    }).join('&');

    return (
      <div className="main ui masthead vertical segment">
        <div className="ui center aligned header" style={{display: this.props.alert ? '' : 'none'}}>
          <div className="ui negative message">
            <div className="header">
              {this.props.alert}
            </div>
          </div>
        </div>
        <div className="ui text container">
          <h2 className="ui dividing header">
            Get PokeIV
          </h2>
        </div>
        <div className="ui center aligned header">
          <a className="big ui google plus button" href={this.state.google_url + '?' + url_string } target="_blank">
            <i className="google icon"></i>
            Get Google code
          </a>
        </div>
        <div className="ui center aligned header">
          <form className="" action="/pokes" method="post" >
            <div className="ui action input">
              <input name="authenticity_token" type="hidden" value={this.props.authenticity_token}></input>
              <input type="text" id="google_code" name="google_code" placeholder="Code..." required></input>
              <button className="ui button" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});
