import React from 'react';
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
import HitWithInsights from "../components/HitWithInsights";

const searchClient = algoliasearch(
    "QHYLAXTG31",
    "babc39e7f16ddece7fd1a1848312ff0e"
);

function MainScreen(props) {
    return (
        <div className="ais-InstantSearch">
            <h1></h1>
            <InstantSearch indexName="dev_test" searchClient={searchClient}>
                <div className="left-panel">
                    <ClearRefinements />
                    <h2>POST TYPES</h2>
                    <RefinementList attribute="postType.en" />
                    <Configure hitsPerPage={2} clickAnalytics />
                </div>
                <div className="right-panel" style={{ marginTop: 20 }}>
                    <div style={{
                        cursor: "pointer", marginTop: 0
                    }}>
                        <SearchBox />
                    </div>
                    <Hits hitComponent={HitWithInsights} />
                    <Pagination />
                </div>
            </InstantSearch>
        </div>
    );
}

export default MainScreen;