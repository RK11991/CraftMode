import './App.css';
import { CredentialType, IDKitWidget, ISuccessResult } from "@worldcoin/idkit";
import Worldid from './components/World/Worldid';
//require('dotenv');

function App() {

  function onSuccess () {

  }

  function handleProof () {

  }

  return (
    <IDKitWidget
      action=""
      onSuccess={onSuccess}
      handleVerify={handleProof}
      app_id={process.env.REACT_APP_appID}
      credential_types={[CredentialType.Orb, CredentialType.Phone]}
    >
    {({ open }) => <button onClick={open}>Verify with World ID</button>}
    </IDKitWidget>
  );
}

export default App;
