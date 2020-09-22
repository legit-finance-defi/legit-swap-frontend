import React from 'react'
import styled from 'styled-components'
import bull from '../../assets/img/MainPageBull.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={bull} height={120} />}
        title="LegitSwap is ready."
        subtitle="Earn LEGIT tokens by staking Uniswap V2 LP."
      />

      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <Spacer size="lg" />
      <StyledH1>
        <b>LEGIT Vision</b>
      </StyledH1>
      <Spacer size="lg" />
      <StyledInfo>
      After seeing countless projects, which can easily be classified as both social and economic experiments, trying  to lure investors in with different twists on economics set up to ensure a quick return with no future vision which is indicative of short lived so called “Pump and Dump” projects, we at LegitSwap have carefully chosen our metrics and decided for a low initial supply and extremely low emission of new tokens. 
      </StyledInfo>
      <Spacer size="lg" />
      <StyledInfo>
      Although in theory, there is unlimited supply due to never ending emission, our novel economic model aims for a positive balance between supply and demand with a built in mechanism to achieve an attractive rewarding ecosystem for both early and late comers.
      </StyledInfo>
      <Spacer size="lg" />
      <StyledH2>
      <b>The project will start of with 3 initial phases:</b>
      </StyledH2>
      <Spacer size="lg" />
      <StyledInfo>
      <b>1.</b> Initial distribution and Farming
      </StyledInfo>
      <StyledInfo>
      <b>2.</b> Preparations for migration - attracting liquidity and volume
      </StyledInfo>
      <StyledInfo>
      <b>3.</b> LegitSwap launch and migration + governance start
      </StyledInfo>
      <Spacer size="lg" />
      <StyledInfo>
      <b>Initial promotion</b> - x days of initial promotion to get the word around
      </StyledInfo>
      <StyledInfo>
<b>Whitelisting contests</b> - 40 whitelists through community contests¸
      </StyledInfo>
      <StyledInfo>
<b>P1 Bounce/Zoom/Smart contract sale</b> - 5000 LEGIT/20ETH - 0.5ETHp.p -250 LEGIT=1ETH
      </StyledInfo>
      <Spacer size="lg" />
      <StyledH2>
        <b>Token economics</b>
      </StyledH2>
      <Spacer size="lg" />
      <StyledInfo>
      <b>10300</b> LEGIT pre-mint at the LEGIT smart contract deployment to provide initial liquidity on uniswap
</StyledInfo>
      <StyledInfo>
      An initial base LEGIT per day mining reward across all pools(0.01 LEGIT/block)
</StyledInfo>
      <StyledInfo>
      First day 1x, second 2x, third 3x, fourth 4x, fifth 5x, sixth 4x, seventh, 3x eighth, 2x multiplier respectively
</StyledInfo>
      <StyledInfo>
      <b>P1 - Initial 5%</b> transaction fee, 2.5% burned, 2.5% to LEGIT staking pool pre migration
</StyledInfo>
      <StyledInfo>
<b>P3 - Drop to 2%</b> fee after migration, retaining the same 50/50 burn/staking pool ratio!
      </StyledInfo>
      <Spacer size="lg" />
      <StyledH2>
        <b>LEGIT and LegitSwap novel economic model</b>
      </StyledH2>
<Spacer size="lg" />
<StyledInfo>
<b>Stakable</b> - Stake LEGIT to earn part of the fee’s from Legit ecosystem and governance weight
</StyledInfo>
<StyledInfo>
<b>Governance token</b> - LEGIT will be used as governance token once governance goes live in P3
</StyledInfo>
<StyledInfo>
<b>Fee sharing model</b> - LegitSwap fees are shared amongst Liquidity providers, traders and LEGIT stakers
</StyledInfo>
<StyledInfo>
<b>Deflationary</b> - although in theory unlimited supply/emission exists, besides the emissions rate being very low, the token has a deflationary mechanism
</StyledInfo>
<StyledInfo>
<b>Constant market demand</b> - our novel economic model creates a constant demand of LEGIT on the markets by utilizing part of LegitSwap fees for buyback of LEGIT
</StyledInfo>
<Spacer size="lg" />
      <StyledInfo>
      There will be no, aka 0%! transfer to the dev on every mint!
</StyledInfo>
      <StyledInfo>
      There will be no, aka 0%! transfer to the dev on every burn!
</StyledInfo>
      <StyledInfo>
      There will be no, aka 0%! transfer to the dev on every reward claim!
</StyledInfo>
<Spacer size="lg" />
      <StyledInfo>
      <b>Liquidity locked  - forever - devs don’t ever get access to initially locked liquidity</b>
</StyledInfo>
      <StyledInfo>
      There will only be a 3% dev fund (2% used for deployments and future development, read below)   
</StyledInfo>
      <StyledInfo>
      - 2% locked until P2 sale (used for further pool deployment and Legit Swap deployment)                               
</StyledInfo>
      <StyledInfo>
      - 1% locked until P3- LegitSwap launch and migration  
</StyledInfo>
<Spacer size="lg" />
<Spacer size="lg" />




                                                                                                                 

    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
  max-width: 775px;
`

const StyledH1 = styled.h1`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 32px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
  max-width: 775px;
`

const StyledH2 = styled.h1`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
  max-width: 775px;
`

export default Home
