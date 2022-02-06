import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://test.perseus.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://test.perseus.finance/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://test.perseus.finance/pools'
  },
  {
    label: 'Launchpad (coming...)',
    icon: 'TicketIcon',
    href: '/#',
  },
  {
    label: 'NFT (coming...)',
    icon: 'NftIcon',
    href: '/#',
  },
  {
    label: 'CoinMarketCap',
    icon: 'TicketIcon',
    href: '#',
  },
  {
    label: 'CoinGecko',
    icon: 'InfoIcon',
    href: 'https://www.coingecko.com/en/coins/ecochain-token',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Website',
        href: 'https://ecochaintoken.finance/',
      },
      {
        label: 'Github',
        href: 'https://github.com/ecochaintoken',
      },
    ],
  }
]

export default config
