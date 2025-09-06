import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './Styles/theme.css';
import './Styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Heading>
          <Logo></Logo>
        </Heading>
      </Container>

      <Container>
        <Menu />
      </Container>
    </>
  );
}
