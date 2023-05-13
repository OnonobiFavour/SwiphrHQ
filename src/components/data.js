import {BsFillBoxSeamFill} from 'react-icons/bs'
import {AiOutlineCreditCard} from 'react-icons/ai'
import {ImStack} from 'react-icons/im'
import {TbGiftCard} from 'react-icons/tb'



export const data = [
    {
        id: 1,
        icon: BsFillBoxSeamFill,
        name: 'Physical',
        meta: 'Item has weight and needs shipping or customers pickup'
    },
    {
        id: 2,
        icon: AiOutlineCreditCard,
        name: 'Digital',
        meta: 'Item is delivered digitally or provided as a service'
    },
    {
        id: 3,
        icon: ImStack,
        name: 'Bundle',
        meta: 'Items are grouped into several physical or digital products'
    },
    {
        id: 4,
        icon: TbGiftCard,
        name: 'Gift Card',
        meta: 'Generate a unique code for store credit when purchased.'
    }
]