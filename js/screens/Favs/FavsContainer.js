import React, { Component } from "react";
import Favs from "./Favs";
import FavsContext from "./../../context/FavsContext";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";
import PageLoader from "./../../components/PageLoader";

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
          if (loading) return <PageLoader />;
          if (error) return <Text>Error :(</Text>;
          // Helper to format GraphQL data into section list data

          let sessions = allSessions;

          return (
            <FavsContext.Consumer>
              {values => {
                const favIdArr = [];
                values.favIds.map(item => favIdArr.push(item.id));

                const favedSessions = allSessions.filter(session =>
                  favIdArr.includes(session.id)
                );
                console.log(favIdArr);
                let sessions = favedSessions
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
                    favIds={favIdArr}
                    sessions={sessions}
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
