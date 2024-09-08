

export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";


export const PHOTO_URL = "https://occ-0-4091-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZUJP6YZ91dji0qHO-1LebMprKqC8U6_jrdR1fHnzNfGAlDUMJ7QYEwavmNxBepU4zTpCwDE2elKm-RLQWjF2QNmQ6PJa9M.png?r=54a";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer' + process.env.REACT_APP_TMDB_API
  }
};

export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/de5aa17a-29b6-4167-8c39-834aae8f328e/PK-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_8056b691-2a93-40af-add4-ca200ba1151b_medium.jpg';

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGE = [{identifier: "en", name: "English"},
  {identifier: "urdu", name: "Urdu"},{identifier: "spanish", name: "Spanish"}
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
