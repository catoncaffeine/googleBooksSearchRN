/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Logo from "./components/Logo";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      keyword: "",
      fetchingBooks: false,
      bookFetchSuccess: false,
      bookFetchError: false,
    };
    this.searchAction = this.searchAction.bind(this);
    this.fetchBooks = this.fetchBooks.bind(this);
  }

  handleKeywordChange = (value) => {
    this.setState({
      keyword: value
    });
  };

  clearBooks() {
    this.setState({
      books: []
    });
  }

  searchAction() {
    this.clearBooks();
    this.fetchBooks();
  }

  async fetchBooks() {
    if (!this.state.fetchingBooks) {
      const query = `q=${this.state.keyword}`;
      const key = `key=AIzaSyD0RewGs-7f9r5G-pkg7NWnNJ2QnPe6Gqk`;
      const startingIndex = `startingIndex=${this.state.books.length}`;
      const maxResults = `maxResults=${40}`;
      const url = `https://www.googleapis.com/books/v1/volumes?${query}&${key}&${startingIndex}&${maxResults}`;

      this.setState({
        fetchingBooks: true,
        bookFetchSuccess: false,
        bookFetchError: false
      });

      fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.setState({
              books: [...this.state.books, ...data.items],
              fetchingBooks: false,
              bookFetchSuccess: true,
              bookFetchError: false
            });
          }).catch((error) => {
        console.log(error);
        this.setState({
          fetchingBooks: false,
          bookFetchSuccess: false,
          bookFetchError: true
        });
      });
    }
  };

  render() {
    return (
        <SafeAreaView style={styles.searchApp}>
          <Logo loading={this.state.fetchingBooks} />
          <SearchBar
              keyword={this.state.keyword}
              handleKeywordChange={this.handleKeywordChange}
              searchAction={this.searchAction}
          />
          <SearchResults
              books={this.state.books}
              fetchBooks={this.fetchBooks}
          />
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  searchApp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
