import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
export default class ProductTable extends React.Component {
    constructor(props) {
      
        super(props);
        
        this.state = {
           
            messagei:"",
            messagen:"",
            messagein:"",
            messagep:"",
            messageq:"",
            
                    productName: [],
                    productId: [],
                    price: [],
                    productInfo: [],
                    quantity:[],
               
           products: 
                {
                    "companyId": 51,
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
                }
           

        }
    }
   
    handleGet=(e)=>{
      e.preventDefault();
     this.props.history.push(`/get/${this.state.products.companyId}`);
   }

   handleMore=(e)=>{
    e.preventDefault();
   this.props.history.push(`/savep/${this.state.products.companyId}`);
 }
   handleSell=(e)=>{
    e.preventDefault();
   this.props.history.push(`/sell/${this.state.products.companyId}`);
   
 }
    
     
  

   
 
       
     

    render() {
        return (
          <div>
          
            
              <button type="button" class="btn btn-success"
              onClick={this.handleGet.bind(this)}
            >
              Get Products
            </button>
            <br/>
              <br/>
              <button type="button" class="btn btn-success"
              onClick={this.handleSell.bind(this)}
            >
              Sell Products
            </button>

            <br/>
            <br/>
            <button type="button" class="btn btn-success"
            onClick={this.handleMore.bind(this)}
          >
            Add  Products
          </button>
          </div>
        );
      }           

}