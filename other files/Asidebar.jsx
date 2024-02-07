import React,{useEffect,lazy,Suspense} from "react";
import logo from "../../../assets/logo.svg";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  CubeIcon,
  WalletIcon,
  ReceiptRefundIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
    MagnifyingGlassIcon,
    Bars3Icon,
    XMarkIcon,
    CogIcon,
    Cog6ToothIcon,
    ChartBarSquareIcon,
    BuildingLibraryIcon,
    ChartBarIcon,
    UserCircleIcon,
    UserIcon,
    UserMinusIcon,
    Cog8ToothIcon,
    CurrencyDollarIcon,
    ClipboardDocumentCheckIcon,
    CalendarDaysIcon,
    UserGroupIcon,
    SpeakerWaveIcon,
    FireIcon,
    ChevronRightIcon,
  } from "@heroicons/react/24/outline";
import { BiSupport } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import Manage from "./DropdownMenu/Manage";
import Profile from "../Dashboard/Profile";
import Notification from "../Dashboard/Notification";
import cycle from "../../../assets/cycle.svg";
import Dashboard from "../Dashboard/Dashboard";
import Affiliate from "../Dashboard/Affiliate/Affiliate";
import Create from "./DropdownMenu/Create";
import { NavLink, useParams } from "react-router-dom";



