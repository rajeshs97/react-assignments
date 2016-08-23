var React= require('react');
var ReactDOM= require('react-dom');

var NavBar= React.createClass({
    render: function(){
        return(
            <div className="container">
            <div className="navbar navbar-fixed-top">
            <div className="container">
                <button className="navbar-toggle" data-target=".navbar-responsive-collapse" data-toggle="collapse" type="button">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div className="nav-collapse collapse navbar-responsive-collapse">
                    <ul className="nav navbar-nav">

                        <li className="active"><a href="/a"> Home </a></li>
                        <li className=""><a href ="#"> My Application </a></li>
                        <li className=""><a href ="#"> About Us </a></li>
                        <li className=""><a href ="#"> Help </a></li>
                        <li className=""><a href ="/a"> Contact Us </a></li>
                        </ul>
                </div>
            </div>
        </div>
            </div>
        );
    }
});
module.exports=NavBar;
