import React from "react";
import { Text, View } from "react-native";

import { Query } from "react-apollo";
import gql from "graphql-tag";

const About = () => {
  return (
    <View>
      <Query
        query={gql`
          {
            allConducts {
              title
              description
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;

          return data.allConducts.map(({ title, description }) => (
            <View>
              <Text>{`${title}`}</Text>
              <Text>{` ${description}`}</Text>
            </View>
          ));
        }}
      </Query>
      <Text>This is the About Page</Text>
    </View>
  );
};

export default About;
