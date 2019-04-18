import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from "react-native";

export default class SearchResults extends Component {
    renderBook({item, index}) {
        return(
            <View style={styles.bookEntry}
                key={index}
            >
                <Text
                    style={styles.bookIndex}
                >
                    {index}
                </Text>

                <Text styles={styles.bookTitle}

                >
                    {item.volumeInfo.title}
                </Text>
            </View>
        );
    }

    handleScroll = () => {
        this.props.fetchBooks();
    };

    render() {
        if(this.props.books && this.props.books.length) {
            return (
                <View style={styles.searchResults}>

                    <FlatList
                        contentContainerStyle={{ flexGrow: 1 }}
                        data={this.props.books}
                        renderItem={this.renderBook}
                        onEndReached={this.handleScroll}
                    />

                </View>
            );
        }

        return (
            <View style={styles.searchResults}></View>
        );
    }
}

const styles = StyleSheet.create({
    searchResults: {
        flex: 6,
        width: "100%",
        height: "60%",
        paddingLeft: 15,
        paddingRight: 15
    },
    bookEntry: {
        flex: 1,
        flexDirection: "row",
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        borderStyle: "solid"
    },
    bookIndex: {
        fontSize: 15,
        width: "10%"
    },
    bookTitle: {
        fontSize: 25,
        width: "90%"
    }
});