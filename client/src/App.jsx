import { AppContainer } from "./App.styles";
import MainBody from "./components/MainBody/MainBody";
import Navigator from "./components/Navigator/Navigator";

function App() {
  return (
    <AppContainer>
      <Navigator/>
      <MainBody/>
    </AppContainer>
  );
}

export default App;
