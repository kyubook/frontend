import { gql } from '@apollo/client';

export const country = gql `
  query countries {
    countries{
      code
      name
      emoji
    }
  }
`;