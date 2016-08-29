var React=require('react');
var ReactDOM=require('react-dom');

var {browserHistory,Route,Router,IndexRoute}= require('react-router');

var NavBar=require('./component/NavBar');
var GmailBox=require('./component/GmailBox');
var About=require('./component/About');
var Home=require('./component/Home');

var MainComp=React.createClass({
  render: function(){
    return(
    <div>
      <NavBar/>
      <br/><br/><br/><br/>
    </div>
   );
  }
});
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainComp}/>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/gmailbox" component={GmailBox}/>
  </Router>,
  document.getElementById('app'));
