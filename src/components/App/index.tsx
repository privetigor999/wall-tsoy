import { WrapperLayout } from "../../layout/WrapperLayout/WrapperLayout";
import { Header } from "../Header";
import { Router } from "../Router";

const App = () => {
  return (
    <WrapperLayout>
      <Header />
      <Router />
    </WrapperLayout>
  );
};

export default App;
