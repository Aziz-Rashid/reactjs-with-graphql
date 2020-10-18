import {gql} from '@apollo/client';

export default gql`
query userProfile($id: ID!){
  userProfile(id: $id){
    name
    employeeId
    rankCode {
      name
      id
    }
    fleetCode {
      name
      id
      aircraftCode
    }
    
    clientCode {
      name
      id
      department
      logo{
        file
      }
      messageDa
      messageCrew
      headerRh1
      headerRh2
      headerRh3
      footer
    }
    status
    
    icao{
      name
      iata
      region
      icao
      id
    }
    primaryLicense
    resManager{
      username
      id
      dateJoined
      username
      lastName
    }
    crew
    ground
    phone1
    phone2
    
    photograph {
      id
      file
    }
    joinDate
    permanentAddress    
    crewActive
    aircraft
    crewApproved
    simulator
    optimiser
    emailPersonal
    emailOfficial {
      email
    }    
  
      }
    }
  
`;

// query userProfile($id: ID!){
//   userProfile(id: $id){
//     name
//     employeeId
//     rankCode {
//       name
//       id
//     }
//     fleetCode {
//       name
//       id
//       aircraftCode
//     }
    
//     clientCode {
//       name
//       id
//       department
//       logo{
//         file
//       }
//       messageDa
//       messageCrew
//       headerRh1
//       headerRh2
//       headerRh3
//       footer
//     }
//     status
    
//     icao{
//       name
//       iata
//       region
//       icao
//       id
//     }
//     primaryLicense
//     resManager{
//       username
//       id
//       dateJoined
//       username
//       lastName
//     }
//     crew
//     ground
//     phone1
//     phone2
    
//     photograph {
//       id
//       file
//     }
//     joinDate
//     permanentAddress    
//     crewActive
//     aircraft
//     crewApproved
//     simulator
//     optimiser
//     emailPersonal
//     emailOfficial {
//       email
//     }    
  
//       }
    
//     }