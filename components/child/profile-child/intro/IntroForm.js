var React = require('react');

var IntroForm = React.createClass( {
  getInitialState: function(){
    return { imageURL: '', headLine: '' , country: '' , city: '' , state: '' , zip: '' };
  },
//   handleImageURLChange: function(e) {
//     this.setState({ imageURL: e.target.value });
//   },
  handleHeadLineChange: function(e) {
    this.setState({ headLine: e.target.value });
  },
  handleCountryChange: function(e) {
    this.setState({ country: e.target.value });
  },
  handleCityChange: function(e) {
    this.setState({ city: e.target.value });
  },
  handleStateChange: function(e) {
    this.setState({ state: e.target.value });
  },
  handleZipChange: function(e) {
    this.setState({ zip: e.target.value });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    // let imageURL = this.state.imageURL.trim();
    let headLine = this.state.headLine.trim();
    let country = this.state.country.trim();
    let state = this.state.state.trim();
    let city = this.state.city.trim();
    let zip = this.state.zip.trim();
        console.log(this.state);
    if (!state || !city ) {
      return;
    }
    console.log("Here");
    this.props.onIntroSubmit({ headLine: headLine, country: country, 
                 state: state , city: city , zip: zip });
    this.setState({ imageURL: '', headLine: '' , country: '' , state: '' , city: '' , zip: '' });
  },
  render: function() {
    return (
         <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              {/* Modal content*/}
                <div className="modal-content">
                    <form method="POST" id="dataForm" action={this.handleSubmit}>
                        <div className="form-group">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            <h4 className="modal-title">Edit Intro</h4>
                        </div>

                  {/* Modal-Body :: Bring on the edits! */} 
                  <div className="modal-body">

                        {/* #profilePhoto */} 
                        {/*<label for="photoInputFile">Profile Photo</label>
                        <input type="file" id="photoInputFile"  />
                        <p class="help-block">Upload Profile Photo Here.</p>*/}
  
                       
                        {/* #headLine */} 
                        <label htmlFor="headLine" className="form-control-label">Headline</label>
                        <textarea className="form-control" id="headLine" value= {this.state.headLine} onChange= {this.handleHeadLineChange} />
                        {/* #country */}
                        <label htmlFor="country" className="form-control-label">Country</label>
                        <input type="text" className="form-control" id="country" value= {this.state.country} onChange= {this.handleCountryChange} />
                        {/* #city */}
                        <label htmlFor="city" className="form-control-label">City</label>
                        <input type="text" className="form-control" id="city" value= {this.state.city} onChange= {this.handleCityChange} />
                        {/* #state */}
                        <label htmlFor="state">State</label>
                        <select className="form-control" id="state" value= {this.state.state} onChange= {this.handleStateChange}>
                          <option>State</option>
                          <option>AL</option>
                          <option>AK</option>
                          <option>AZ</option>
                          <option>AR</option>
                          <option>CA</option>
                          <option>CO</option>
                          <option>CT</option> 
                          <option>DE</option>
                          <option>FL</option>
                          <option>GA</option>
                          <option>HI</option>
                          <option>IA</option>
                          <option>ID</option>
                          <option>IL</option>
                          <option>IN</option>
                          <option>KS</option>
                          <option>KY</option>
                          <option>LA</option>
                          <option>MA</option>
                          <option>MD</option>
                          <option>ME</option>
                          <option>MI</option>
                          <option>MN</option>
                          <option>MO</option>
                          <option>MS</option>
                          <option>MT</option>
                          <option>NC</option>
                          <option>ND</option>
                          <option>NE</option>
                          <option>NH</option>
                          <option>NJ</option>
                          <option>NM</option>
                          <option>NV</option>
                          <option>NY</option>
                          <option>OH</option>
                          <option>OK</option>
                          <option>OR</option>
                          <option>PA</option>
                          <option>RI</option>
                          <option>SC</option>
                          <option>SD</option>
                          <option>TN</option>
                          <option>TX</option>
                          <option>UT</option>
                          <option>VA</option>
                          <option>VT</option>
                          <option>WA</option>
                          <option>WA</option>
                          <option>WI</option>
                          <option>WV</option>
                          <option>WY</option>         
                        </select>
                        {/* #zip */}
                        <label htmlFor="zip" className="form-control-label">Zip Code</label>
                        <input type="text" className="form-control" id="zip" value= {this.state.zip} onChange= {this.handleZipChange} />
                      </div>
                    </div>
                  {/* Modal-Footer */} 
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-default">Save</button>
                    </div>
                  </form> 
                </div>
              </div>
            </div>
        )
     }
});

module.exports =  IntroForm;