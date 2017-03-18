var React = require("react");

var EducationItem = React.createClass({
    render: function() {
        return (
        <div className="row dataStyle">
            <div className="col-md-12">
                <ul className="list-group">
                <li> {this.props.schoolInfo.schoolName}</li>
                <li> {this.props.schoolInfo.degree}</li>
                <li> {this.props.schoolInfo.fieldOfStudy}</li>
                <li> {this.props.schoolInfo.activities}</li>
                <li> {this.props.schoolInfo.fromYear} - {this.props.schoolInfo.toYear}</li>
                </ul>
                {/*<a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right" /></a>*/}
                <hr />
              </div>
        </div>
        );
    }
});

module.exports = EducationItem;