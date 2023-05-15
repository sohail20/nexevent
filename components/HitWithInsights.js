import { useEffect } from 'react';
import { connectHitInsights } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

function Hit({ hit, insights }) {
  let userToken;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window && window.aa('getUserToken', null, (_, token) => {
          userToken = token;
        });

        window &&
          window.dataLayer &&
          window.dataLayer.push({
            algoliaUserToken: userToken,
          });
      }, 3000);
    }
  }, []);

  return (
    <div
      onClick={() => {
        insights &&
          insights('clickedObjectIDsAfterSearch', {
            eventName: hit.objectID,
            userToken: userToken,
          });
      }}
      style={{
        cursor: 'pointer',
      }}
      data-insights-object-id={`"${hit.objectID}"`}
      data-insights-position={`"${hit.__position}"`}
      data-insights-query-id={`"${hit.__queryID}"`}
    >
      <img
        src={hit.heroImage.imageUrl}
        align="left"
        alt={hit.heroImage.alt}
        style={{ width: 281 }}
      />
      <div className="hit-name">
        <b style={{ marginTop: 20 }}>{hit.title.en}</b>
      </div>
      <div className="hit-description">{hit.heroCaption.en}</div>
      <div className="hit-price">{hit.price}</div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
  insights: PropTypes.func.isRequired,
};

let HitWithInsights = connectHitInsights(
  globalThis?.window?.aa
)(Hit)

export default HitWithInsights 