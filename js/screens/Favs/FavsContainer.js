import React, { Component } from "react";
import Favs from "./Favs";
import FavsContext from "./../../context/FavsContext";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";

export default class FavsContainer extends Component {
  static navigationOptions = {
    title: "Favs"
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
          // Helper to format GraphQL data into section list data

          let sessions = allSessions;
          // .reduce((acc, curr) => {
          //   const timeExists = acc.find(
          //     section => section.title === curr.startTime
          //   );
          //   timeExists
          //     ? timeExists.data.push(curr)
          //     : acc.push({
          //         title: curr.startTime,
          //         data: [curr]
          //       });
          //   return acc;
          // }, [])
          // .sort((a, b) => a.title - b.title);
          return (
            <FavsContext.Consumer>
              {values => {
                console.log(values, "values");
                const favIdArr = [];
                // values.favIds.map(item => favIdArr.push(item.id));
                values.favIds.map(item => console.log(item.id, "itemid"));
                console.log(favIdArr, "favArr");
                console.log(sessions, "sessions");

                const favedSessions = allSessions.filter(session =>
                  favIdArr.includes(session.id)
                );
                //TODO: INCLUDES THE ID?? THEN PUSH...

                favedSessions
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

                return (
                  <Favs
                    navigation={this.props.navigation}
                    favIds={values}
                    sessions={favedSessions}
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
