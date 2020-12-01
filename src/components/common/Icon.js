import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.img`
    width: 40px;
    height: 40px;
`;

const Icon = name => <StyledIcon src={ name } />;

export default Icon;