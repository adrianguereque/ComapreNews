import React from 'react';

function AdComparison({ results }) {
  return (
    <div className="ad-comparison">
      {Object.entries(results).map(([source, ads]) => (
        <div key={source} className="ad-source">
          <h2>{source}</h2>
          {ads.map((ad, index) => (
            <div key={index} className="ad">
              <h3>{ad.title}</h3>
              <p>{ad.description}</p>
              {ad.price && <p className="price">Price: {ad.price}</p>}
              {ad.link && (
                <a href={ad.link} target="_blank" rel="noopener noreferrer" className="ad-link">
                  View Ad
                </a>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default AdComparison;