import React, { Suspense, useEffect } from 'react'
import ReactDOM from "react-dom"
import Navigation from "./components/Navigation"
import CustomModal from './components/modal/Modal'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { fields } from "./utils"
import EditPage from './components/invoices/EditPage'

const Customers = React.lazy(() => import("./components/customers/Customers"))
const Products = React.lazy(() => import("./components/products/Products"))
const Invoices = React.lazy(() => import("./components/invoices/Invoices"))
const ProductPage = React.lazy(() => import("./components/products/ProductPage"))
const CustomerPage = React.lazy(() => import("./components/customers/CustomerPage"))
const InvoicePage = React.lazy(() => import("./components/invoices/InvoicePage"))


export default function App() {

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />

        <Route path="/products/create">
          <CustomModal
            title="Create product"
            fields={fields.products}
            postUrl="/api/products"
          />
        </Route>

        <Route path="/customers/create">
          <CustomModal
            title="Create customer"
            fields={fields.customers}
            postUrl="/api/customers"
          />
        </Route>

        <Route path="/invoices/create">
          <CustomModal
            title="Create invoice"
            fields={fields.invoices}
            postUrl="/api/invoices"
          />
        </Route>



        <Switch>

          <Route exact path="/customers/get/:customer_id">
            <CustomerPage />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>

          <Route exact path="/products/get/:product_id">
            <ProductPage />
          </Route>
          <Route path="/products">
            <Products />
          </Route>

          <Route path="/invoices/:invoice_id/edit">
            <EditPage />
          </Route>
          <Route path="/invoices/get/:invoice_id">
            <InvoicePage />
          </Route>
          <Route path="/">
            <Invoices />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));