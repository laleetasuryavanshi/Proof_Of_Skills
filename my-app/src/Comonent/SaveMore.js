import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Icon from "react-crud-icons";
import "F:/vscode/Proof of Skills(Bench)/my-app/node_modules/react-crud-icons/dist/css/react-crud-icons.css";


export default class SaveMore extends React.Component {
    constructor(props) {
      
        super(props);
        
        this.state = {
            companyId:this.props.match.params.companyId,
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
                }
           

        }
    }
   
   
    handleClick() {
        console.log(Date.now);
      var productId=this.state.productId;
      var productName=this.state.productName;
      var productInfo=this.state.productInfo;
      var price=this.state.price;
      var quantity=this.state.quantity;
      
      productId.push(this.state.messagei);
      productName.push(this.state.messagen);
      productInfo.push(this.state.messagein);
      price.push(this.state.messagep);
      quantity.push(this.state.messageq);
      //progress.push(this.state.messagep);
  
      this.setState({
          messagei: "",
          messagen: "",
          messagein: "",
          messagep: "",
          messageq: "",
       
        productId: productId,
        productName: productName,
        productInfo:productInfo,
        price:price,
        quantity:quantity,
        
      });
      
    }

    handleInsert(){
  var pfinal=[];
 
      for(var i=0;i<this.state.price.length;i++){
     
    this.state.products.pdesc=
    
      
              {
                  productName: this.state.productName[i],
                  productId: this.state.productId[i],
                  price: this.state.price[i],
                  productInfo:this.state.productInfo[i],
                  quantity:this.state.quantity[i],
                  status:"Active"
              }
          
      pfinal.push(this.state.products.pdesc);
    
              //console.log(this.state.products.pdesc);
 
      }
      this.state.products={
        "companyId": this.state.companyId,
        "pdesc": pfinal
      }
      console.log(this.state.products);
      const URI = 'http://localhost:8080/product/savep/' + '/'+this.state.companyId ;
axios.post(URI,this.state.products).then((response) => {
  
  alert("saved succesfully");
  this.props.history.push(`/get/${this.state.companyId}`);
})
     
  }
  handleItemChangedI(i,event) {
    
    var productId = this.state.productId;
        productId[i]  = event;
    
        this.setState({
          productId : productId
        });
  }
    renderRowsI() {
        var context = this;
        
       
    
       return  this.state.productId.map(function(o, i) {
         console.log(o);
                  return (
                    <tr >
                    <td>
                   
                          <input
                            type="text"
                            value={Math.floor(Math.random() * 100)}
                            onChange={context.handleItemChangedI.bind(Math.floor(Math.random() * 100),i)}
                          />
                      </td>
                      </tr>
                 );
               });
      }



      handleItemDeleted(i) {
        var productName = this.state.productName;
         var productId = this.state.productId;
         var productInfo = this.state.productInfo;
         var price = this.state.price;
         var quantity=this.state.quantity;
        productName.splice(i,1);
        productId.splice(i,1);
        productInfo.splice(i,1);
        price.splice(i, 1);
        quantity.splice(i,1);
    
        this.setState({
          productName :productName,
          productId :productId,
           productInfo :productInfo,
           price : price,
           quantity:quantity
        });
      }


      handleItemChangedI(i, event) {
        var productId = this.state.productId;
        productId[i]  = event.target.value;
    
        this.setState({
          productId : productId
        });
      }
      
      renderRowsI() {
          var context = this;
          
      
          return  this.state.productId.map(function(o, i) {
                    return (
                      <tr >
                      <td>
                  
                          <input
                            type="text"
                            value={Math.floor(Math.random() * 100)}
                            onMouseOver={context.handleItemChangedI.bind(context, i)}
                          />
                        </td>
                        </tr>
                    );
                  });
        }






      handleItemChangedN(i, event) {
        var productName = this.state.productName;
        productName[i]  = event.target.value;
    
        this.setState({
          productName : productName
        });
      }
      
      renderRowsN() {
          var context = this;
          
      
          return  this.state.productName.map(function(o, i) {
                    return (
                      <tr >
                      <td>
                  
                          <input
                            type="text"
                            value={o}
                            onChange={context.handleItemChangedN.bind(context, i)}
                          />
                        </td>
                        </tr>
                    );
                  });
        }

        handleItemChangedIn(i, event) {
          var productInfo = this.state.productInfo;
          productInfo[i]  = event.target.value;
      
          this.setState({
            productInfo : productInfo
          });
        }
       
        renderRowsIn() {
            var context = this;
            
        
            return  this.state.productInfo.map(function(o, i) {
                      return (
                        <tr >
                        <td>
                    
                            <input
                              type="text"
                              value={o}
                              onChange={context.handleItemChangedIn.bind(context, i)}
                            />
                          </td>
                          </tr>
                      );
                    });
          }

          handleItemChangedP(i, event) {
            var price = this.state.price;
            price[i]  = event.target.value;
        
            this.setState({
              price : price
            });
          }
         
          renderRowsP() {
              var context = this;
              
          
              return  this.state.price.map(function(o, i) {
                        return (
                          <tr >
                          <td>
                      
                              <input
                                type="text"
                                value={o}
                                onChange={context.handleItemChangedP.bind(context, i)}
                              />
                            </td>
                            
                            </tr>
                        );
                      });
            }

            handleItemChangedQ(i, event) {
              var quantity = this.state.quantity;
              quantity[i]  = event.target.value;
          
              this.setState({
                quantity : quantity
              });
            }
           
            renderRowsQ() {
                var context = this;
                
            
                return  this.state.quantity.map(function(o, i) {
                          return (
                            <tr >
                            <td>
                        
                                <input
                                  type="text"
                                  value={o}
                                  onChange={context.handleItemChangedQ.bind(context, i)}
                                />
                              </td>
                              <td>
                              <Icon name="delete"
                              size = "medium"
                              tooltip = "Delete"
                             theme = "light"
                              size = "medium"
                              onClick={context.handleItemDeleted.bind(context)}
                           / >
                     
                      </td>
                              </tr>
                          );
                        });
              }
     

    render() {
        return (
          <div>
          <br/>
          <br/>
          <br/>
          <br/>
            <table class="table table-striped table-bordered table-hover">
              <thead class="thead-dark">
                <tr>
                <th>ID</th>
                  <th>PRODUCT NAME</th>
                  <th>INFO</th>
                  <th>PRICE</th>
                  <th>Quantity</th>
                  
                  </tr>
               </thead>
              <tbody>
              <tr scope="row">
                <td>{this.renderRowsI()}</td>
                <td>{this.renderRowsN()}</td>
                <td>{this.renderRowsIn()}</td>
                <td>{this.renderRowsP()}</td>
                <td>{this.renderRowsQ()}</td>
               
                
               
                </tr>
              
                <td>
                <Icon name="add"
                size = "medium"
                tooltip = "Add"
               theme = "light"
                size = "medium"
                onClick={this.handleClick.bind(this)}
             / >
                
              <br/>
              
             </td>
              </tbody>
            </table>
            <button type="button" class="btn btn-info"
            onClick={this.handleInsert.bind(this)}
          >
            Save
          </button>
           
            
          </div>
        );
      }           

}