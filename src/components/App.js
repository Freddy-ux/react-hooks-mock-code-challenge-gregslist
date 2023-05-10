import React,{useState,useEffect} from "react";
import Header from "./Header";
import Search from "./Search"
import ListingsContainer from "./ListingsContainer";

function App() {
  const[items, setItems]=useState([])
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() =>{
    fetch(" http://localhost:6001/listings",{
      method:"GET",
    })
    .then((response)=>response.json())
    .then((data)=>{
      setItems(data)
      console.log(data)})
  },[])

  const filteredItems = items.filter((item) =>
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="app">
      <Header />
      <Search 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      />
      <ListingsContainer 
      items={filteredItems}
      setItems={setItems}
      />
    </div>
  );
}

export default App;
