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
