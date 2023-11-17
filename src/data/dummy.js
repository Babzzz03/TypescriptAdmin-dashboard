import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart  } from 'react-icons/fi';
import { BsKanban, BsBarChart } from 'react-icons/bs';
import { BiColorFill} from "react-icons/bi";
import { IoMdContacts } from 'react-icons/io';
import { IoSettingsOutline } from "react-icons/io5";
import { TfiWallet } from "react-icons/tfi";
import { GiQueenCrown } from "react-icons/gi";
import avatar from './avatar.jpg';
import masterCard from './masterCard.png';

export { avatar, masterCard };

export const links = [
    {
 
      links: [
        {
          name: "dashboard",
          icon: <FiShoppingBag />,
        },
      ],
    },
  
    {
     
      links: [
         {
          name: "products",
          icon: <IoMdContacts />,
        },
        {
          name: "orders",
          icon: <AiOutlineShoppingCart />,
        },
      
        {
          name: "transactions",
          icon: <TfiWallet />,
        },
        {
            name: "promotion",
            icon: <GiQueenCrown  />,
          },
      ],
    },
    {
      title: "others",
      links: [
        {
          name: "settings",
          icon: <IoSettingsOutline />,
        },
        {
          name: "support",
          icon: <BsKanban />,
        }
     
      ],
    },
    
  ];
  