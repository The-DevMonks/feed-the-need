// All of the web3 logic is stored inside this!

import React, { useContext, createContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0xE611aF9A2f95Da089906D995eedE9eFde5213105');

    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');

    const address = useAddress();
    const connect = useMetamask();

    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign([
                address, // from the owner
                form.title, // title of the campaign
                form.description, // descriptiom
                form.target, // amount targetted
                new Date(form.deadline).getTime(), // deadline
                form.image
            ])

            console.log("contract called success", data);
        } 
        catch (error) {
            console.log("contract called failure", error);
            
        }

    }
        return (
            <StateContext.Provider
            value={{
                address,
                contract,
                createCampaign: publishCampaign
            }}
            >
                {children}
            </StateContext.Provider>
            
        )

}


export const useStateContext = () => useContext(StateContext);

