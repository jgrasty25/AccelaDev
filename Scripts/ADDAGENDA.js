 //Description:
//This sample script is used to add a agenda record to a meeting. (Schedule meeting)
//Event Name: 
//-----------------------------------------------------------------------------------------------------------

var meetingGroupID = '12';
var meetingID = '6263';
var duration = '60';
var reason = 'Violation found';
var comments = 'A hearing meeting is required for the case review.';
var capIDModel = aa.cap.createCapIDScriptModel('13REN','00000','00055').getCapID();

var result = aa.meeting.scheduleMeeting(capIDModel, meetingGroupID, meetingID, duration, reason, comments);
if(result.getSuccess())
{
        aa.env.setValue("ScriptReturnMessage", "Meeting is scheduled successfully.");
       
}
else
{ 
	aa.env.setValue("ScriptReturnMessage", "Failed to schedule a meeting to a Record.");
}
