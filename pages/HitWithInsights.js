import { connectHitInsights } from "react-instantsearch-dom";
import PropTypes from "prop-types";

function Hit({ hit, insights }) {

    let userToken;

    if (typeof window !== "undefined") {
        setTimeout(() => {
            window && window.aa('getUserToken', null, (_, token) => {
                userToken = token
            })
        }, 3000)
    }

    return (
        <div
            onClick={() => {
                insights && insights("clickedObjectIDsAfterSearch", {
                    eventName: hit.objectID,
                    userToken: userToken,
                });
            }}
            style={{
                cursor: "pointer"
            }}
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
            <div className="hit-description">
                {hit.heroCaption.en}
            </div>
            <div className="hit-price">{hit.price}</div>
        </div>
    );
}

Hit.propTypes = {
    hit: PropTypes.object.isRequired,
    insights: PropTypes.func.isRequired,
};

export const HitWithInsights = connectHitInsights(typeof window !== "undefined" ? window.aa : "")(Hit);
