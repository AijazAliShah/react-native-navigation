import React from "react";
import { Button, Text, View } from "react-native";

export default class DetailsScreen extends React.Component {
  render() {

    const { navigation } = this.props;
    const id = navigation.getParam('id', 'NO-ID');
    const name = navigation.getParam('name', 'unknown');

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>Id: {JSON.stringify(id)}</Text>
        <Text>Name: {JSON.stringify(name)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push("Details",{
            id: Math.floor(Math.random() * 100),
          })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
