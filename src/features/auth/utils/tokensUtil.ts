import { storageUtil } from '@/shared';

type SetTokensArgs = {
  accessToken: string;
  refreshToken: string;
};

export const ACCESS_TOKEN_KEY = 'fincheck::access_token';
export const REFRESH_TOKEN_KEY = 'fincheck::refresh_token';

const storage = storageUtil(localStorage);

function getTokens() {
  const accessToken = storage.get<string>(ACCESS_TOKEN_KEY, false);
  const refreshToken = storage.get<string>(REFRESH_TOKEN_KEY, false);

  return {
    accessToken,
    refreshToken,
  };
}

function setTokens({ accessToken, refreshToken }: SetTokensArgs) {
  storage.set(ACCESS_TOKEN_KEY, accessToken);
  storage.set(REFRESH_TOKEN_KEY, refreshToken);
}

function removeTokens() {
  storage.remove(ACCESS_TOKEN_KEY);
  storage.remove(REFRESH_TOKEN_KEY);
}

export const tokensUtil = {
  getTokens,
  setTokens,
  removeTokens,
};
