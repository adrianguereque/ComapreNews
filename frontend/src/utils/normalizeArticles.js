// para el componente que requiere el mismo formato de json
export function normalizeGuardianAd(ad) {
  return {
    title: ad.webTitle || 'No Title',
    description: ad.fields?.trailText || ad.sectionName || 'No Description',
    date: ad.webPublicationDate || '', 
    link: ad.webUrl || ''
  };
}

export function normalizeTimesAd(ad) {
  return {
    title: ad.headline?.main || 'No Title',
    description: ad.snippet || 'No Description',
    date: ad.pub_date || '', 
    link: ad.web_url || ''
  };
}
