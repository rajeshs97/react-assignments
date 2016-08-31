
var React = require('react');

var LeftPanel=require('./LeftPanel');
var RightPanel=require('./RightPanel');
var ModalWindow=require('./ModalWindow');
var loadedData = false;


var GmailBox = React.createClass({
 getInitialState: function()
   {
     return({allLabelsData:[],inboxData:[]});
   },
 gmailLogin: function()
 {
   var acToken, tokenType, expiresIn;
   var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
   var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly';
   var CLIENTID    =   '122401256733-v8sjqi4gganla48d9f20d2bdfaeg6lh0.apps.googleusercontent.com';
   var REDIRECT    =   'http://localhost:8080';
   var TYPE        =   'token';
   var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
   var win         =   window.open(_url, "windowname1", 'width=800, height=600');

   var pollTimer   =   window.setInterval(function()
   {

       try
       {
           if (win.document.URL.indexOf(REDIRECT) != -1)
           {
               window.clearInterval(pollTimer);
               var url =   win.document.URL;
               acToken =   gup(url, 'access_token');
               tokenType = gup(url, 'token_type');
               expiresIn = gup(url, 'expires_in');
               localStorage.setItem('gToken',acToken);
               localStorage.setItem('gTokenType',tokenType);
               localStorage.setItem('gExprireIn',expiresIn);
               function gup(url, name) {
                   name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
                   var regexS = "[\\#&]"+name+"=([^&#]*)";
                   var regex = new RegExp( regexS );
                   var results = regex.exec( url );
                   if( results == null )
                       return "";
                   else
                       return results[1];
               }
               win.close();
           }
       }
       catch(e)
       {
         console.log(e);
       }
   }, 500);
   this.allLabels();
   this.getmessageID('INBOX');
 },

 allLabels: function()
 {
     var accessToken = localStorage.getItem('gToken');
     $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/me/labels?key={AIzaSyCtNDr9ikNZx04UVpcBuUXRoNTAAoAqbAo}',
      dataType: 'json',
      type: 'GET',
      async:false,
      beforeSend: function (request){

        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
        this.setState({allLabelsData:data.labels});
        loadedData=true;
        //console.log(data);
        console.log("success");
        console.log("inside allLabels function");
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
   });

 },
getmessageID: function(msgID)
  {
    var accessToken = localStorage.getItem('gToken');
    $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/rajr76572%40gmail.com/messages?labelIds='+msgID+'&maxResults=10&key={AIzaSyCtNDr9ikNZx04UVpcBuUXRoNTAAoAqbAo}',
      dataType: 'json',
      type: 'GET',
      async:false,
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
        var arr=[];

        for (var i = 0; i < data.messages.length; i++) {
          //console.log(data.messages[i].id);
          arr.push(this.getInbox(data.messages[i].id));
        }

        this.setState({inboxData:arr});
        console.log(inboxData);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
    });

  },
getInbox: function(id)
{
  //console.log(id);
    var accessToken = localStorage.getItem('gToken');
var ob=$.ajax({
     url: 'https://www.googleapis.com/gmail/v1/users/rajr76572%40gmail.com/messages/'+id+'?key={AIzaSyCtNDr9ikNZx04UVpcBuUXRoNTAAoAqbAo}',
     dataType: 'json',
     type: 'GET',
     async:false,
     beforeSend: function (request)
     {
       request.setRequestHeader("Authorization", "Bearer "+accessToken);
     },
     success: function(data)
     {
       //console.log("inboxData");
       //this.setState({inboxData:inboxArray});

     }.bind(this),
     error: function(xhr, status, err) {
       console.error(err.toString());
     }.bind(this)
  });
  return ob.responseJSON;

},

 render:function()
 {
   var leftPanel;
   var rightPanel;

   if(loadedData){
     leftPanel =  <LeftPanel allLabelsData={this.state.allLabelsData} msgID={this.getmessageID}/>
     rightPanel=  <RightPanel rp={this.state.inboxData} />
     //console.log(this.state.inboxData);
   }

     return(

       <div className="GmailBox">
           <div className="container-fluid">
             <div className="row">
                 <div className="col-lg-1">
                  <button id="r-button" onClick={this.gmailLogin} className="btn btn-primary pull-left">SignIn</button>
                  </div>

                  <div className="col-lg-8 pull-right">
                    <h2 id="mailTitle">Gmail</h2>
                    <hr/>
                  </div>
              </div>
               <div className="row">
                 <div className="col-lg-2">
                    {leftPanel}
                  </div>
                 <div className="col-lg-10">
                 {rightPanel}
                 </div>
               </div>
         </div>
     </div>
     );
 }
 });

module.exports = GmailBox
