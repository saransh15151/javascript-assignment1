/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let CAR_NFTs=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (model,color,type,seater) {
    let NFT={
        model:model,
        color:color,
        type:type,
        seater:seater

        
    }
    CAR_NFTs.push(NFT);


}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i=0;i<CAR_NFTs.length;i++){
    console.log("\n"+"CAR MODEL\t"+ CAR_NFTs[i].model);
    console.log("CAR COLOR\t"+ CAR_NFTs[i].color);
    console.log("CAR TYPE\t"+ CAR_NFTs[i].type);
    console.log("CAR SEATER\t"+ CAR_NFTs[i].seater+"\n");

    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Nft minted "+CAR_NFTs.length);

}

// call your functions below this line
mintNFT("BMW","BLACK","PETROL","4 SEATER");
mintNFT("AUDI","WHITE","PETROL","6 SEATER");
mintNFT("MERCEDES","GREEN","ELECTRIC","4 SEATER");
mintNFT("VOLVO","RED","ELECTRIC","4 SEATER");
listNFTs();
getTotalSupply();



