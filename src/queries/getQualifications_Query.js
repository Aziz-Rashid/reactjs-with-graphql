import {gql} from '@apollo/client';

export default gql`
query allQualificationList {
  allQualificationRecord {
    edges {
      node {
        id
        kind
        validated
        dateValid
        docNumber
        qualificationRecordsActive
        qCode{
          id
          name
          createdAt
        }
        data1
        qualification{
          id
          uploader{
            id
            username
          }
        }
        docNumber
        category
        subCategory
        qualificationRecordsActive
      }
    }
  }
}
`;
