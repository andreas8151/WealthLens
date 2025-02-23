import React from "react";
import { ScrollView } from "react-native";
import MainContainer from "../components/ui/mainContainer/MainContainer";
import Card from "../components/ui/card/Card";
import Banner from "../components/ui/banner/Banner";

const PortfolioScreen: React.FC = () => {
  return (
    <MainContainer>
      <Banner title="Portfolio" backgroundColor="#1e88e5" />
      <ScrollView>
        <Card
          title="Stock Performance"
          content="Apple Inc. (AAPL)"
          value={+5.2}
        />
        <Card title="Crypto Market" content="Bitcoin (BTC)" value={-3.7} />
        <Card
          title="Investment Growth"
          content="Your total portfolio"
          value={+12.8}
        />
      </ScrollView>
    </MainContainer>
  );
};

export default PortfolioScreen;
