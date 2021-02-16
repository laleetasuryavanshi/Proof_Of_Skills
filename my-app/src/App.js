import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Switch , Route } from 'react-router-dom'
import DynamicTable from './DynamicTable';
import SearchStudent from './SearchStudent';
import ProductTable from './Comonent/ProductTable';
import GetProduct from './Comonent/GetProduct';
import EditProduct from './Comonent/EditProduct';
import GetInactive from './Comonent/GetInactive';
import SellProducts from './Comonent/SellProducts';
import Sell from './Comonent/Sell';
import SaveMore from './Comonent/SaveMore';
import Sel from './Comonent/Sel';
import FormHeader from './Comonent/FormHeader';

function App() {
  return (
    <div className="App">
    
    <FormHeader></FormHeader>
     <BrowserRouter>
     <Switch>
     
     <Route path='/get/:companyId' component={GetProduct}></Route>
     <Route path='/edit/:companyId/:productId' component={EditProduct}></Route>
     <Route path='/inactive/:companyId' component={GetInactive}></Route>
     <Route path='/sell/:companyId' component={SellProducts}></Route>
     <Route path='/sel/:companyId' component={Sel}></Route>
     <Route path='/sellp/:companyId/:productId' component={Sell}></Route>
     <Route path='/savep/:companyId' component={SaveMore}></Route>
     </Switch>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
