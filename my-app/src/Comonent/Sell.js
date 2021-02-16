import React from 'react';
import axios from 'axios';
class Sell extends React.Component {
    constructor(props){
        super(props)
        this.state={
            
            companyId:this.props.match.params.companyId,
            productId:this.props.match.params.productId,
            squantity:"",
            tax:"",
            total:"",
            pinfo: 
                {
                    "productName": "",
                    "productId": this.props.match.params.productId,
                    "price": "",
                    "productInfo": "",
                    "quantity": "",
                    "status": ""
                    
                }
           

        }
    }
    componentWillMount(){
    
        axios.get('http://localhost:8080/product/getproduct'+  '/'+this.state.productId + '/'+this.state.companyId).then((response)=>{
            
            this.setState({pinfo: response.data} )
            console.log(this.state.pinfo.productName);
         })
    }

    handleDone=()=>{
        
  
        axios.get('http://localhost:8080/product/modify'+  '/'+this.state.productId + '/'+this.state.companyId + '/'+this.state.squantity).then((response)=>{
            
            alert("Sold" + "Total cost :" + (this.state.tax + this.state.pinfo.price)*this.state.squantity)
console.log(response.data);
//this.props.history.push(`/get/${this.state.companyId}`);
         })
        
       
    }
    handleAdd=()=>{
        
      this.props.history.push(`/sell/${this.state.companyId}`);
      

  }
  
    


    render() {
         return(
        <div className = "card col-lg-6 offset-md-3 offset-md-3">
        <div class = "card-body">
        
        <div class="row">
        <div class="col">
        <p class="text-left">Product -- Id</p>
          <input
            type="text"
            value={this.state.pinfo.productId}
            
            class="form-control"
            Placeholder=""
          />
        </div>
        
        
       
        <div class="col">
        <p class="text-left">Product Name</p>
          <input
            type="text"
            value={this.state.pinfo.productName}
            class="form-control"
            
          />
        </div>

        

        <div class="col">
        <p class="text-left">Product Price</p>
          <input
            type="text"
            value={this.state.pinfo.price}
            
           
            class="form-control"
            
          />
        </div>
        
       
        <div class="col">
        <p class="text-left"> Product Quantity<br/></p>
          <input
            type="text"
            value={this.state.pinfo.quantity}
           // onChange={(e) => this.setState({pinfo:{...this.state.pinfo,quantity : e.target.value }})}
            class="form-control"
            
          />
        </div>
        
        <div class="col">
        <p class="text-left">Selling quantity</p>
          <input
            type="text"
            
            onChange={(e) => this.setState({ squantity: e.target.value })}
            class="form-control"
            Placeholder=""
          />
        </div>
        
       
        <div class="col">
        <p class="text-left">Total Cost</p>
       
          <input
            type="text"
             value={this.state.pinfo.price * this.state.squantity}
            //onChange={(e) => this.setState({ tax: e.target.value })}
            class="form-control"
            Placeholder=""
          />
        </div>
         </div>
      </div>
      <button type="button" class="btn btn-primary"
      onClick={()=>this.handleDone()}>
      Done
    </button>

    <button type="button" class="btn btn-primary"
    onClick={()=>this.handleAdd()}>
    Add
  </button>

      </div>
      )
      
    }
  }
export default Sell
