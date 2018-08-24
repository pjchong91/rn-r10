import React, { Component } from "react";
import Speaker from "./Speaker";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";
import FavsContext from "./../../context/FavsContext";

// Helper to format GraphQL data into section list data

export default class SpeakerContainer extends Component {
  static navigationOptions = {
    title: "About the Speaker"
  };

  render() {
    speakerId = this.props.navigation.getParam("speakerId");
    console.log(speakerId);

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
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;

          return (
            <Speaker navigation={this.props.navigation} data={data} />
            // <FavsContext.Consumer>
            //   {values => {
            //     return (
            //       <Session
            //         session={data}
            //         navigation={this.props.navigation}
            //         favIds={values}
            //       />
            //     );
            //   }}
            // </FavsContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
