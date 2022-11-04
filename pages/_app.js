//initializedOnMount=false means we are not using moralis server
// Header import is done from the script Header.js that we wrote
// Header is implemented in this project like this <Header/>
;/placed <head> tag code/ // so we placed a <head> tag syntax from index.js to here so that it doesnt matter what page we are on the head stays the same
//now we can see we are going to NFT Marketplace no matter what page we are on because we are defining it on the "app" level
;/Moralis server/ // when you create a server in Moralis website you wanna change the "initializedOnMount" to add "appId" and "serverURL"
// add these details as the environement Variable in ".env" file while NextJS comes with built-in support for these environment variables
import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header"
import Head from "next/head"
import { NotificationProvider } from "web3uikit"

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

//initializing this so we can delete the Moralis stuff
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.studio.thegraph.com/query/37562/nft-marketplace/v0.0.1",
})

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Nft Marketplace by "MMuaaz"</title>
                <meta name="description" content="NFT Marketplace" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <ApolloProvider client={client}>
                    <NotificationProvider>
                        <Header />
                        <Component {...pageProps} />
                    </NotificationProvider>
                </ApolloProvider>
            </MoralisProvider>
        </div>
    )
}

export default MyApp
