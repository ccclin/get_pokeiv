var PokeIndex = React.createClass({

  getInitialState: function () {
    return {
      pokes: [],
      sort: ''
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
        this.setState(getResult);
      }
    }.bind(this));
  },

  buttonOnClick: function(e){
    e.preventDefault();
    this._onGet({sort: this.state.sort, type: e.target.id});
  },

  _onGet: function (params) {
    $.ajax({
      url: '/api/pokes',
      dataType: 'json',
      type: 'GET',
      data: params,
      success: function(result) {
        var getResult = result;
        this.setState({
          pokes: getResult.pokes,
          sort: getResult.sort
        });
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className="main ui masthead vertical segment">
        <div className="ui text container">
          <h2 className="ui dividing header">
            Get PokeIV
          </h2>
          <div className="ui buttons">
            <button id="pid" className="ui button" onClick={this.buttonOnClick}>ID</button>
            <button id="cp" className="ui button" onClick={this.buttonOnClick}>CP</button>
            <button id="iv" className="ui button" onClick={this.buttonOnClick}>IV</button>
          </div>
          <br/>
          <br/>
          <div className="ui cards">
            {
              this.state.pokes.map(function (poke, id) {
                var new_id = ("00" + poke.pid).slice(-3);
                var color = parseFloat(poke.iv) >= 80.0 ? 'blue' : parseFloat(poke.iv) >= 60.0 ? 'yellow' : 'red';
                return (
                  <div key={id} className="card to220">
                    <div className="content">
                      <img className="right floated tiny ui image" src={'/poke_img/' + new_id + '.png'}></img>
                      <div className={"ui " + color + " header"}>
                        {poke.name}
                      </div>
                      <div className="description">
                        <p>CP: {poke.cp}</p>
                        <p className={"ui " + color + " sub header"}>IV: {poke.iv}</p>
                        <p>ATK: {poke.individual_attack}</p>
                        <p>DEF: {poke.individual_defense}</p>
                        <p>STA: {poke.individual_stamina}</p>
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
