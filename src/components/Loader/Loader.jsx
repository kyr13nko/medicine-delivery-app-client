import { FallingLines } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <FallingLines color="#3470FF" width="100" visible={true} ariaLabel="falling-lines-loading" />
    </Wrapper>
  );
};

export default Loader;
