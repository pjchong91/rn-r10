import React, { Component } from "react";
import Speaker from "./Speaker";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text, View } from "react-native";
import LoadingIndicator from "./../../components/LoadingIndicator/LoadingIndicator";
// Helper to format GraphQL data into section list data

export default class SpeakerContainer extends Component {
  static navigationOptions = {
    title: "About the Speaker"
    /* Your custom header */
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
          if (loading) return <LoadingIndicator />;
          if (error) return <Text>Error :(</Text>;

          return (
            <Speaker navigation={this.props.navigation} data={data.Speaker} />
          );
        }}
      </Query>
    );
  }
}
