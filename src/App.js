import Input from "./Component/Input";
import { Container } from "./Style/StyledComponent";
import Radio from "./Component/Radio";
import Label from "./Component/Label";
import Date from "./Component/Date";




function App() {
  
  return (
    <Container>
      <h3>Name</h3>
      <Label/>
      
      
      
      <Input id="1" name="1" />
      

      <Date id="2" name="1"/>
      
      
    </Container>
  );
}

export default App;
