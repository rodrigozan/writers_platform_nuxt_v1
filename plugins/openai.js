import axios from 'axios';

const apiKey = "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";

const baseURL = 'https://api.openai.com/v1';

export default (ctx, inject) => {
  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  });
  
  ctx.$openai = instance;
  inject('openai', instance);
};
