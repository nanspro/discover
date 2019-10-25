# discover
A subgraph for dapps which are put on https://dap.ps to be curated by community. 

## Installation
```
yarn install
yarn codegen
yarn deploy
```

## Example Query
Get metadata of latest 5 dapps
``` graphql
{
  dappMetas(first: 5) {
    id
    ipfsHash
    hash
    status
    details {
      id
      name
      description
      url
      uploader
      image
      category
      dateAdded
    }
  }
}
```
