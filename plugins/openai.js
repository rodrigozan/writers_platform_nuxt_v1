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
