var PokeIndex = React.createClass({

  getInitialState: function () {
    return {
      pokes: []
    };
  },

  componentDidMount: function() {
    this.loadPage(this.props.source);
    document.title = "GetPokeIV";
  },

  loadPage: function(url) {
    $.get(url, function(result) {
      var getResult = result;
      if (this.isMounted()) {
        this.setState({
          pokes: getResult.pokes
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div className="main ui masthead vertical segment">
        <div className="ui text container">
          <h2 className="ui dividing header">
            Get PokeIV
          </h2>
          <div className="ui cards">
            {
              this.state.pokes.map(function (poke, id) {
                var new_id = ("00" + poke.pid).slice(-3);
                return (
                  <div key={id} className="card">
                    <div className="content">
                      <img className="right floated mini ui image" src={'/poke_img/' + new_id + '.png'}></img>
                      <div className="header">
                        {poke.name}
                      </div>
                      <div className="description">
                        <p>IV: {poke.iv}</p>
                        <p>CP: {poke.cp}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
});
