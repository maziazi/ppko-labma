import { getPermalink, getBlogPermalink, getHomePermalink } from './utils/permalinks';
import logoLabma from './assets/images/logo-labma.png';
import tutWuriHandayani from './assets/images/tut-wuri-handayani.png';
import kampusMerdeka from './assets/images/kampus-merdeka.png';
import ppkoOrmawa from './assets/images/ppko-ormawa.png';
import logoUII from './assets/images/uii.png';

export const headerData = {
  links: [
    {
      text: 'Beranda',
      href: getHomePermalink(),
    },
    {
      text: 'Profil',
      href: getPermalink('profil'),
    },
    {
      text: 'Luaran',
      href: getPermalink('luaran'),
    },
    {
      text: 'Informasi',
      links:[
        {
          text: 'Artikel',
          href: getPermalink('artikel'),
        },
        {
          text: 'Blog',
          href: getBlogPermalink(),
        }
      ]
    },
    {
      text: 'Produk',
      links: [
        {
          text: 'Susu',
          href: getPermalink('susu'),
        },
        {
          text: 'Yoghurt',
          href: getPermalink('yoghurt'),
        },
        {
          text: 'Permen',
          href: getPermalink('permen'),
        },
        {
          text: 'Puding',
          href: getPermalink('puding'),
        },
        {
          text: 'Stik Susu',
          href: getPermalink('stik-susu'),
        },
      ],
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Produk',
      links: [
        { text: 'Susu', href: getPermalink('susu') },
        { text: 'Yoghurt', href: getPermalink('yoghurt') },
        { text: 'Permen', href: getPermalink('permen') },
        { text: 'Puding', href: getPermalink('puding') },
        { text: 'Stik Susu', href: getPermalink('stik-susu') },
      ],
    },    
    {
      title: 'Telusuri',
      links: [
        { text: 'Beranda', href: getHomePermalink() },
        { text: 'Profil', href: getPermalink('profil') },
        { text: 'Luaran', href: getPermalink('luaran') },
        { text: 'Artikel', href: getPermalink('artikel') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'PPKO', href: getPermalink('https://labma.uii.ac.id/') },
    { text: 'Laboratorium Mahasiswa', href: getPermalink('https://php2d.kemdikbud.go.id/') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/ppko.labmauii/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/juragansusu.purwobinangun/' },
    { ariaLabel: 'Tik-Tok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@ppko.labmauii' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/channel/UCY1I6Czec1mzZUZsBl2bOIQ' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/labmaunisi?locale=id_ID' },
  ],
  logos: [
    { src: tutWuriHandayani.src, alt: 'Tut Wuri Handayani' },
    { src: kampusMerdeka.src, alt: 'Kampus Merdeka' },
    { src: ppkoOrmawa.src, alt: 'PPK Ormawa' },
    { src: logoUII.src, alt: 'UII' },
    { src: logoLabma.src, alt: 'Laboratorium Mahasiswa UII' },

  ],
  address: 'Peternakan Sapi Perah Supi Farm, Kemiri, Purwobinangun, Kec. Pakem, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55582',
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="${logoLabma.src}" alt="onWidget logo" loading="lazy"></img>
    Dibuat oleh <a class="text-blue-600 underline dark:text-muted" href="https://labma.uii.ac.id/"> Laboratorium Mahasiswa UII</a>. © 2024
  `,
};
