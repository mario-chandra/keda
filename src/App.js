import Radio from "./Component/Radio";
import Input from "./Component/Input";
import Date from "./Component/Date";
import SubCom1 from "./Component/SubCom1";
import { Container, FlexContainer } from "./Style/StyledComponent";

const input = <Input />;
const date = <Date />;
const subcom1 = <SubCom1 />;
const letter = ["a", "b", "c"];

function App() {
  return (
    <Container>
      {/* label */}
      <div>
        <p>Name</p>
        <FlexContainer>
          {letter.map((e) => {
            return <Radio key={e} id={e} name="name" label={`radio ${e}`} />;
          })}
        </FlexContainer>
      </div>

      {/* Text Input */}
      <div>
        <p>Subcomponents!</p>
        <Radio label={input} name="1" />
        <Radio label="Representative Form" name="1" />
      </div>

      {/* Date Input */}
      
        <p>Subcomponents!</p>
        <Radio label={date} name="helo" />
        <Radio label="Representative Form" name="helo" />
      

      {/* Other Subcomponent */}
      <div>
        <p>Subcomponents!</p>
        <Radio label={subcom1} name="helo" />
      </div>
    </Container>
  );
}

export default App;
