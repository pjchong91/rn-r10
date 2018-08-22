import React, { Component } from "react";
import Session from "./Session";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";
import FavsContext from "./../../context/FavsContext";

// Helper to format GraphQL data into section list data

export default class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };

  render() {
    sessionId = this.props.navigation.getParam("itemId");

    const GET_SESSION_QUERY = gql`
      query($id: ID) {
        Session(id: $id) {
          description
          title
          startTime
          location
          speaker {
            image
            name
          }
        }
      }
    `;

    return (
      <FavsContext.Consumer>
        <Query query={GET_SESSION_QUERY} variables={{ id: sessionId }}>
          {({ loading, error, data }) => {
            if (loading) return <Text>Loading...</Text>;
            if (error) return <Text>Error :(</Text>;

            {
              values => {
                return (
                  <Session
                    session={data}
                    navigation={this.props.navigation}
                    favIds={values.favIds}
                  />
                );
              };
            }
          }}
        </Query>
      </FavsContext.Consumer>
    );
  }
}
