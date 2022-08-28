import React from "react";

import { Text } from "react-native";
import HighlightCard from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList

} from "./styles";

export interface DataListProps extends TransactionCardProps{
  id:string;
}

export function Dashboard() {
  const data: DataListProps[] = [{
    id:1,
    type: 'positive',
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: "Vendas",
      icon: "dollar-sign"
    },
    date: "13/08/2022"
  },
  {
    id:2,
    type: 'negative',
    title: "Hamburgueria Pizzy",
    amount: "R$ 59,00",
    category: {
      name: "Alimentação",
      icon: "coffee"
    },
    date: "13/08/2022"
  },
  {
    id:3,
    type: 'negative',
    title: "Aluguel do Apartamento",
    amount: "R$ 1.700,00",
    category: {
      name: "Casa",
      icon: "home"
    },
    date: "10/08/2022"
  }

];
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/15971151?s=400&u=80e91346059acf30bae1c47575a4e4eba55efca4&v=4",
              }}
            />
            <User>
              <UserGreeting>Olá</UserGreeting>
              <UserName>Alexandre</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type='up'
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Ultima entrada dia 13 de Agosto"
        />

        <HighlightCard
          type='down'
          title="Saidas"
          amount="R$ 1.259,00"
          lastTransaction="Ultima saída dia 22 de Agosto"
        />

        <HighlightCard
          type='total'
          title="Total"
          
          amount="R$ 16.141,00"
          lastTransaction="01 à 22 de Agosto"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} 
          
          />
        
        }
        
        />
        
      </Transactions>
    </Container>
  );
}
