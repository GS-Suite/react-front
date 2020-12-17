import React from 'react';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import HelpIcon from "@material-ui/icons/Help";
import DescriptionIcon from "@material-ui/icons/Description";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const SideBarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardOutlinedIcon />,
    cName: 'sidebar-text'
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: <SearchOutlinedIcon />,
    cName: 'sidebar-text'
  },
  {
    title: 'Channel',
    path: '/channel',
    icon: <LiveTvOutlinedIcon />,
    cName: 'sidebar-text'
  },
];

export default SideBarData;