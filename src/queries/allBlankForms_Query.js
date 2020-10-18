import {gql} from '@apollo/client';

export default gql`
query forms {
  allForm {
    edges {
      node {
        name
        formType
        active
        clientCode{
          id
        }
        aircraftCode{
          aircraftCode
        }
        
        link{          
          amiagiFormRelatedLink{
            edges{
              node{
                name
                link{
                  file
                  
                }
              }
            }
          }
        }
      }
    }
  }
}
  `;
