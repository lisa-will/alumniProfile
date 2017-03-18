var React = require( "react");

var EducationItem = require("./EducationItem");

var EducationList = React.createClass({
    render: function(){
        return (
        <div>
            {this.props.schools.map(schoolInfo => {
                return <EducationItem key={schoolInfo._id} schoolInfo={schoolInfo}/>;
            })}
        </div>
        );
    }
});

module.exports = EducationList;