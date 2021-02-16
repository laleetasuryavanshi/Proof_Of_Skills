import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
export default class DynamicTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messagen: "",
      messagep: "",
      name: [],
      progress: [],
      searchInput: "",
      items:[
        {
            name: "harshi",
            progress: "3"
        }
      ]

    }
  }

handleInsert(){
  
 
    for(var i=0;i<this.state.name.length;i++){
    this.state. items=[
      {
          name:this.state.name[i],
          progress:this.state.progress[i]
      }
  ]
const URI = "http://localhost:8080/student/save";
axios.post(URI,this.state.items).then((response) => {
  console.log(this.state.items);
  alert("Added Successfully!!");
}) 
    }
}
  handleClick() {
    var name = this.state.name;
    var progress = this.state.progress;

    name.push(this.state.messagen);
    progress.push(this.state.messagep);

    this.setState({
        messagen: "",
      messagep: "",
      name: name,
      progress: progress
      
    });
    
  }

  handleItemChanged(i, event) {
    var name = this.state.name;
    name[i]  = event.target.value;

    this.setState({
      name : name
    });
  }
  handleItemChanged1(i, event) {
    var progress = this.state.progress;
    progress[i]  = event.target.value;

    this.setState({
      progress: progress
    });
  }

  handleItemDeleted(i) {
    var name = this.state.name;
    var progress = this.state.progress;
    name.splice(i,1);

    progress.splice(i, 1);

    this.setState({
      name:name,
      progress:progress
    });
  }
  


  handleSearch=(e)=>{
    e.preventDefault();
   this.props.history.push('/search');
  
   
  }



  renderRowsl(){
    var context = this;
    

    return  this.state.progress.map(function(o, i) {
              return (
                <tr>
                <td>
            
                    <input
                      type="text"
                      value={o}
                      onChange={context.handleItemChanged1.bind(context, i)}
                    />
                    </td>
                    <td>
                    <button type="button" class=" btn btn-danger"
                    onClick={context.handleItemDeleted.bind(context)}
                  >
                    Delete
                  </button>
                    </td>
                    </tr>
              );
            });
  }
  renderRows() {
    var context = this;
    

    return  this.state.name.map(function(o, i) {
              return (
                <tr >
                <td>
            
                    <input
                      type="text"
                      value={o}
                      onChange={context.handleItemChanged.bind(context, i)}
                    />
                  </td>
                  </tr>
              );
            });
  }
  
  render() {
    return (
      <div>
      
        <table class="table table-striped table-bordered table-hover">
          <thead class="thead-dark">
            <tr>
              
              <th>NAME</th>
              <th>PROGRESS</th>
              
             
            </tr>
                                         </thead>
          <tbody>
          <tr scope="row">
            <td>{this.renderRows()}</td>
            <td>{this.renderRowsl()}</td>
           
            </tr>
          
            <td>
            <button type="button" class="btn btn-info"
            onClick={this.handleClick.bind(this)}
          >
            Add Student
          </button>
          <br/>
          <br/>
          <button type="button" class="btn btn-primary"
          onClick={this.handleSearch.bind(this)}
        >
          Search Student
        </button>
         </td>
          </tbody>
        </table>
        <button type="button" class="btn btn-success"
        onClick={this.handleInsert.bind(this)}
      >
        Save
      </button>
        
      </div>
    );
  }
}