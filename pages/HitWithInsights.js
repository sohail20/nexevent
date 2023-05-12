// import { connectHitInsights } from "react-instantsearch-dom";

// export default function Hit({ hit, insights }) {

//     let userToken;

//     console.log("hithit", hit)
//     if (typeof window !== "undefined") {
//         setTimeout(() => {
//             window && window.aa('getUserToken', null, (_, token) => {
//                 userToken = token
//             })

//             window && window.dataLayer && window.dataLayer.push({
//                 algoliaUserToken: userToken,
//             });
//         }, 3000)
//     }

//     return (
//         <div
//             onClick={() => {
//                 insights && insights("clickedObjectIDsAfterSearch", {
//                     eventName: hit.objectID,
//                     userToken: userToken,
//                 });
//                 window.dataLayer.push({ event: 'Hits Viewed' });
//             }}
//             style={{
//                 cursor: "pointer"
//             }}
//             data-insights-object-id={`"${hit.objectID}"`}
//             data-insights-position={`"${hit.__position}"`}
//             data-insights-query-id={`"${hit.__queryID}"`}
//         >
//             <img
//                 src={hit.heroImage.imageUrl}
//                 align="left"
//                 alt={hit.heroImage.alt}
//                 style={{ width: 281 }}
//             />
//             <div className="hit-name">
//                 <b style={{ marginTop: 20 }}>{hit.title.en}</b>
//             </div>
//             <div className="hit-description">
//                 {hit.heroCaption.en}
//             </div>
//             <div className="hit-price">{hit.price}</div>
//         </div>
//     );
// }


// // const HitWithInsights = connectHitInsights(typeof window !== "undefined" ? window.aa : "")(Hit);

// // export default HitWithInsights


export default function Hits(){
    return (
        <p>aksdhasdkj</p>
    )
}