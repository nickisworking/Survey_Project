//survey
SurveyCreator
.StylesManager
.applyTheme("bootstrap");

// Show Designer, Test Survey, JSON Editor and additionaly Logic tabs
var options = {
showLogicTab: true
};
//create the SurveyJS Creator and render it in div with id equals to "creatorElement"
var creator = new SurveyCreator.SurveyCreator("creatorElement", options);
//Show toolbox in the right container. It is shown on the left by default
creator.showToolbox = "right";
//Show property grid in the right container, combined with toolbox
creator.showPropertyGrid = "right";
//Make toolbox active by default
creator.rightContainerActiveItem("toolbox");

//SETTING 여기까지
// DB Connect
//DB에 저장하는 부분
creator.saveSurveyFunc = function () {
    //save the survey JSON
    console.log(creator.text);
    window.location.href = 'http://localhost:3000/create_survey_detail/create'
}

//creator.text = "{ pages: [{ name:\'page1\', questions: [{ type: \'text\', name:\"q1\"}]}]}";