// RUN COMM: cp -r nextjs-nft-marketplace-solidity-course/ Lesson15-NftMarketplace-SolidityCourse-TheGraph/

//this way we copied the code from our previous lesson where we indexed using the MOralis server, into a new directory
// Then we deploy all of our SC to the testnet,
;/networkMapping on the new Graph project doesnt update as we didnt code it but it did update on the previous project so we grab the netwrokMapping from there/
;/Delete frp, CloudFunctions/ //since  we are  not  working with servers anymore
// we are going  to update our "_app.js" where we update the tag of Moralis Provider and replace for  the  add id => initiazeOnMount={false}
;/=============The Graph/ //https://thegraph.com/en/
//The graph is indexing querrying platform  for decentralized netoworks like ETH and like IPFS, near and evm compatible chains
;/subGraphs/ // https://thegraph.com/en/> products
//using the  Graph devs can build and publish openAPIs called the subgraph, they can use in their application,  to better querying capabilities of data stored on these  networks
//including features like filtering, sorting, relational data and  fullstack search
;/subGraph Studio/ //https://thegraph.com/en/ > products
//its gonna enable us to create a sub graph for other nodes to start indexing our events
;/Graph Explorer/ //find in products
// you can find many subGraphs created by other popular projects
;/Create a Subgraph/
//connect wallet > sign the signature > skip email notifications > create a subgraph > (fill the form)
// the subgraph you create need its own gitHub repo
// You can follow along the instruction in the guide there on the new Directory that we created
;/working on indexing the events on Graph............/
;/Reading from subGraph......../
// continue the project guide here
// RUN COMM: yarn add  @apollo/client
// RUN COMM: yarn add graphql
// this apollo client is how we are going to make queries to our newly created Graph
;/graphQL/ //graphQL syntax is going to be whats in the subGraph UI playground, as we can write syntax there
;/error resolve/ // front-end was not showing NFT images, so what we did was change the "null" address to be exact "0x0000000000000000000000000000000000000000" in every place, be it two
//files in the project or graph UI
;/Hosting our Dapp/ //we are using Image tag in the index.js which comes with pre-processing so cant use it on IPFS as it requires static websites
//we need to update the way we do images to host this on IPFS, but it can be done
