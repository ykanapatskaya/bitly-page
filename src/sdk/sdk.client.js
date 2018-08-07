import BitlySDK from '../../scripts/sdk.js';

const credentials = {
  login: process.env.API_LOGIN,
  apiKey: process.env.API_KEY
}

class SDKClient {
  constructor() {
    this.bitlySDK = new BitlySDK(credentials);
  }

  shorten(longUrl) {
    return this.bitlySDK.shorten(longUrl);
  }

  expand(shortUrl) {
    return this.bitlySDK.expand(shortUrl);
  }

  info(shortUrl) {
    return this.bitlySDK.info(shortUrl);
  }

  clicks(shortUrl) {
    return this.bitlySDK.clicks(shortUrl);
  }
}

//export default {};
export default new SDKClient();
