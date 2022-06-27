import './App.css';
import Header from './components/Header';
import axios from 'axios'
import { useEffect, useState } from 'react';
import PunkList from './components/PunkList';
import Main from './components/Main';


function App() {

  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x387d51b9f82738eAA8cEcfBc414f1bcC6E1fb8F8&order_direction=asc');

        // copy the adress of the third web collection aka the project 

        console.log(response.data.assets)
        setPunkListData(response.data.assets)

      }
      fetchData();
    }
    catch (error) {
      throw new Error(error)

    }
  }, [])

  return (
    <div className="app">
      <Header />
      {
        punkListData.length > 0 && (
          <>
            <Main punkListData={punkListData} selectedPunk={selectedPunk} />
            <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>

        )
      }

    </div>
  );
}

export default App;
