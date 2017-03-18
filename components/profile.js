// Include React
var React = require("react");
var EducationList = require("./profile-child/education/EducationList");
var EducationForm = require("./profile/education/EducationForm");
var ExperienceList = require("./profile-child/experience/ExperienceList");
var ExperienceForm = require("./profile/experience/ExperienceForm");
// var OrganizationList = require("./profile-child/organization/OrganizationList");
// var OrganizationForm = require("./profile/organization/OrganizationForm");
var IntroForm = require("./profile-child/intro/IntroForm");
var IntroItem = require("./profile/intro/IntroItem");
var AlumniWebPortalData = require( '../shared/AlumniDataRouter');
var axios = require('axios');

var Profile = React.createClass({

getInitialState: function(){
    return {schools: [], searchId: "", action: "list"};
            userData: {}
},
componentDidMount: function() {
     this.getUserInfo();
    },
    getUserInfo: function(){
      var self = this;
      axios.get("/api/userinfo").then(function(userData){
        console.log(userData);
        if(userData)
        {
          self.setState({userData: userData.data});
        }
      });
    },
handleIntroSubmit: function(introBody) {
    var self = this;
    AlumniWebPortalData.updateIntroData(userData._id, introData).then(data => {
          console.log(data.data);
            self.getUserInfo();
        });
    },
  render: function() {
    return (

      <div>
        <div className="container">

          {/* ::Intro container */}
          <div className="jumbotron" style={{paddingRight: 30, paddingLeft: 30}}>

            {/* PLACE PROFILE INTRO INFO HERE! */}
            <div className="introData">
              <IntroItem onIntroInfo ={this.state.userData} />
            </div>

            {/* Trigger the modal with a button */}
            <button type="button" id="editIntroBtn" className="btn btn-default btn-circle " data-toggle="modal" data-target="#myModal"><i className="fa fa-pencil" aria-hidden="true" /></button>
           
            <IntroForm onIntroSubmit ={this.handleIntroSubmit} />

          </div> {/* /.jumbotron */} 
        </div> {/* /.container */}

        {/* ::Experience container */} 

        <div className="container">
          <div className="panel panel-default">
            <div className="panel-body">
              <h4 className="panel-title">Experience</h4>

              {/* horizontal line */} 
              <hr/>
              
              {/* PLACE EXPERIENCE INFO HERE! */}
              <ExperienceList jobs = {this.state.userData.jobs} />

              <div className="card">
                <div className="card-block">
                  {/* Trigger (Add Work) modal with a button */}
                  <button type="button" id="addExperienceBtn" className="btn btn-default btn-circle " data-toggle="modal" data-target="#workModal"><i className="fa fa-pencil" aria-hidden="true" /></button>
                  
                  <ExperienceForm onExperienceSubmit ={this.handleExperienceSubmit} />

                </div> {/* /.card-block */}
              </div> {/* /.card */} 
            </div> {/* /.panel-body */}
          </div> {/* /.panel-default */}
        </div> {/* /.container */} 


        {/* ::Education container */} 

        <div className="container">
          <div className="panel panel-default">
            <div className="panel-body">
              <h4 className="panel-title">Education</h4>

              {/* horizontal line */} 
              <hr/>

              {/* PLACE EDUCATION INFO HERE! */}
              <EducationList schools = {this.state.userData.schools} />

              <div className="card">
                <div className="card-block">
                  {/* Trigger (Add Education) modal with a button */}
                  <button type="button" id="addEducationBtn" className="btn btn-default btn-circle " data-toggle="modal" data-target="#educationModal"><i className="fa fa-pencil" aria-hidden="true" /></button>
                  {/* ::Add (Education) College :: Modal */}


                  <EducationForm onEducationSubmit ={this.handleEducationSubmit} />


                </div> {/* /.card-block */} 
              </div> {/* /.card */} 
            </div> {/* /.panel-body */}
          </div> {/* /.panel-default */}
        </div> {/* /.container */}
      </div>
    );
  }
});

    
module.exports = Profile;