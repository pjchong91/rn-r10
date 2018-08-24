import React, { Component } from "react";
import Speaker from "./Speaker";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";
import FavsContext from "./../../context/FavsContext";

// Helper to format GraphQL data into section list data

export default class SpeakerContainer extends Component {
  //   static navigationOptions = {
  //     title: "Session"
  //   };

  render() {
    speakerId = this.props.navigation.getParam("speakerId");

    // const GET_SPEAKER_QUERY = gql`
    //   query($id: ID) {
    //     Session(id: $id) {
    //       description
    //       title
    //       startTime
    //       location
    //       speaker {
    //         image
    //         name
    //       }
    //       id
    //     }
    //   }
    // `;

    return (
      //
      //   <Query query={GET_SESSION_QUERY} variables={{ id: sessionId }}>
      //     {({ loading, error, data }) => {
      //       if (loading) return <Text>Loading...</Text>;
      //       if (error) return <Text>Error :(</Text>;

      //   return (
      <Speaker navigation={this.props.navigation} sessionId={sessionId} />
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
      //   );
      // }}
      //   </Query>
    );
  }
}
