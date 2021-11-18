import Radio from "./Component/Radio";
import Input from "./Component/Input";
import Date from "./Component/Date";
import SubCom1 from "./Component/SubCom1";
import { Container, FlexContainer } from "./Style/StyledComponent";

const input = <Input />;
const date = <Date />;
const subcom1 = <SubCom1 />;

function App() {
  const letter = ["a", "b", "c"];
  return (
    <Container>
      {/* label */}
      <div>
        <p>Name</p>
        <FlexContainer>
          {letter.map((e) => {
            return (
              <div>
                <Radio id="name" name="name" label={`radio ${e}`} />
              </div>
            );
          })}
        </FlexContainer>
      </div>

      {/* Text Input */}
      <div>
        <p>Subcomponents!</p>
        <div>
          <Radio label={input} name="1" />
        </div>

        <Radio label="Representative Form" name="1" />
      </div>

      {/* Date Input */}
      <div>
        <p>Subcomponents!</p>
        <div style={{ display: "flex" }}>
          <Radio label={date} name="helo" />
        </div>

        <Radio label="Representative Form" name="1" />
      </div>

      {/* Other Subcomponent */}
      <div>
        <p>Subcomponents!</p>
        <div style={{ display: "flex" }}>
          <Radio label={subcom1} name="helo" />
        </div>
      </div>
    </Container>
  );
}

export default App;
