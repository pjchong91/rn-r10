import React, { Component } from "react";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";

// Helper to format GraphQL data into section list data

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
              startTime
              location
              title
              id
            }
          }
        `}
      >
        {({ loading, error, data: { allSessions } }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          let sessions = allSessions
            .reduce((acc, curr) => {
              const timeExists = acc.find(
                section => section.title === curr.startTime
              );
              timeExists
                ? timeExists.data.push(curr)
                : acc.push({
                    title: curr.startTime,
                    data: [curr]
                  });
              return acc;
            }, [])
            .sort((a, b) => a.title - b.title);
          return <Schedule sessions={sessions} />;
        }}
      </Query>
    );
  }
}

// export const formatSessionData = sessions => {
//   return sessions
//     .reduce((acc, curr) => {
//       const timeExists = acc.find(section => section.title === curr.startTime);
//       timeExists
//         ? timeExists.data.push(curr)
//         : acc.push({ title: curr.startTime, data: [curr] });
//       return acc;
//     }, [])
//     .sort((a, b) => a.title - b.title);
// };
