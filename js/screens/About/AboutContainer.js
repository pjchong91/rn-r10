import React, { Component } from "react";
import About from "./About";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

export default class AboutContainer extends Component {
  static navigationOptions = {
    title: "About"
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              title
              description
              id
            }
          }
        `}
      >
        {({ loading, error, data: { allConducts } }) => {
          if (loading) return <LoadingIndicator />;
          if (error) return <Text>Error :(</Text>;

          return <About conducts={allConducts} />;
        }}
      </Query>
    );
  }
}
