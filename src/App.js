import React, {useState, useEffect} from 'react';  
import './App.css';

const App = () => {

 // https://fakestoreapi.com/products

 // async() 
 // awiat()

 const [store, setStore] = useState([]);

 console.log(store);

   useEffect(() => {

    ecommerceStore();

   }, []) // when my website is loaded that time some data should be displayed
          // even if i perform another actions i dont want it to load this entire product only once it should laoded and it should be stop.

const ecommerceStore = async() => {

     const response = await fetch("https://fakestoreapi.com/products");
    // console.log(response);
     const jasonData = await response.json(); // convert jason data to js object
    // console.log(jasonData);
     
    setStore(jasonData);  // i have to update this data, to update the data we need to set setStore
}


//ecommerceStore();

  return(
     <>
       <h2>Ecommerce Store</h2>
       <div className="container">
        {store.map((values)=>{
            return(
              <>
              <div className="box">
                  <div className="content">
                     <h5>{values.title}</h5>
                     <p>{values.description}</p>
                  </div>
                     <img src={values.image} alt=""/>
              </div>
              </>
            )
        })}
       </div>
     </>

  )
}

export default App;