import App, { Container, NextAppContext } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
import { NextComponentType } from 'next';
import { ApolloClient } from 'apollo-boost';
import { DefaultQuery } from 'next/router';

interface PageProps {
  query?: DefaultQuery
}

interface MyAppProps {
  Component: NextComponentType,
  apollo: ApolloClient,
  pageProps: unknown
}

class MyApp extends App<MyAppProps> {
  static async getInitialProps(appContext: NextAppContext) {
    let pageProps: PageProps = {};
    if (appContext.Component.getInitialProps) {
      pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }
    // this exposes the query to the user
    pageProps.query = appContext.ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
