// Externals
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { useContext } from '../contexts';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProposalType = styled.div`
  width: 20%;
  min-width: 100px;
  height: 100px;
  box-shadow: 0px 1px 18px 11px rgba(169, 209, 255, 0.75);
  margin: 5%;
  padding: 10px;
  cursor: pointer;
`;

export const NewProposalTypePage = observer(() => {

  const {
    context: {
      configStore,
    },
  } = useContext();

  useEffect(() => {
    configStore.getProposalTypes();
  }, []);

  return (
    <Wrapper>
      <ProposalType>Contributor proposal</ProposalType>
      <ProposalType>Swapr</ProposalType>
      <ProposalType>Custom</ProposalType>
      <ProposalType>Custom</ProposalType>
      <ProposalType>Custom</ProposalType>
      <ProposalType>Custom</ProposalType>
    </Wrapper>
  );
};