import {gql} from '@apollo/client';

export default gql`
query allQualificationList {
    allQualificationList {
    edges {
      node {
        name
        kind
        subCategory
        category
        caption1
        caption2
        caption3
        validity
        clientCode{
          id
          name          
        }
        qualificationListActive
      }
    }
  }
}
`;