const Asidebar = ({item,Dropdown}) => {
  const [open, setOpen] = React.useState(null);
  const [showDropdown, setShowDropdown] = React.useState(0);
  const { section } = useParams();
  
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
    setShowDropdown(null);
  };
  
  const handleDropdown = (value) => {
    setShowDropdown(showDropdown === value ? null : value);
  };
  
  useEffect(() => {
    // Use the 'section' parameter to set values accordingly
    switch (section) {
    //   case "dashboard":
    //     setOpen(item);
    //     setShowDropdown(Dropdown);
    //     break;
    //   case "affiliate":
    //     setOpen(item);
    //     setShowDropdown(Dropdown);
    //     break;
    //     case "manage":
    //     setOpen(item);
    //     setShowDropdown(Dropdown);
    //     break;
      // Handle other sections if needed
      default:
        // Set default values or handle other sections
        setOpen(item); // Set the default value for 'open'
        setShowDropdown(Dropdown); // Set the default value for 'showDropdown'
        break;
    }
  }, [section]);

  
  return (
    <>
      <div className="flex">
    <aside className="bg-side_bar_color w-[30vw] h-screen sticky top-0 md:block hidden overflow-y-auto">
      <div className="min-h-screen">
        <Card className="min-h-screen min-w-full pl-2 pb-4 bg-side_bar_color rounded-none">
          <div className="mb-4">
            <img src={logo} alt="brand" className="h-8 w-[14rem] mt-2" />
          </div>
          <List className="p-0">
          <NavLink to="/admin/aside/dashboard">
            <ListItem
              selected={open === 3}
              onClick={() => handleOpen(3)}
              className={`${
                open === 3
                  ? "text-side_bar_color rounded-none hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                  : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
              } rounded-tl-full rounded-bl-full`}
            >
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              
                
            Dashboard
              
            </ListItem>
            </NavLink>
            
            <NavLink to="/admin/aside/affiliate">

            <ListItem
              selected={open === 4}
              onClick={() => handleOpen(4)}
              className={`${
                open === 4
                  ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                  : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
              } rounded-tl-full rounded-bl-full`}
            >
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
 
            Affiliate
              {open === 4 ? (
               <ChevronDownIcon className="h-5 w-5" />
              ): 
              <ChevronRightIcon className="h-5 w-5"/>
              }
              
            </ListItem>
            </NavLink> 

            {open === 4 && (
              <div className="pl-4">
                {/* <NavLink to="/admin/aside/affiliate/manage"> */}
                <NavLink to="/admin/aside/affiliate/manage">

                <ListItem
                  selected={showDropdown === 41}
                  onClick={() => handleDropdown(41)}
                  className={`${
                    showDropdown === 41
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Manage
                </ListItem>
                </NavLink>
                {/* </NavLink> */}
                <ListItem
                  selected={showDropdown === 42}
                  onClick={() => handleDropdown(42)}
                  className={`${
                    showDropdown === 42
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Create
                </ListItem>
                {/* Add more dropdown menu items as needed */}
              </div>
            )}

<ListItem
              selected={open === 5}
              onClick={() => handleOpen(5)}
              className={`${
                open === 5
                  ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                  : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
              } rounded-tl-full rounded-bl-full`}
            >
              <ListItemPrefix>
                <UserIcon className="h-5 w-5" />
              </ListItemPrefix>
              Manage
              
              {open === 5 ? (
                <ChevronDownIcon className="h-5 w-5" />
              ): 
              <ChevronRightIcon className="h-5 w-5"/>
              }
              
            </ListItem>
            {open === 5 && (
              <div className="pl-4">
                <ListItem
                  selected={showDropdown === 51}
                  onClick={() => handleDropdown(51)}
                  className={`${
                    showDropdown === 51
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Manage
                </ListItem>
                <ListItem
                  selected={showDropdown === 52}
                  onClick={() => handleDropdown(52)}
                  className={`${
                    showDropdown === 52
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Create
                </ListItem>
                {/* Add more dropdown menu items as needed */}
              </div>
            )}
              <ListItem
              selected={open === 6}
              onClick={() => handleOpen(6)}
              className={`${
                open === 6
                  ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                  : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
              } rounded-tl-full rounded-bl-full`}
            >
              <ListItemPrefix>
                <UserMinusIcon className="h-5 w-5" />
              </ListItemPrefix>
              Verticle
              {open === 6 ? (
                <ChevronDownIcon className="h-5 w-5" />
              ): 
              <ChevronRightIcon className="h-5 w-5"/>
              }
              
            </ListItem>
            {open === 6 && (
              <div className="pl-4">
                <ListItem
                  selected={showDropdown === 61}
                  onClick={() => handleDropdown(61)}
                  className={`${
                    showDropdown === 61
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Manage
                </ListItem>
                <ListItem
                  selected={showDropdown === 62}
                  onClick={() => handleDropdown(62)}
                  className={`${
                    showDropdown === 62
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Create
                </ListItem>
                {/* Add more dropdown menu items as needed */}
              </div>
            )}
              <ListItem
              selected={open === 7}
              onClick={() => handleOpen(7)}
              className={`${
                open === 7
                  ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                  : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
              } rounded-tl-full rounded-bl-full`}
            >
              <ListItemPrefix>
                <ClipboardDocumentCheckIcon className="h-5 w-5" />
              </ListItemPrefix>
              Category
              
              {open === 7 ? (
                <ChevronDownIcon className="h-5 w-5" />
              ): 
              <ChevronRightIcon className="h-5 w-5"/>
              }
            </ListItem>
            {open === 7 && (
              <div className="pl-4">
                <ListItem
                  selected={showDropdown === 71}
                  onClick={() => handleDropdown(71)}
                  className={`${
                    showDropdown === 71
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Manage
                </ListItem>
                <ListItem
                  selected={showDropdown === 72}
                  onClick={() => handleDropdown(72)}
                  className={`${
                    showDropdown === 72
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Create
                </ListItem>
                {/* Add more dropdown menu items as needed */}
              </div>
            )}
                        <ListItem
              selected={open === 8}
              onClick={() => handleOpen(8)}
              className={`${
                open === 8
                  ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                  : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
              } rounded-tl-full rounded-bl-full`}
            >
              <ListItemPrefix>
                <SpeakerWaveIcon className="h-5 w-5" />
              </ListItemPrefix>
              Advertiser
              {open === 8 ? (
                <ChevronDownIcon className="h-5 w-5" />
              ): 
              <ChevronRightIcon className="h-5 w-5"/>
              }
            </ListItem>
            {open === 8 && (
              <div className="pl-4">
                <ListItem
                  selected={showDropdown === 81}
                  onClick={() => handleDropdown(81)}
                  className={`${
                    showDropdown === 81
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Manage
                </ListItem>
                <ListItem
                  selected={showDropdown === 82}
                  onClick={() => handleDropdown(82)}
                  className={`${
                    showDropdown === 82
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Create
                </ListItem>
                {/* Add more dropdown menu items as needed */}
              </div>
            )}
                        <ListItem
              selected={open === 9}
              onClick={() => handleOpen(9)}
              className={`${
                open === 9
                  ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                  : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
              } rounded-tl-full rounded-bl-full`}
            >
              <ListItemPrefix>
                <FireIcon className="h-5 w-5" />
              </ListItemPrefix>
              Offers
              {open === 9 ? (
                <ChevronDownIcon className="h-5 w-5" />
              ): 
              <ChevronRightIcon className="h-5 w-5"/>
              }
            </ListItem>
            {open === 9 && (
              <div className="pl-4">
                <ListItem
                  selected={showDropdown === 91}
                  onClick={() => handleDropdown(91)}
                  className={`${
                    showDropdown === 91
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Manage
                </ListItem>
                <ListItem
                  selected={showDropdown === 92}
                  onClick={() => handleDropdown(92)}
                  className={`${
                    showDropdown === 92
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Create
                </ListItem>
                <ListItem
                  selected={showDropdown === 93}
                  onClick={() => handleDropdown(93)}
                  className={`${
                    showDropdown === 93
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Application
                </ListItem>
                {/* Add more dropdown menu items as needed */}
              </div>
            )}
                        <ListItem
              selected={open === 10}
              onClick={() => handleOpen(10)}
              className={`${
                open === 10
                  ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                  : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
              } rounded-tl-full rounded-bl-full`}
            >
              <ListItemPrefix>
                <ChartBarSquareIcon className="h-5 w-5" />
              </ListItemPrefix>
              Reports
              {open === 10 ? (
                <ChevronDownIcon className="h-5 w-5" />
              ): 
              <ChevronRightIcon className="h-5 w-5"/>
              }
            </ListItem>
            {open === 10 && (
              <div className="pl-4">
                <ListItem
                  selected={showDropdown === 101}
                  onClick={() => handleDropdown(101)}
                  className={`${
                    showDropdown === 101
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Day
                </ListItem>
                <ListItem
                  selected={showDropdown === 102}
                  onClick={() => handleDropdown(102)}
                  className={`${
                    showDropdown === 102
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Offer
                </ListItem>
                <ListItem
                  selected={showDropdown === 103}
                  onClick={() => handleDropdown(103)}
                  className={`${
                    showDropdown === 103
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Affiliate
                </ListItem>
                <ListItem
                  selected={showDropdown === 104}
                  onClick={() => handleDropdown(104)}
                  className={`${
                    showDropdown === 104
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Country
                </ListItem>
                <ListItem
                  selected={showDropdown === 105}
                  onClick={() => handleDropdown(105)}
                  className={`${
                    showDropdown === 105
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Aff Sub 1
                </ListItem>
                <ListItem
                  selected={showDropdown === 106}
                  onClick={() => handleDropdown(106)}
                  className={`${
                    showDropdown === 106
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Aff Sub 2
                </ListItem>
                <ListItem
                  selected={showDropdown === 107}
                  onClick={() => handleDropdown(107)}
                  className={`${
                    showDropdown === 107
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Aff Sub 3
                </ListItem>
                <ListItem
                  selected={showDropdown === 108}
                  onClick={() => handleDropdown(108)}
                  className={`${
                    showDropdown === 108
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Click
                </ListItem>
                <ListItem
                  selected={showDropdown === 109}
                  onClick={() => handleDropdown(109)}
                  className={`${
                    showDropdown === 109
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Conversion
                </ListItem>
                <ListItem
                  selected={showDropdown === 1010}
                  onClick={() => handleDropdown(1010)}
                  className={`${
                    showDropdown === 1010
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Rejected
                </ListItem>
                <ListItem
                  selected={showDropdown === 1011}
                  onClick={() => handleDropdown(1011)}
                  className={`${
                    showDropdown === 1011
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  AutoHide
                </ListItem>
                <ListItem
                  selected={showDropdown === 1012}
                  onClick={() => handleDropdown(1012)}
                  className={`${
                    showDropdown === 1012
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Pending (0)
                </ListItem>
                <ListItem
                  selected={showDropdown === 1013}
                  onClick={() => handleDropdown(1013)}
                  className={`${
                    showDropdown === 1013
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Postback Log
                </ListItem>
                {/* Add more dropdown menu items as needed */}
              </div>
            )}
                        <ListItem
              selected={open === 11}
              onClick={() => handleOpen(11)}
              className={`${
                open === 11
                  ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                  : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
              } rounded-tl-full rounded-bl-full`}
            >
              <ListItemPrefix>
                <CurrencyDollarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Finance
              {open === 11 ? (
                <ChevronDownIcon className="h-5 w-5" />
              ): 
              <ChevronRightIcon className="h-5 w-5"/>
              }
            </ListItem>
            {open === 11 && (
              <div className="pl-4">
                <ListItem
                  selected={showDropdown === 111}
                  onClick={() => handleDropdown(111)}
                  className={`${
                    showDropdown === 111
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Manage
                </ListItem>
                <ListItem
                  selected={showDropdown === 112}
                  onClick={() => handleDropdown(112)}
                  className={`${
                    showDropdown === 112
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Create
                </ListItem>
                {/* Add more dropdown menu items as needed */}
              </div>
            )}
            

            {/* ... (other list items) */}
            <ListItem
              selected={open === 12}
              onClick={() => handleOpen(12)}
              className={`${
                open === 12
                  ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                  : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
              } rounded-tl-full rounded-bl-full`}
            >
              <ListItemPrefix>
                <BuildingLibraryIcon className="h-5 w-5" />
              </ListItemPrefix>
              Invoice
              {open === 12 ? (
                <ChevronDownIcon className="h-5 w-5" />
              ): 
              <ChevronRightIcon className="h-5 w-5"/>
              }
            </ListItem>
            {open === 12 && (
              <div className="pl-4">
                <ListItem
                  selected={showDropdown === 121}
                  onClick={() => handleDropdown(121)}
                  className={`${
                    showDropdown === 121
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Invoice
                </ListItem>
                <ListItem
                  selected={showDropdown === 122}
                  onClick={() => handleDropdown(122)}
                  className={`${
                    showDropdown === 122
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Generate
                </ListItem>
                {/* Add more dropdown menu items as needed */}
              </div>
            )}
            <ListItem
              selected={open === 13}
              onClick={() => handleOpen(13)}
              className={`${
                open === 13
                  ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                  : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
              } rounded-tl-full rounded-bl-full`}
            >
              <ListItemPrefix>
                <BiSupport className="h-5 w-5" />
              </ListItemPrefix>
              Account
            </ListItem>
            <ListItem
              selected={open === 14}
              onClick={() => handleOpen(14)}
              className={`${
                open === 14
                  ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                  : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
              } rounded-tl-full rounded-bl-full`}
            >
              <ListItemPrefix>
                <Cog8ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Settings
              {open === 14 ? (
                <ChevronDownIcon className="h-5 w-5" />
              ): 
              <ChevronRightIcon className="h-5 w-5"/>
              }
            </ListItem>
            {open === 14 && (
              <div className="pl-4">
                <ListItem
                  selected={showDropdown === 141}
                  onClick={() => handleDropdown(141)}
                  className={`${
                    showDropdown === 141
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  General
                </ListItem>
                <ListItem
                  selected={showDropdown === 142}
                  onClick={() => handleDropdown(142)}
                  className={`${
                    showDropdown === 142
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Appearance
                </ListItem>
                <ListItem
                  selected={showDropdown === 143}
                  onClick={() => handleDropdown(143)}
                  className={`${
                    showDropdown === 143
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  SMTP
                </ListItem>
                <ListItem
                  selected={showDropdown === 144}
                  onClick={() => handleDropdown(144)}
                  className={`${
                    showDropdown === 144
                      ? "text-side_bar_color hover:text-side_bar_color focus:text-side_bar_color bg-side_bar_text"
                      : "focus:bg-side_bar_text hover:bg-side_bar_text hover:text-side_bar_color text-side_bar_text"
                  } rounded-tl-full rounded-bl-full`}
                >
                  Register Question
                </ListItem>
                {/* Add more dropdown menu items as needed */}
              </div>
            )}
          </List>
        </Card>
      </div>
    </aside>
    <div className="w-full p-4">
 
   {/* {open ===3 && showDropdown === null &&(
    <Dashboard/>
   )} */}
{/* {open ===4 && showDropdown === null &&(
  <Affiliate/>
)} */}

      {/* { open ===4 && showDropdown ===41 && (
        <Manage/>
      )} */}
        {/* { open ===4 && showDropdown ===42 && (
        <Create/>
      )}


        { open ===5 && showDropdown ===52 && (
        <Create/>
      )} */}

      
    </div>
    </div>
    </>
  );
};

export default Asidebar;
