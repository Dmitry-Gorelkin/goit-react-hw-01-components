import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'style';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Section } from './Section/Section';
import { Container } from './Container/Container';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Section>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Section>
        <Section>
          <Statistics title="Upload stats" stats={data} />
        </Section>
        <Section>
          <FriendList friends={friends} />
        </Section>
        <Section>
          <TransactionHistory items={transactions} />
        </Section>
      </Container>
    </ThemeProvider>
  );
};
