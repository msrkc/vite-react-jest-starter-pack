import React from "react";
import { StyledButton } from "@/components/styled";

const Example = () => {
  const [count, setCount] = React.useState(0);

  return (
    <StyledButton onClick={() => setCount(count => count + 1)}>
      {count}
    </StyledButton>
  );
};

export default Example;
