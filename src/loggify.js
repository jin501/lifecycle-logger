import React, {Component} from 'react';
import styled from 'styled-components';

export defualt loggify(Wrapped) {

  return class extends Component {
    render() {
      return (
        <LoggerContainer>
          <H2>
            {Wrapped.displayName} is now loggified
          </H2>
          <Wrapped
            {...this.props}
          />
        </LoggerContainer>

      )
    }
  }
}


const LoggerContainer = styled.div`
  background-color: aliceblue;
  border: 2x grooved aquamarine;
  border-radius: 5px;
`
LoggerContainer.displayName = "LoggerContainer"

const H2 = styled.h2 `
  color: blueviolet;
`

H2.displayName = "H2"
