import Radio from "./Component/Radio";
import Input from "./Component/Input";
import Date from "./Component/Date";
import { Container, FlexContainer } from "./Style/StyledComponent";

const input = <Input />;
const date = <Date />;

function App() {
  return (
    <Container>
      <div>
        <p>Name</p>
        <FlexContainer>
          <Radio id="name" name="name" label="Radio A" />
          <Radio id="name" name="name" label="Radio B" />
          <Radio id="name" name="name" label="Radio C" />
        </FlexContainer>
      </div>

      <div>
        <p>Subcomponents!</p>
        <Radio label={input} name="1" />
        <Radio label="Representative Form" name="1" />
      </div>

      <div>
        <p>Subcomponents!</p>
        <div style={{ display: "flex" }}>
          <Radio label={date} name="helo" />
        </div>

        <Radio label="Representative Form" name="1" />
      </div>
    </Container>
  );
}

export default App;
