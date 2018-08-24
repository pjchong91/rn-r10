import React, { Component } from "react";
import Speaker from "./Speaker";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";
import PageLoader from "./../../components/PageLoader";
// Helper to format GraphQL data into section list data

export default class SpeakerContainer extends Component {
  static navigationOptions = {
    title: "About the Speaker"
  };

  render() {
    speakerId = this.props.navigation.getParam("speakerId");

    const GET_SPEAKER_QUERY = gql`
      query($id: ID) {
        Speaker(id: $id) {
          url
          bio
          image
          name
        }
      }
    `;

    return (
      <Query query={GET_SPEAKER_QUERY} variables={{ id: speakerId }}>
        {({ loading, error, data }) => {
          if (loading) return <PageLoader />;
          if (error) return <Text>Error :(</Text>;

          return <Speaker navigation={this.props.navigation} data={data} />;
        }}
      </Query>
    );
  }
}
