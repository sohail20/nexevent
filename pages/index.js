// import { useQuerySubscription } from "react-datocms";
// import CustomCard from "../component/cards/CustomCard";
// import SimpleCard from "../component/cards/SimpleCard";
import algoliasearch from "algoliasearch/lite";
import {
  ClearRefinements,
  Configure,
  Hits,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
} from "react-instantsearch-dom";
// import "../styles/Home.module.css";
import { HitWithInsights } from "./HitWithInsights";
// import { useState } from "react"
// import BottomAppBar from '../component/BottomNavbar';
// import HomePage from './HomePage';
// import SearchPage from "./SearchPage";

const searchClient = algoliasearch(
  "QHYLAXTG31",
  "babc39e7f16ddece7fd1a1848312ff0e"
);

export default function Home() {
  
  return (
    <>
     <div className="ais-InstantSearch">
        <h1>Shopping</h1>
        <InstantSearch indexName="dev_test" searchClient={searchClient}>
          <div className="left-panel">
            <ClearRefinements />
            <h2>Brands</h2>
            <RefinementList attribute="postType.en" />
            <Configure hitsPerPage={2} clickAnalytics />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={HitWithInsights} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    </>
  );
}
