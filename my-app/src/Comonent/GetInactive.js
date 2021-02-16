import React from 'react';
import axios from 'axios';
import Icon from "react-crud-icons";
import "F:/vscode/Proof of Skills(Bench)/my-app/node_modules/react-crud-icons/dist/css/react-crud-icons.css";
class GetInactive extends React.Component {
    constructor(props){
        super(props)
        this.state={
            searchInput:"",
            companyId:this.props.match.params.companyId,
            pfinal:[],
            pinfo: [
                {
                    "productName": "",
                    "productId": "",
                    "price": "",
                    "productInfo": "",
                    "quantity": "",
                    "status": "Active"
                    
                }
            ],
            products: 
            {
                "companyId": "",
                "pdesc": [
                    {
                        "productName": "",
                        "productId": "",
                        "price": "",
                        "productInfo": "",
                        "quantity": "",
                        "status": ""
                    }
                ]
            },
            name:"",
            progress:"",
            searchInput:""
            

        }
    }
    componentWillMount(){
        axios.get('http://localhost:8080/product/get'+ '/'+this.state.companyId +'/Inactive').then((response)=>{
            
            this.setState({products: response.data} )
            //console.log(this.state.products.length);
               
                   this.setState({pinfo: this.state.products})
                   
                  // console.log(this.state.pfinal);
                   
                 // this.state.pinfo.push(this.state.products[i].pdesc);
                     
                   //  console.log(this.state.pinfo.length);
                //this.state.pinfo.push(this.state.products[0].pdesc);
                 
                //console.log(this.state.products[0].);
                for(var i=0;i<this.state.pfinal.length;i++){
                    for(var j=0;j<this.state.pfinal.length;j++){
                console.log(this.state.pfinal[i][j].productName);
                    }
                }   
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
         
        let arrayCopy = [...this.state.pinfo];
        console.log("yaaayyyy")
        console.log(arrayCopy)
        arrayCopy.sort(this.compareBy(key));
        this.setState({pinfo: arrayCopy});
      }

      handleEdit=(user)=>{
        //e.preventDefault();
       this.props.history.push(`/edit/${this.state.companyId}/${user.productId}`);
     }
    handleActive(){
        this.props.history.push(`/get/${this.state.companyId}`);
    }

  
   
    handleSearch = event => {
        this.setState({ searchInput: event.target.value }, () => {
          this.globalSearch();
        });
      };
      globalSearch = () => {
        let { searchInput } = this.state;
        let originalData = [...this.state.pinfo];
        let filteredData = originalData.filter(
         
            value => {
                return (
                  value.productName.toLowerCase().includes(searchInput.toLowerCase()))||
                  value.productId.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
                  value.quantity.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
                  value.price.toString().toLowerCase().includes(searchInput.toLowerCase()) 
             
              
                });
        this.setState({ pinfo: filteredData });
      };


    render() {
        
         
      return(
        <div>
        <Icon name="search"
        size = "medium"
        tooltip = "Search"
       theme = "light"
        size = "medium"
        
     / >
       
        <input name="searchInput" onChange={this.handleSearch} value={this.state.searchInput} /><br />
          <hr />
          <br></br>
          <br></br>
          <button type="button" class="btn btn-warning"
          onClick={()=>this.handleActive()}>
          View Active Products
        </button>
        <table class="table table-striped table-bordered table-hover">
        <thead>
        
        <tr>
        <th><button> PRODUCT ID</button></th>
        <th><button onClick={() => this.sortBy('productName')}>PRODUCT NAME</button></th>
        <th><button onClick={() => this.sortBy('productInfo')}> INFO</button></th>
        <th><button onClick={() => this.sortBy('price')}> PRICE</button></th>
        <th><button onClick={() => this.sortBy('quantity')}> QUANTITY</button></th>
        <th><button > STATUS</button></th>
        <th>ACTION</th>

        </tr>
        </thead>
        <tbody>
        
        {


            this.state.pinfo.map(
               (user)=>
                <tr>
               
                <td>{user.productId}</td>
                <td>{user.productName}</td>
                <td>{user.productInfo}</td>
                <td>{user.price}</td>
                <td>{user.quantity}</td>
                <td>{user.status}</td>
                <td>
                <Icon name="edit"
        size = "medium"
        tooltip = "Edit"
       theme = "light"
        size = "medium"
        onClick={()=>this.handleEdit(user)}
     / >
                
               </td>
               </tr> 
                
        
            )
        }
        
      
      
        
            
        
        </tbody>
        </table>
         
      
      </div>
      )
      
    }
  }
export default GetInactive
