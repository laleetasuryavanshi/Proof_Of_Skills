import React from 'react';
import axios from 'axios';
class SearchStudent extends React.Component {
    constructor(props){
        super(props)
        this.state={
            users:[{name : "",progress : ""}],
            name:"",
            progress:"",
            searchInput:""

        }
    }
    componentWillMount(){
        axios.get('http://localhost:8080/student/all').then((response)=>{
            this.setState({users: response.data}
                )
                
           
    })
    }
    
    compareBy(key) {
        return function (a, b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
        };
      }
     
      sortBy(key) {
         
        let arrayCopy = [...this.state.users];
        console.log("yaaayyyy")
        console.log(arrayCopy)
        arrayCopy.sort(this.compareBy(key));
        this.setState({users: arrayCopy});
      }
        
      handleSearch = event => {
        this.setState({ searchInput: event.target.value }, () => {
          this.globalSearch();
        });
      };
      globalSearch = () => {
        let { searchInput } = this.state;
        let originalData = [...this.state.users];
        let filteredData = originalData.filter(
         
            value => {
                return (
                  value.name.toLowerCase().includes(searchInput.toLowerCase()) )
        });
        this.setState({ users: filteredData });
      };

    render() {
        
         
      return(
        <div>
        <h4>Search:</h4>
        <input name="searchInput" onChange={this.handleSearch} value={this.state.searchInput} /><br />
          <hr />
        <table class="table table-striped table-bordered table-hover">
        <thead>
        
        <tr>
        <th><button onClick={() => this.sortBy('name')}> NAME</button></th>
        <th><button onClick={() => this.sortBy('progress')}> PROGRESS</button></th>
        
        
        </tr>
        </thead>
        <tbody>
        {
            this.state.users.map(
               (user)=>
                <tr>
                
                <td>{user.name}</td>
                <td>{user.progress}</td>
               </tr> 
                
        
            )
        }
        </tbody>
        </table>
         
      
      </div>
      )
      
    }
  }
export default SearchStudent
