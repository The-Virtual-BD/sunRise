import { createContext, useContext } from "react";
import React from 'react';
import { useQuery } from "react-query";
import { fetchBrand, fetchFAQs, fetchNews, fetchProducts, fetchTeam, fetchWork } from "./fetching";

export const AppContext = createContext();


const DataCollection = ({children}) => {
    const { data: faqs, isLoading: faqLoading } = useQuery("faqs",fetchFAQs);
	const { data: brands, isLoading: brandLoading } = useQuery("brands",fetchBrand);
	const { data: products, isLoading: productsLoading } = useQuery("products",fetchProducts);
	const { data: news, isLoading: newsLoading } = useQuery("news",fetchNews);
	const { data: team, isLoading: teamLoading } = useQuery("team",fetchTeam);
	const { data: work, isLoading: workLoading } = useQuery("work",fetchWork);

    // console.log(faqs,brands)

   const value = {faqs,faqLoading,brands,brandLoading,products,productsLoading,news,newsLoading,team,teamLoading,work,workLoading};

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    
};

//Create Hooks for send data
export const useCollection = () => {
	const context = useContext(AppContext);
	return context;
};

export default DataCollection;