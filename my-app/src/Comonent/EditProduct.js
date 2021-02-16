import React from 'react';
import axios from 'axios';
class EditProduct extends React.Component {
    constructor(props){
        super(props)
        this.state={
            
            companyId:this.props.match.params.companyId,
            productId:this.props.match.params.productId,
            
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

    handleSave=()=>{
        
        const URI='http://localhost:8080/product/editproduct'+'/'+this.state.productId + '/'+this.state.companyId;
        axios.put(URI,this.state.pinfo).then((response)=>{
            alert("Edited succesfully");
            this.props.history.push(`/get/${this.state.companyId}`);
          })
       
    }
  
    


    render() {
         return(
           
        <div className = "card col-lg-6 offset-md-3 offset-md-3">
        <br/>
        <br/>
        <br/>
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
            onChange={(e) => this.setState({pinfo: {...this.state.pinfo,productName : e.target.value }})}
            class="form-control"
            Placeholder="enter name"
          />
        </div>

        <div class="col">
        <p class="text-left">Product Info</p>
          <input
            type="text"
            value={this.state.pinfo.productInfo}
            onChange={(e) => this.setState({pinfo:{...this.state.pinfo,productInfo : e.target.value} })}
            class="form-control"
            Placeholder="enter product info"
          />
        </div>

        <div class="col">
        <p class="text-left">Product Price</p>
          <input
            type="text"
            value={this.state.pinfo.price}
            
            onChange={(e) => this.setState({pinfo:{...this.state.pinfo, price : e.target.value} })}
            class="form-control"
            Placeholder="enter price"
          />
        </div>

        <div class="col">
        <p class="text-left">Product Quantity</p>
          <input
            type="text"
            value={this.state.pinfo.quantity}
            onChange={(e) => this.setState({pinfo:{...this.state.pinfo,quantity : e.target.value }})}
            class="form-control"
            Placeholder="enter quantity"
          />
        </div>
        
        <div class="col">
        <p class="text-left">Availability Status</p>
          <input
            type="text"
            value={this.state.pinfo.status}
            onChange={(e) => this.setState({pinfo:{...this.state.pinfo, status: e.target.value }})}
            class="form-control"
            Placeholder=""
          />
        </div>
        
        
       
       
        
         
        </div>
      </div>
      <button type="button" class="btn btn-primary"
      onClick={()=>this.handleSave()}>
      Save
    </button>
      </div>
      )
      
    }
  }
export default EditProduct
