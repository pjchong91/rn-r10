import React, { Component } from "react";
import Session from "./Session";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";
import FavsContext from "./../../context/FavsContext";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

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
            id
          }
          id
        }
      }
    `;

    return (
      <Query query={GET_SESSION_QUERY} variables={{ id: sessionId }}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingIndicator />;
          if (error) return <Text>Error :(</Text>;

          return (
            <FavsContext.Consumer>
              {values => {
                return (
                  <Session
                    session={data.Session}
                    navigation={this.props.navigation}
                    favIds={values}
                    sessionId={sessionId}
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
