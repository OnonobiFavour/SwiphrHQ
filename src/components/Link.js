import {RiHome5Line} from 'react-icons/ri'
import {IoDownloadOutline} from 'react-icons/io5'
import {ImLoop2} from 'react-icons/im'
import {BsPeople} from 'react-icons/bs'
import {RiPriceTag2Line} from 'react-icons/ri'
import {BsGraphUp} from 'react-icons/bs'
import {BsFillBoxSeamFill} from 'react-icons/bs'


export const link = [
    {
        id: 1,
        to: '/',
        name: 'Home',
        icon: RiHome5Line,
    },
    {
        id: 2,
        to: '/Order',
        name: 'Order',
        icon: IoDownloadOutline,
    },
    {
        id: 3,
        to: '/Subscription',
        name: 'Subscription',
        icon: ImLoop2,
    },
    {
        id: 4,
        to: '/customers',
        name: 'Customers',
        icon: BsPeople,
    },
    {
        id: 5,
        to: '/product',
        name: 'Product',
        icon: BsFillBoxSeamFill,
        sublink: ['All products', 'Categories', 'Attribute', 'Gift card', 'Purchase link']
    },
    {
        id: 6,
        to: '/discount',
        name: 'Discount',
        icon: RiPriceTag2Line,
    },
    {
        id: 7,
        to: '/reporting',
        name: 'Reporting',
        icon: BsGraphUp,
    },
]