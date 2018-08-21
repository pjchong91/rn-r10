import React, { Component } from "react";
import About from "./About";
import { Query } from "react-apollo";
import gql from "graphql-tag";
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
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;

          return <About conducts={allConducts} />;
          //TODO: RESOLVE ISSUE OF KEYS
        }}
      </Query>
    );
  }
}
