var React = require( "react");

var ExperienceItem = require("./ExperienceItem");

var ExperienceList = React.createClass({
    render: function(){
        return (
        <div>
            {this.props.jobs.map(jobInfo => {
                return <ExperienceItem key={jobInfo._id} jobInfo={jobInfo}/>;
            })}
        </div>
        );
    }
});

module.exports = ExperienceList;