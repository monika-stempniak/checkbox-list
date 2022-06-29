import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { THEME } from '../../utils/theme';

export const StyledItem = styled.li`
  padding: 10px;
`;

export const LinkItem = styled(Link)`
  color: '#000';

  &:hover {
    color: ${THEME.main};
  }
`;
