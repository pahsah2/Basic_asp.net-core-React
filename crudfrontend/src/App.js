import React from 'react';
import { BrowserRouter , Route , Switch} from 'react-router-dom';
import './App.css';
import home from './components/home';
import productslists from './components/productslists';
import productsinfo from './components/productsinfo';
import productsadd from './components/productsadd';
import productsedit from './components/productsedit';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainMenu />
        <div class="container">
          
          <MainRoute />
        </div>
      </BrowserRouter>
    </div>
  );
}

function MainMenu(){
  return(
    < nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="/">Pahsah</a>
      <button class="navbar-toggler" type="button"
        data-toggle="collapse"
        data-target="#MainMenu"
        aria-controls="MainMenu"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="MainMenu">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/productslists">รายการสินค้าทั้งหมด</a>
            </li>
          </ul>
        </div>
    </nav>
  );
}
function MainRoute(){
  return(
    <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/productslists" component={productslists} />
      <Route exact path="/products/:id" component={productsinfo} />
      <Route exact path="/productsadd" component={productsadd} />
      <Route exact path="/productsedit/:id" component={productsedit} />
    </Switch>
  )
}

export default App;
