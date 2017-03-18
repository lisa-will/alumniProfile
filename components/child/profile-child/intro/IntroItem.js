var React = require("react");

var IntroItem = React.createClass({
    render: function() {
        return (
        <div className="row dataStyle">
            <div className="col-md-12">
                {/* Profile Picture */}
                <div className="text-center">
                    <img src="/assets/images/250x250-circle.png" className="profilePic"/>
                </div>
                    <h2 style={{textAlign: 'center'}}>{this.props.introInfo.firstName + " " + this.props.introInfo.lastName}</h2>
                    <ul className="list-group">
                        <li> Class of {this.props.introInfo.classOf}</li>
                        <li> {this.props.introInfo.address.city + ", " + this.props.introInfo.address.state}</li>
                        <li> {'"' + this.props.introInfo.headLine + '"'}</li>
                    </ul>
                {/*<a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right" /></a>*/}
                <hr />
              </div>
        </div>
        );
    }
});

module.exports = IntroItem;