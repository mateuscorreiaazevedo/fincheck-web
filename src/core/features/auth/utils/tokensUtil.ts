import { storageUtil } from '@/core/shared';

type SetTokensArgs = {
  accessToken: string;
  refreshToken: string;
};

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

const storage = storageUtil(localStorage);

function setTokens({ accessToken, refreshToken }: SetTokensArgs) {
  storage.set(ACCESS_TOKEN_KEY, accessToken);
  storage.set(REFRESH_TOKEN_KEY, refreshToken);
}

function removeTokens() {
  storage.remove(ACCESS_TOKEN_KEY);
  storage.remove(REFRESH_TOKEN_KEY);
}

export const tokensUtil = {
  accessToken: storage.get<string>(ACCESS_TOKEN_KEY),
  refreshToken: storage.get<string>(REFRESH_TOKEN_KEY),
  setTokens,
  removeTokens,
};
