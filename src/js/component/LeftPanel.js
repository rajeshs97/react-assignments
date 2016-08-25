var React=require('react');

var ModelWin=require('./ModelWin')
var LabelComponent=require('./LabelComponent');

var LeftPanel=React.createClass({ //creating class
  render:function() //render function
  {
    var data=this.props.allLabelsData.map(function(description,id) //map for iteration
    //description.id and description.name fetches the values and assign the value to id and name
    // key={id} unique key to iterate the loop
      {
        return(

          <div key={id}>
            <LabelComponent key={id} id={description.id} name={description.name}>{description.name}</LabelComponent>
          </div>

        );//end of function return in the function
      });
      //console.log(data);
      return(

        <div>
        <ModelWin/>
          {data}
        </div>

      );//end of return statement
  }
});
module.exports=LeftPanel;//exporting the LeftPanel
