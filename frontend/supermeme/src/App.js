import './App.css';
import { CredentialType, IDKitWidget, ISuccessResult } from "@worldcoin/idkit";
import Worldid from './components/World/Worldid';
//require('dotenv');

function App() {

 
    const onSuccess = (result) => {
      console.log("onSuccess", result);
      

    };
  
  

  function handleProof () {

  }

  return (
    <IDKitWidget
      action="hello"
      onSuccess={onSuccess}
      handleVerify={handleProof}
      app_id="app_staging_00f03680f51ad2a5ab9345c81184396f"
      credential_types={[CredentialType.Orb, CredentialType.Phone]}
      enableTelemetry
    >
    {({ open }) => <button onClick={open}>Verify with World ID</button>}
    </IDKitWidget>
  );
}

export default App;
