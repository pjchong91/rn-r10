import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styles";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Schedule = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require("./../../assets/r10_logo.png")}
          style={styles.logo}
        />
        <View style={styles.divider} />
        <Text style={styles.bodyText}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>

        <Text style={styles.headerText}>Date & Venue </Text>

        <Text style={styles.bodyText}>
          The R10 conference will take place on September 18, 2018 in Vancouver,
          BC.
        </Text>

        <Text style={styles.headerText}>Code of Conduct</Text>

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

            return data.allConducts.map(({ title, description, id }) => (
              //TODO: RESOLVE ISSUE OF KEYS

              <View keyExtractor={{ id }}>
                <Text style={styles.codeHeader}>{`${title}`}</Text>
                <Text style={styles.codeText}>{` ${description}`}</Text>
              </View>
            ));
          }}
        </Query>
        <View style={styles.divider} />
        <Text style={styles.bodyText}>© RED Academy 2018</Text>
      </ScrollView>
    </View>
  );
};

export default Schedule;
