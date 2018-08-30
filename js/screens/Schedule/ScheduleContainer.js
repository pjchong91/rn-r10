import React, { Component } from "react";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";
import FavsContext from "./../../context/FavsContext";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import formatter from "./../../lib/dataFormatting.js";

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
              description
            }
          }
        `}
      >
        {({ loading, error, data: { allSessions } }) => {
          if (loading) return <LoadingIndicator />;
          if (error) return <Text>Error :(</Text>;
          // Helper to format GraphQL data into section list data

          let sessions = formatter(allSessions);

          return (
            <FavsContext.Consumer>
              {values => {
                const favIdArr = [];
                values.favIds.map(item => favIdArr.push(item.id));
                return (
                  <Schedule
                    navigation={this.props.navigation}
                    sessions={sessions}
                    favIds={favIdArr}
                  />
                );
              }}
            </FavsContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
