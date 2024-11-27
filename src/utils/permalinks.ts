import slugify from 'limax';
import { SITE, APP_BLOG } from 'astrowind:config';
import { trim } from '~/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.base || '/';

export const cleanSlug = (text = '') =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/');

export const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
export const CATEGORY_BASE = cleanSlug(APP_BLOG?.category?.pathname);
export const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || 'tag';
export const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink || `${BLOG_BASE}/%slug%`);

export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, SITE.site));
  return SITE.trailingSlash ? (url.endsWith('/') ? url : url + '/') : (url.endsWith('/') ? url.slice(0, -1) : url);
};

export const getPermalink = (slug = '', type = 'page'): string => {
  if (slug.startsWith('http://') || slug.startsWith('https://') || slug.startsWith('://') || slug.startsWith('#') || slug.startsWith('javascript:')) {
    return slug;
  }

  let permalink;
  switch (type) {
    case 'home':
      permalink = getHomePermalink();
      break;
    case 'blog':
      permalink = getBlogPermalink();
      break;
    case 'asset':
      permalink = getAsset(slug);
      break;
    case 'category':
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case 'profil':
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case 'luaran':
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case 'artikel':
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case 'susu':
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case 'permen':
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case 'yoghurt':
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case 'puding':
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case 'stik-susu':
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case 'tag':
      permalink = createPath(TAG_BASE, trimSlash(slug));
      break;
    case 'post':
      permalink = createPath(trimSlash(slug));
      break;
    case 'page':
    default:
      permalink = createPath(slug);
      break;
    case 'product':
      permalink = createPath('produk', trimSlash(slug));
      break;      
  }
  return definitivePermalink(permalink);
};

export const getHomePermalink = (): string => getPermalink('');
export const getBlogPermalink = (): string => getPermalink(BLOG_BASE);
export const getAsset = (path: string): string => '/' + [BASE_PATHNAME, path].map(trimSlash).filter(Boolean).join('/');

const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);

export const applyGetPermalinks = (menu: object = {}) => {
  if (Array.isArray(menu)) {
    return menu.map(applyGetPermalinks);
  } else if (typeof menu === 'object' && menu !== null) {
    const obj = {};
    for (const key in menu) {
      if (key === 'href') {
        if (typeof menu[key] === 'string') {
          obj[key] = getPermalink(menu[key]);
        } else if (typeof menu[key] === 'object') {
          if (menu[key].type === 'home') {
            obj[key] = getHomePermalink();
          } else if (menu[key].type === 'blog') {
            obj[key] = getBlogPermalink();
          } else if (menu[key].type === 'asset') {
            obj[key] = getAsset(menu[key].url);
          } else if (menu[key].url) {
            obj[key] = getPermalink(menu[key].url, menu[key].type);
          }
        }
      } else {
        obj[key] = applyGetPermalinks(menu[key]);
      }
    } 
    return obj;
  }
  return menu;
};
