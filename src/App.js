import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import {Route, Switch} from 'react-router-dom';
import AboutUs from './components/aboutus';
import ProductList from './components/product-list';
import ProductDetail from './components/product-detail';
import ContactUs from './components/contactus';

// import ParentCom from "./components/parentCom";
// import Counter from "./components/counter";

// import { UserProvider } from "./components/UserContext";
// import UserProfile from "./components/UserProfile";
// import UserProfile1 from "./components/UserProfile1";


function App() {
  const user = {name : 'Monu', loggedIn: true}
  return (
    <div className="App">
      {/* <UserProvider value={user}>
        <UserProfile />
        <UserProfile1 />
      </UserProvider> */}

    {/* <ParentCom/> */}

     

      <Header/>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about-us' component={AboutUs} />
      <Route path="/product-list" component={ProductList} />
      <Route path="/product-detail" component={ProductDetail} />
      <Route path="/contact-us" component={ContactUs} />
      
      </Switch>
      <Footer/>

      {/* <Counter /> */}
    </div>
  );
}

export default App;
