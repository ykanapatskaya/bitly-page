import bitlySDK from '@/sdk/sdk.client';

export function shortenLink(longUrl) {
  return dispatch => {
    bitlySDK.shorten(longUrl)
      .then(async (response) => {
        const bitlyUrl = response.url;

        const info = await bitlySDK.info(bitlyUrl);
        const clicks = await bitlySDK.clicks([bitlyUrl]);

        const data = {
          short_url: bitlyUrl,
          long_url: response.long_url,
          title: info.title,
          global_count: clicks[0].global_clicks
        }

        dispatch({
          type: 'UPDATE_SHORTEN_LIST',
          data
        })

      })
      .catch(errors => {
        console.log('errors', errors);
      });
  }
}
