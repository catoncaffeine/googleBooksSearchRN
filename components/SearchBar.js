import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from "react-native"

export default class SearchBar extends Component {
    render() {
        return(
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchInput}
                    type="text"
                    placeholder="Enter keyword for books"
                    onChangeText={this.props.handleKeywordChange}
                />
                <TouchableOpacity
                    style={styles.searchButton}
                    onPress={this.props.searchAction}
                >
                    <Text
                        style={styles.searchButtonText}
                    >
                        Search
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchBar: {
        flex: 1,
        flexDirection: "row",
        margin: 15
    },
    searchInput: {
        flex: 4,
        borderColor: "grey",
        borderWidth: 1,
        paddingLeft: 5,
        fontSize: 20
    },
    searchButton: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "grey",
        marginLeft: 5,
    },
    searchButtonText: {
        textAlign: "center",
        fontSize: 20
    }
});