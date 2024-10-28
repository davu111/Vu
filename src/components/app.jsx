import React from 'react';
import { Route} from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui'; 
import { RecoilRoot } from 'recoil';

import ShoppingCart from '../pages/shopping-cart';
import About from '../pages/about';
import Form from '../pages/form';
import User from '../pages/user';
import BuyInCart from '../pages/buy-in-cart';
//import Simple from '../pages/simple';

const MyApp = () => {
  //const [activeKey, setActiveKey] = useState('home'); // Trạng thái quản lý tab active

  // Hàm xử lý khi tab thay đổi
  //const handleTabChange = (key) => {
  //  setActiveKey(key);
  //};

  return (
    <RecoilRoot>
      <App >
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/shopping-cart" element={<ShoppingCart></ShoppingCart>}></Route>
            <Route path="/about" element={<About></About>}></Route>
          <Route path="/form" element={<Form></Form>}></Route>
          <Route path="/user" element={<User></User>}></Route>
          {/* <Route path="/buy-in-cart" element={<BuyInCart></BuyInCart>}></Route> */}
      {/*<Route path="/simple" element={<Simple></Simple>}></Route>*/}
          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
}
/******  dce58226-9a93-4f4a-84b2-4a771f186082  *******/
export default MyApp;