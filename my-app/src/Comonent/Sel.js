import React from 'react';
import axios from 'axios';
import Icon from "react-crud-icons";
import "F:/vscode/Proof of Skills(Bench)/my-app/node_modules/react-crud-icons/dist/css/react-crud-icons.css";
class Sel extends React.Component {
    constructor(props){
        super(props)
        this.state={
          
            searchInput:"",
            companyId:this.props.match.params.companyId,
            productId:[],

            productName: "",
            pfinal:[],
            pinfo1: 
                {
                    "productName": "",
                    "productId": this.productId,
                    "price": "",
                    "productInfo": "",
                    "quantity": "",
                    "status": "",
                    
                    
                    
                },
            pinfo: [
                {
                    "productName": "",
                    "productId": "",
                    "price": "",
                    "productInfo": "",
                    "quantity": "",
                    "status": "",
                    "visible" :""
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
                        "status": "Active"
                    }
                ]
            },
           
           squantity:[],
            
             totalCost :[],
             total :"",
             visible : false,
             a :""

        }
       
    }
    componentWillMount(){
        axios.get('http://localhost:8080/product/get'+ '/'+this.state.companyId +'/Active').then((response)=>{
            
            this.setState({products: response.data} )
            //console.log(this.state.products);
               
                   this.setState({pinfo: this.state.products})
                   //this.setState({...pinfo,pinfo.visible: false})
                   //this.setState({pinfo: {...this.state.pinfo,visible : false }})
                   
                   
                   
                   
                  console.log(this.state.pinfo);
                   
                 // this.state.pinfo.push(this.state.products[i].pdesc);
                     
                   //  console.log(this.state.pinfo.length);
                //this.state.pinfo.push(this.state.products[0].pdesc);
                 
                //console.log(this.state.products[0].);
                for(var i=0;i<this.state.pinfo.length;i++){
                   
                console.log(this.state.pinfo[i].visible);
                    
                }   
    })
    }

   

    handleDone(){
        
    
      axios.get('http://localhost:8080/product/modify'+  '/'+this.state.productId+ '/'+this.state.companyId + '/'+this.state.squantity).then((response)=>{
      
        alert("TOTAL COST" + this.state.totalCost.reduce((a,b)=>a+b,0))
         location.reload(true);
       })
       
      }
    

   
     
handlecreate(user,sq){
this.state.productId.push(user.productId);
this.state.squantity.push(sq);
  
var t=user.price * sq;
var a;
this.state.totalCost.push(t) ;
this.state.totalCost.reduce((a,b)=>a+b,0);
this.setState({a :this.state.totalCost.reduce((a,b)=>a+b,0) });
}


handleSelect(){
  this.setState({visible : true});

  }
  handlecheck(){
    
    this.setState({visible : false});
      }


    render() {
        
         
      return(
        <div>
        <br></br>
        <br></br>
        <td>
              
        <button type="button" class="btn btn-info"
        onClick={()=>this.handleSelect()}
        
      >
        Sell
      </button>
       
     
      </td>
      <td>
      {this.state.visible  &&
          
            
          <Icon name="close"
          size = "medium"
          tooltip = "cancel"
         theme = "light"
          size = "medium"
          onClick={()=>this.handlecheck()}
          / >
  }
  </td>
        <table class="table table-sm align-middle table-striped table-bordered ">
       
        <thead>
        
        <tr>
        
        <th>PRODUCT ID</th>
        <th>PRODUCT NAME</th>
        <th>QUANTITY</th>
        <th>PRICE</th>
        {this.state.visible  &&
        <th>SELL QUANTITY</th>}
       
        <th></th>
        
       
        </tr>
        </thead>
        
        <tbody>
        {


          this.state.pinfo.map(
          
             (user)=>
             
              <tr>
             
              
            
              <td>{user.productId}</td>
              <td>{user.productName}</td>
              <td>{user.quantity}</td>
              <td>{user.price}</td>
             
              
              
              {this.state.visible   && 
                <td>
                <input
                type="text"
                
                onChange={(e) => this.handlecreate(user,e.target.value)}
                class="form-control"
                
                
              />
                </td>
              }
              
             
                
                
                
            
             </tr> 
              
      
          )
      }
      <br></br>
      
      {this.state.visible  &&
                
        <p>
        
        <Icon name="check"
        size = "medium"
        tooltip = "Add to cart"
       theme = "light"
        size = "medium"
        onClick={()=>this.handleDone()}
        / >
        </p>
      }

      <br></br>
      <br></br>
      <p><b>BILLING AMMOUNT</b></p>
      <input
      type="text"
       value={this.state.a}
       
      //onChange={(e) => this.setState({ tax: e.target.value })}
      class="form-control"
      Placeholder=""
    />
    
      
          
        
        </tbody>
        </table>
      
       
      </div>
      )
      
    }
  }
export default Sel
